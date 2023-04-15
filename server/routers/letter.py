
from models import letter
from router import router

@router.post("/process")
async def process_letter(data: letter):
    return data
