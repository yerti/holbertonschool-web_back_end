#!/usr/bin/env python3
"""Script that returns a list if it contains
something else it returns none."""
from typing import Sequence, Any, Union


def safe_first_element(lst: Sequence[Any]) -> Union[Any, None]:
    """If we put an argument it returns a list and if not it returns none."""
    if lst:
        return lst[0]
    else:
        return None
