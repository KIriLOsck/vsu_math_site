from fastapi import FastAPI
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine
from contextlib import asynccontextmanager
from backend.models import SheduleBase

from logging import getLogger
logger = getLogger("Database")

P_URL = "postgresql+asyncpg://admin:admin@database/db"

@asynccontextmanager
async def bases_lifespan(app: FastAPI):
    logger.info("Creating db engine....")
    engine = create_async_engine(P_URL, pool_size=20, max_overflow=10)

    app.state.pg_session_maker = async_sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)
    async with engine.begin() as connection:
        await connection.run_sync(SheduleBase.metadata.create_all)

    logger.info("Done!")
    yield
    logger.info("Dispose db engine...")
    await engine.dispose()