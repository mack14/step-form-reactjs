from fastapi.routing import APIRouter
from fastapi import status, HTTPException
import secrets
from fastapi.encoders import jsonable_encoder

router = APIRouter()

@router.get("/")
def root():
    return {"message": "Hello World"}


 