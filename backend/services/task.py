from typing import AsyncIterable
import uuid

from backend.dependencies.interfaces import IRedisRepo, IFilesRepo

class TaskService:
    def __init__(self, redis_repo: IRedisRepo, files: IFilesRepo):
        self.redis_repo = redis_repo
        self.files = files

    async def add_parse_task(self, file: AsyncIterable[bytes]) -> str:
        task_id = str(uuid.uuid4())
        await self.files.save_task_content(file, task_id)
        await self.redis_repo.add_task("parse", task_id)
        return task_id