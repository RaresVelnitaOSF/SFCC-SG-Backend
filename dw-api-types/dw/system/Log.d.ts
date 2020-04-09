import LogNDC = require('./LogNDC');

/**
 * A log4j like logger instance. To obtain such an instance, use the Logger.getRootLogger() or Logger.getLogger(string) or Logger.getLogger(string, string) methods.
 */
declare class Log {

    /**
     * This method returns true if debug logging is enabled for this logging instance.
     */
    readonly debugEnabled: boolean

    /**
     * This method returns true if error logging is enabled for this logging instance.
     */
    readonly errorEnabled: boolean

    /**
     * This method returns true if information logging is enabled for this logging instance.
     */
    readonly infoEnabled: boolean

    /**
     * The Nested Diagnostic Context for this script call.
     */
    readonly NDC: LogNDC

    /**
     * This method returns true if warning logging is enabled for this logging instance.
     */
    readonly warnEnabled: boolean

    private constructor();

    /**
     * The method reports an debug level message.
     * @param msg
     * @param args
     * */
    debug(msg: string, ...args: any[]): void

    /**
     * The method reports an error level message.
     * @param msg
     * @param args
     * */
    error(msg: string, ...args: any[]): void

    /**
     * The method reports an warning level message.
     * @param msg
     * @param args
     */
    fatal(msg: string, ...args: any[]): void

    /**
     * Returns the Nested Diagnostic Context for this script call.
     */
    static getNDC(): LogNDC

    /**
     * The method reports an information level message.
     * @param msg
     * @param args
     * */
    info(msg: string, ...args: any[]): void

    /**
     * This method returns true if debug logging is enabled for this logging instance.
     */
    isDebugEnabled(): boolean

    /**
     * This method returns true if error logging is enabled for this logging instance.
     */
    isErrorEnabled(): boolean

    /**
     * This method returns true if information logging is enabled for this logging instance.
     */
    isInfoEnabled(): boolean

    /**
     * This method returns true if warning logging is enabled for this logging instance.
     */
    isWarnEnabled(): boolean

    /**
     * The method reports an warning level message.
     * @param msg
     * @param args
     * */
    warn(msg: string, ...args: any[]): void

}

export = Log;
