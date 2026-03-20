from contextlib import asynccontextmanager, AsyncExitStack
from concurrent.futures import ProcessPoolExecutor
from fastapi import FastAPI

from backend.core.engine import bases_lifespan
from backend.core.logger import setup_logging
from backend.core.loader import load_api, start_background_workers

@asynccontextmanager
async def lifespan(app: FastAPI):
    setup_logging()
    load_api(app)
    async with AsyncExitStack() as stack:
        app.state.process_pool = stack.enter_context(ProcessPoolExecutor())
        await stack.enter_async_context(start_background_workers(app.state.process_pool))
        await stack.enter_async_context(bases_lifespan(app))
        yield