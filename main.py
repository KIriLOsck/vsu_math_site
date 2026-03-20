from fastapi import FastAPI
from backend.dependencies import dependencies

app = FastAPI(
    lifespan=dependencies.lifespan,
    docs_url="/api/docs",
    openapi_url="/api/openapi.json"
)