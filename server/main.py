from fastapi import FastAPI
from api.api import router
import database.db


app = FastAPI()
app.include_router(router)




