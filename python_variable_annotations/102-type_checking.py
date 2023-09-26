#!/usr/bin/env python3
"""import a typin"""
from typing import List, Tuple


def zoom_array(lst: Tuple, factor: int = 2) -> List:
    """function that receives a tuple as
    an argument and returns a list"""
    zoomed_in: List = [
        item for item in lst
        for i in range(factor)
    ]
    return zoomed_in


array = (12, 72, 91)

zoom_2x = zoom_array(array)

zoom_3x = zoom_array(array, 3)
