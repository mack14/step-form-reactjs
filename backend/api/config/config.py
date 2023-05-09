import os 

from dotenv import dotenv_values

def load_env():
    if os.getenv('ENV_DEV'):
        config = dotenv_values(os.getenv('ENV_DEV'))
        return config