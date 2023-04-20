from fastapi import File, UploadFile, APIRouter
from services.image_processing_services.image_processing_service import ImageProcessingService


image_router = APIRouter()


# API Endpoint responsible for processing an image and giving a response
@image_router.post("/image", summary="process image")
async def process_image(file: UploadFile = File(...)):
    result = await ImageProcessingService.process_image(file)
    return {
        "code": 1,
        "message": "Success",
        "data": result
    }
