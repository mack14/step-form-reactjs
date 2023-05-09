from datetime import datetime
from typing import Annotated

from fastapi import Depends, HTTPException, status
from jose import JWTError, jwt
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel

from api.schemas.users.user_schema import TokenData
from api.schemas.users.operations import token_verify_email

from api.config.config import load_env
class Token(BaseModel):
    access_token: str
    token_type: str

env_variable = load_env()

SECRET_KEY = env_variable['SECRET_KEY'] 
ACCESS_TOKEN_EXPIRE_MINUTES = env_variable['ACCESS_TOKEN_EXPIRE_MINUTES'] 
ALGORITHM = env_variable['ALGORITHM']

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def create_access_token(data: dict):
    to_encode = data.copy()
    now = datetime.now()
    current_minutes = round(now.timestamp() / 60)
    expire = current_minutes + int(ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"expire": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

async def get_current_user(token: Annotated[str, Depends(oauth2_scheme)]):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("email")
        if email is None:
            raise credentials_exception
        token_data = TokenData(email=email)
    except JWTError:
        raise credentials_exception
    user = token_verify_email(email = token_data.email)
    if user is None:
        raise credentials_exception
    return user
