import typer

from cli import api

cli = typer.Typer()

cli.add_typer(api.cli, name='api', chain=True)

if __name__ == '__main__':
    cli()
