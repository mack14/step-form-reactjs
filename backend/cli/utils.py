import os


def shell(cmds, exit_on_error=True):
    cmds = cmds.strip()
    cmds = cmds.split('\n')
    for cmd in cmds:
        cmd = cmd.strip()
        return_value = os.system(cmd)
        if exit_on_error and return_value > 0:
            exit(return_value)
        elif return_value > 0:
            raise Exception(
                f'Command "{cmd}" returned a non-zero value ( {return_value} )'
            )
        return return_value
