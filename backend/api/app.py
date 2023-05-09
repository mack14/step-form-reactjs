from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.api.v1 import v1

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router( v1.router, tags=[ 'latest' ] )
app.include_router( v1.router, prefix='/v1', tags=[ 'v1' ] )


