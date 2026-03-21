from fastapi import Request, Depends
from redis.asyncio import Redis
from typing import Annotated

from backend import services
from backend import repositories

# sessions
def get_redis(request: Request) -> Redis:
    return request.app.state.redis
RedisSession = Annotated[Redis, Depends(get_redis)]

# repos
def get_redis_repo(redis: RedisSession) -> repositories.RedisRepository:
    return repositories.RedisRepository(redis)
RedisRepo = Annotated[repositories.RedisRepository, Depends(get_redis_repo)]

def get_files_repo() -> repositories.FilesRepository:
    return repositories.FilesRepository()
FilesRepo = Annotated[repositories.FilesRepository, Depends()]

#services
def get_tasks_service(
    redis_repo: RedisRepo,
    files_repo: FilesRepo
):
    return services.TaskService(
        redis_repo, files_repo
    )
TasksServiceDep = Annotated[services.TaskService, Depends(get_tasks_service)]