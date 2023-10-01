#!/usr/bin/env python3
"""Imports of the libraries that we are going to use."""
import asyncio
import random
from typing import List


wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Function that returns a list of loads
    depends on the number of arguments passed to us."""
    list_floats = [wait_random(max_delay) for _ in range(n)]

    delays = [await i for i in asyncio.as_completed(list_floats)]

    sorted_list = sorted(delays)

    return sorted_list
