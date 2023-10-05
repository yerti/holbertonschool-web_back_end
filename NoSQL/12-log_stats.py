#!/usr/bin/env python3
"""Log stats"""
from pymongo import MongoClient


if __name__ == "__main__":
    client = MongoClient('mongodb://localhost:27017')
    db = client.logs
    col = db.nginx

    num_logs = col.count_documents({})

    print(f"{num_logs} logs")

    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]

    print("Methods:")
    for method in methods:

        count = col.count_documents({"method": method})

        print(f"\tmethod {method}: {count}")

    get_status = col.count_documents({
        "method": "GET",
        "path": "/status"
    })

    print(f"{get_status} status check")
