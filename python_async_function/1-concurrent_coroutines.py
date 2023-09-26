#!/usr/bin/env python3
""" """
import asyncio
import random


wait_random = __import__('0-basic_async_syntax').wait_random

async def wait_n(n, max_delay):
    delays = []
    tasks = [wait_random(max_delay) for _ in range(n)]

    for task in asyncio.as_completed(tasks):
        result = await task 
        delays.append(result)

    return sorted(delays)
