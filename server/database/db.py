import pymongo
from decouple import config
from pymongo import mongo_client

client = mongo_client.MongoClient(
    config('MONGO_URI'), serverSelectionTimeoutMS=5000)

try:
    conn = client.server_info()
    print(f'Connected to MongoDB {conn.get("version")}')
except Exception:
    print("Unable to connect to the MongoDB server.")

db = client[config('MONGO_INITDB_DATABASE')]
