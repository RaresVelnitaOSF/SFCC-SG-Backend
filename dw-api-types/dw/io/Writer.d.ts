import OutputStream = require('./OutputStream')

declare class Writer {
    /**
     * Create a writer from a stream using UTF-8 character encoding.
     * @param stream - the output stream to use when creating the writer.
     */
    constructor(stream : OutputStream)

    /**
     * Create a writer from a stream using the specified character encoding.
     * @param stream - the output stream to use when creating the writer.
     * @param encoding - the encoding to use when creating the writer.
     */
    constructor(stream : OutputStream, encoding : string)

    /**
     * Closes the writer.
     */
    close() : void

    /**
     * Flushes the buffer.
     */
    flush() : void

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

export = Writer