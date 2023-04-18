from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.api import router
from database import SessionLocal, engine


app = FastAPI()

app.include_router(router)

origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:3000",
]

app.add_middleware(
            CORSMiddleware,
            allow_origins=origins,
            allow_credentials=True,
            allow_methods=['*'],
            allow_headers=["*"]
        )

def get_database_session():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()

