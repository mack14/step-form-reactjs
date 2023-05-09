from bson import ObjectId

from pydantic import BaseModel, Field, EmailStr

#bson to fastapi json
class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid objectid")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")

#user schemas

class TokenData(BaseModel):
    email: str

class UserLogin(BaseModel):
    email: str
    password : str


class User(BaseModel):
    id: PyObjectId = Field(default_factory= PyObjectId, alias = '_id' )
    firstname: str = Field(..., min_length=1)
    surname: str = Field(...)
    email: EmailStr = Field(...)
    password: str = Field(...)

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "firstname": "Jane",
                "surname": "Doe",
                "email": "jdoe@example.com",
                "password": "secret_code",
               
            }
        }

class UserResponse(BaseModel):
    id: PyObjectId = Field(default_factory= PyObjectId, alias = '_id' )
    firstname: str = Field(...)
    surname: str = Field(...)
    email: EmailStr = Field(...)
 
    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "firstname": "Jane",
                "surname": "Doe",
                "email": "jdoe@example.com", 
            }
        }

    