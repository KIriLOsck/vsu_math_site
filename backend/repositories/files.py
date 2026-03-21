from typing import AsyncIterable
import aiofiles

from logging import getLogger
logger = getLogger("Files repo")

class FilesRepository:
    async def save_task_content(self, file: AsyncIterable[bytes], task_id: str) -> None:
        async with aiofiles.open(f"tmp/{task_id}.task", "wb") as writeble_file:
            async for chunk in file:
                logger.info(type(chunk))
                await writeble_file.write(chunk)