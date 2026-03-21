from fastapi import FastAPI, APIRouter
import importlib
import os, re

from multiprocessing.synchronize import Event
import multiprocessing

from concurrent.futures import ProcessPoolExecutor
from contextlib import asynccontextmanager
from typing import Callable
import asyncio

from logging import getLogger
route_logger = getLogger("Router Loader")
worker_logger = getLogger("Worker Manager")

def _load_module(app: FastAPI, api_folder, version, router):
    try:
        router_module = importlib.import_module(f"{api_folder}/{version}/{router[:-3]}".replace("/", "."))
    except Exception as e:
        route_logger.error(f"Error while load module 'api/{version}/{router}'")
        route_logger.error(e, stack_info=True)
    else:
        if hasattr(router_module, "router"):
            api_router: APIRouter = router_module.router
            
            for route in api_router.routes:
                if hasattr(route, "tags"):
                    route.tags = [f"{version} {tag}" for tag in route.tags]

            app.include_router(
                api_router,
                prefix=f"/api/{version}/{router[:-3]}",
            )
            route_logger.info(f"Successfuly loaded router 'api.{version}.{router[:-3]}'")
        else:
            route_logger.warning(f"Module 'api/{version}/{router}' is not FastAPI router")

def load_api(app: FastAPI):
    api_folder = "backend/api"
    dirs = os.listdir(api_folder)
    for version in dirs:
        if re.match(r'v\d+', version):
            files = os.listdir(api_folder + "/" + version)
            for router in files:
                if router.endswith(".py"):
                    _load_module(app, api_folder, version, router)
                else:
                    route_logger.warning(f"Not python file found 'api/{version}/{router}'")
        else:
            route_logger.warning(f"Unsupportable version format 'api/{version}'")

def _get_worker(worker_path: str) -> Callable:
    try:
        worker_module = importlib.import_module(worker_path[:-3].replace("/", "."))
    except Exception as e:
        worker_logger.error(f"Error while start worker '{worker_path}'")
        worker_logger.error(e, stack_info=True)
    else:
        if hasattr(worker_module, "worker"):
            worker_func: Callable = worker_module.worker
            return worker_func
        else:
            worker_logger.warning(f"Module '{worker_path}' is not a worker")

async def single_worker_manager(
        worker_path: str,
        executor: ProcessPoolExecutor,
        flag: Event,
        current_loop: asyncio.AbstractEventLoop
) -> None:
    worker = _get_worker(worker_path)
    
    while not flag.is_set():
        try:
            await current_loop.run_in_executor(executor, worker, flag)
        except Exception as e:
            worker_logger.error(e, stack_info=True)
        worker_logger.warning(f"'{worker_path}' dead! Restarting after 5 seconds...")
        await asyncio.sleep(5) if not flag.is_set() else None

@asynccontextmanager
async def start_background_workers(executor: ProcessPoolExecutor):
    workers_path = "backend/workers"
    files = os.listdir(workers_path)
    tasks: list[asyncio.Task] = []
    stop_flag = multiprocessing.Manager().Event()
    current_loop = asyncio.get_event_loop()

    for worker_name in files:
        if worker_name.endswith("_worker.py"):
            manager_task = asyncio.create_task(single_worker_manager(workers_path + "/" + worker_name, executor, stop_flag, current_loop))
            worker_logger.info(f"Successfully started '{worker_name}'")
            tasks.append(manager_task)
        else:
            worker_logger.warning(f"Invalid worker-file format '{workers_path}/{worker_name}'")
    try:
        yield
        
    finally:
        worker_logger.info("Initiating graceful shutdown...")
        stop_flag.set()
        for task in tasks:
            task.cancel()
            
        await asyncio.gather(*tasks, return_exceptions=True)
        executor.shutdown(wait=True) 
        worker_logger.info("All workers stopped. Done!")