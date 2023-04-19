from fastapi import APIRouter
from .manage_routes.user_routes.user_route import user_router
from .manage_routes.image_processing_routes.image_processing_route import image_router
from api.auth.jwt import auth_router

# Main Entry Point for the API V1 Routes
api_v1_router = APIRouter()


@api_v1_router.get("/")
async def read_root():
    """
    :return:
    """
    return {
        "Route": "API V1",
    }


# Including Auth Routes prefix with /auth tags Auth
api_v1_router.include_router(auth_router, prefix="/auth", tags=["Auth"])

# Including User Routes prefix with /users tags users
api_v1_router.include_router(user_router, prefix="/users", tags=["Users"])

# Including Process Routes prefix with /process tags image
api_v1_router.include_router(image_router, prefix="/process", tags=["Process"])
