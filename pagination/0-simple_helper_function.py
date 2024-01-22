#!/usr/bin/env python3

def index_range(page, page_size):
    """
    return a tuple of size two
    """
    start_index = (page - 1) * page_size
    last_index = page * page_size

    return (start_index, last_index)