from multiprocessing.synchronize import Event
import redis, time

from backend.parsing.parser import parse
from backend.parsing.extractor import extract

r = redis.Redis(host="cache")

def _start_callback(): ...
def _extracted_callback(): ...
def _parsed_callback(): ...
def _clean_callback(): ...
def _done_callback(): ...

def worker(flag: Event):
    while not flag.is_set():
        task = r.rpop("parser_tasks")
        if task:
            if task.endswith(".xlsx"):
                raw_shedule = ""
        time.sleep(5)