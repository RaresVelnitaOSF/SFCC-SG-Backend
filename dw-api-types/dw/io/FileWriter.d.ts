import Writer = require('./Writer');
import File = require('./File');

declare class FileWriter extends Writer {
    /**
     * Get the current line separator (e.g. '\n' or '\r\n'), if no value is set the system default '\n' will be used.
     */
    lineSeparator : string
    /**
     * Constructs the writer for the specified file.
     * Optional file append mode is supported.
     * Uses "UTF-8" as encoding.
     * @param file - the file object to write to.
     * @param append - flag, whether the file should be written in append mode
     */
    constructor(file : File, append? : boolean);
    /**
     * Constructs the writer for the specified file with the specified encoding. Optional file append mode is supported.
     * @param file - the file object to write to.
     * @param encoding - the character encoding to use.
     * @param append - flag, whether the file should be written in append mode
     */
    constructor(file : File, encoding? : string, append? : boolean);
    /**
     * Get the current line separator (e.g. '\n' or '\r\n'), if no value is set the system default '\n' will be used.
     */
    getLineSeparator() : string
    /**
     * Set the line separator (e.g. '\n' or '\r\n'), if no value is set the system default '\n' will be used.
     * @param lineSeparator - that will be written at the end of each line
     */
    setLineSeparator(lineSeparator : string) : void
    /**
     * Writes the specified line and appends the line separator.
     * @param str - the line to write to the file.
     */
    writeLine(str : string) : void
}

export = FileWriter;
