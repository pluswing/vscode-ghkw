import * as childProcess from 'child_process';

export abstract class CommandExecuter<R> {
    private command: string;
    constructor(command: string) {
        this.command = command;
    }

    abstract format(response: string): R;

    public execute(args: string): Promise<R> {
        return new Promise((resolve, reject) => {
            childProcess.exec(`${this.command} ${args}`, (error, stdout, _) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(this.format(stdout));
                }
            });
        });
    }
}
