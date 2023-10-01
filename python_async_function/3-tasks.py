#!/usr/bin/env python3
"""Script that create a async function."""
import asyncio


wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """returns a task that encapsulates the
    execution of the asynchronous wrapping function."""
    async def wrapping():
        return await wait_random(max_delay)

    return asyncio.create_task(wrapping())
