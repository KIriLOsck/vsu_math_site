from fastapi import APIRouter, UploadFile, File, Depends
from typing import Annotated, AsyncIterable
from io import BytesIO

from backend import models
from backend import dependencies

from logging import getLogger
logger = getLogger("Parser API")

router = APIRouter(tags=["Парсинг"])

async def stream_adapter(file: UploadFile = File(...)) -> AsyncIterable[bytes]:
    async def wrapper():
        try:
            while chunk := await file.read(1024 * 1024): # 1 mb
                yield chunk
        finally: await file.close()
    yield wrapper()

@router.post("/shedule", response_model=models.TaskCreatedResponse)
async def parse_shedule(
    tasks: dependencies.TasksServiceDep,
    file: AsyncIterable[bytes] = Depends(stream_adapter)
):  
    task_id = await tasks.add_parse_task(file)
    return models.TaskCreatedResponse(task_id=task_id)