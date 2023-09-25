#!/usr/bin/env python3
"""script that returns multiple values
depending on the parameter passed to it"""
from typing import TypeVar, Mapping, Any, Union


T = TypeVar('T')


def safely_get_value(
        dct: Mapping,
        key: Any,
        default: Union[T, None] = None
        ) -> Union[Any, T]:
    """returns a value from the dictionary if the key is
    present or the default value if the key is not found in the dictionary"""
    if key in dct:
        return dct[key]
    else:
        return default
