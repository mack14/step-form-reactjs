import motor.motor_asyncio
from api.config.config import load_env

env = load_env()

client = motor.motor_asyncio.AsyncIOMotorClient(env['MONGODB_URL'])
db = client[env['db']]