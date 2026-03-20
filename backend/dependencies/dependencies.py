from contextlib import asynccontextmanager, AsyncExitStack
from fastapi import FastAPI

from backend.core.engine import bases_lifespan
from backend.core.logger import setup_logging
from backend.core.loader import load_api

@asynccontextmanager
async def lifespan(app: FastAPI):
    setup_logging()
    load_api(app)
    async with AsyncExitStack() as stack:
        await stack.enter_async_context(bases_lifespan(app))
        yield