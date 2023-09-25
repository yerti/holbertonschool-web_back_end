#!/usr/bin/env python3
"""Script that adds a list of integers and floats."""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Returns the sum of integers and floats."""
    add = sum(mxd_lst)
    return(add)
