import Writer = require('./Writer');

declare class StringWriter extends Writer {
    /**
     * Creates a new StringWriter.
     */
    constructor();
    /**
     * Returns a string representation of this writer.
     */
    toString() : string
    /**
     * Write the given string to the stream.
     * @param str - the string to write to the stream.
     */
    write(str : string) : void
    /**
     * Write the given string to the stream.
     * @param str - the string to write to the stream.
     * @param off - the offset from which to start writing characters to the stream.
     * @param len - the number of characters to write from the stream.
     */
    write(str : string, off : number, len : number) : void
}

export = StringWriter;
