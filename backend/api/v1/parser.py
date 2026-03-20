from fastapi import APIRouter, File
from typing import Annotated
from io import BytesIO

from backend import models

from backend.parsing.parser import parse
from backend.parsing.extractor import extract

from logging import getLogger
logger = getLogger("Parser API")

router = APIRouter(tags=["Парсинг"])

@router.post("/shedule", response_model=models.SheduleModel)
async def parse_shedule(file: Annotated[bytes, File()]):
    raw_pairs = extract(BytesIO(file))
    result = parse(raw_pairs)
    return result