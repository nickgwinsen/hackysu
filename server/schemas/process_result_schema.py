from pydantic import BaseModel

class processResultSchema(BaseModel):
    predicted_letter: str