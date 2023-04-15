from typing import Union
from fastapi import FastAPI
from models.letter import Letter

app = FastAPI()


@app.get("/process")
async def process_letter(data: Letter):
    return data

