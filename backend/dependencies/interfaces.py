from typing import Protocol, AsyncIterable

class IRedisRepo(Protocol):
    async def add_task(self, task_info: str, task_id: str) -> str: ...

class IFilesRepo(Protocol):
    async def save_task_content(self, file: AsyncIterable[bytes], task_id: str) -> None: ...