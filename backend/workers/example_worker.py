from multiprocessing.synchronize import Event
import time

def worker(flag: Event):
    while not flag.is_set():
        # do something...
        time.sleep(5)