from pydantic import BaseModel

class Letter(BaseModel):
    letter: str
    confidene: float