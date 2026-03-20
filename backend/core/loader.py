from fastapi import FastAPI, APIRouter
import importlib
import os, re

from logging import getLogger
logger = getLogger("Router Loader")

def load_module(app: FastAPI, api_folder, version, router):
    try:
        router_module = importlib.import_module(f"{api_folder}/{version}/{router[:-3]}".replace("/", "."))
    except Exception as e:
        logger.error(f"Error while load module 'api/{version}/{router}'")
        logger.error(e, stack_info=True)
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
            logger.info(f"Successfuly loaded router 'api.{version}.{router[:-3]}'")
        else:
            logger.warning(f"Module 'api/{version}/{router}' is not FastAPI router!")

def load_api(app: FastAPI):
    api_folder = "backend/api"
    dirs = os.listdir(api_folder)
    for version in dirs:
        if re.match(r'v\d+', version):
            files = os.listdir(api_folder + "/" + version)
            for router in files:
                if router.endswith(".py"):
                    load_module(app, api_folder, version, router)
                else:
                    logger.warning(f"Not python file found 'api/{version}/{router}'")
        else:
            logger.warning(f"Unsupportable version format 'api/{version}'")