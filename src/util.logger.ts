import { VCLoggerOptions } from './interface';

import * as moment from 'moment';

export class VCLogger {
    private options: VCLoggerOptions;
    private verboseLevel: string[];

    constructor(options: VCLoggerOptions) {
        this.options = options;

        const verboseLevel = options.verboseLevel || 'i';
        this.verboseLevel = verboseLevel.split(',');
    }

    private allowVerbose(verbose: string): boolean {
        const allow = this.verboseLevel.indexOf(verbose) !== -1;
        return allow;
    }

    private log(verboseType: string, verbose: string, ...args: any[]) {
        if (!this.allowVerbose(verboseType)) return;
        let date = '';
        if (this.options.dateFormat) {
            date = moment().format(this.options.dateFormat!);
        }

        const logId = this.options.logId || '';

        console.log(verbose, date, logId, ...args);
    }

    public info(...args: any[]) {
        this.log('i', '[info]', ...args);
    }

    public error(...args: any[]) {
        this.log('e', '[error]', ...args);
    }

    public debug(...args: any[]) {
        this.log('d', '[debug]', ...args);
    }

    public warning(...args: any[]) {
        this.log('w', '[warning]', ...args);
    }
}
