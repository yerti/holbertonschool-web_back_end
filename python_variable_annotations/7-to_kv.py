#!/usr/bin/env python3
"""Script that returns a tuple."""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Function that returns a tuple."""
    return k, float(v ** 2)
