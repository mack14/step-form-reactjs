import os
import typer
import uvicorn
import subprocess
from cli import utils

cli = typer.Typer()


@cli.command()
def install():
    """
    Install all dependencies from requirements.txt file
    """
    utils.shell('pip install -r requirements.txt')

@cli.command()
def run_dev(host: str = typer.Option('localhost'),
            port: int = typer.Option(8080)):
    """
    Run dev mode
    """
    env_path = os.path.join(os.getcwd(), '.env.dev')
    os.environ['ENV_DEV'] = env_path
    uvicorn.run('api.app:app', host=host, port=port, reload=True)


@cli.command()
def run(
        host: str = typer.Option("localhost", envvar="API_HOST"),
        port: int = typer.Option(8080, envvar="API_PORT"),
        log_level: str = typer.Option("error", envvar="API_LOGLEVEL")):
    """
    Run production
    """
    
    proc = subprocess.Popen(
        f'uvicorn api.app:app --host {host} --port {port} --log-level {log_level.lower()} --workers 4',
        shell=True)
    proc.wait()