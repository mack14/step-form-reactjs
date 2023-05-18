from passlib.hash import bcrypt

def get_password_hash(password):
    return bcrypt.hash(password)

def verify_password(plain_password, hashed_password):
    return bcrypt.verify(plain_password, hashed_password)
