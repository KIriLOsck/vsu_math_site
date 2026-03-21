from redis.asyncio import Redis

class RedisRepository:
    def __init__(self, redis: Redis):
        self.redis = redis

    async def add_task(self, info: str, task_id: str) -> None: ...