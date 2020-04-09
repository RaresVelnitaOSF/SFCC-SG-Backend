import Log = require('./Log');

/**
 * The Logger class provides logging utility methods.
 */
declare class Logger {
    /**
     * This method returns true if debug logging is enabled.
     */
    readonly debugEnabled  :  boolean

    /**
     * This method returns true if error logging is enabled.
     */
    readonly errorEnabled  :  boolean

    /**
     * This method returns true if info logging is enabled.
     */
    readonly infoEnabled  :  boolean

    /**
     * The root logger object.
     */
    readonly rootLogger  :  Log

    /**
     * This method returns true if warning logging is enabled.
     */
    readonly warnEnabled  :  boolean

    private constructor();

    /**
     * The method reports an debug level message.
     * @param msg 
     * @param args 
     * @param */ 
    static debug(msg : string, ...args : any[]) : void

    /**
     * The method reports an error level message.
     * @param msg 
     * @param args 
     */
    static error(msg : string, ...args : any[]) : void

    /**
     * Returns the logger object for the given category.
     * @param category 
     */
    static getLogger(category : string) : Log

    /**
     * Returns the logger object for the given file name prefix and category.
     * @param fileNamePrefix 
     * @param category 
     */
    static getLogger(fileNamePrefix : string, category : string) : Log

    /**
     * Returns the root logger object.
     */
    static getRootLogger() : Log

    /**
     * The method reports an information level message.
     * @param msg 
     * @param args 
     * */ 
    static info(msg : string, ...args : any[]) : void

    /**
     * This method returns true if debug logging is enabled.
     */
    static isDebugEnabled() : boolean

    /**
     * This method returns true if error logging is enabled.
     */
    static isErrorEnabled() : boolean

    /**
     * This method returns true if info logging is enabled.
     */
    static isInfoEnabled() : boolean

    /**
     * This method returns true if warning logging is enabled.
     */
    static isWarnEnabled() : boolean

    /**
     * The method reports an warning level message.
     * @param msg 
     * @param args 
     * @param */ 
    static warn(msg : string, ...args : any[]) : void

}

export = Logger;