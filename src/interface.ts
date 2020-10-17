export interface VCLoggerOptions {
    /**
     * logId will be used as prefix for each log
     */
    logId?: string;

    /**
     * verbosity of this logger
     *
     * e = 'error',
     * i = 'info',
     * d = 'debug',
     * w = 'warning'
     *
     * accept string, example: 'e,i,d,w'
     */
    verboseLevel?: string;

    /**
     * add date on log
     *
     * put the desired date format or keep empty to disable
     */
    dateFormat?: string;
}
