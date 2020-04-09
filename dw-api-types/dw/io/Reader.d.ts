import List = require('../util/List');
import InputStream = require('./InputStream');

declare class Reader {
    /**
     * The method reads the whole input stream, parses it and returns a list of strings.
    Using this method on large feeds is inherently unsafe and may lead to an out-of-memory condition. Instead use method readLine() and process one line at a time.
    */
    readonly lines  :  List<string>

    /**
     * The method reads the whole input stream as one string and returns it.
    Using this method is unsafe if the length of the input stream is not known and may lead to an out-of-memory condition. Instead use method readN(Number).
    */
    readonly string  :  string;

    /**
     * Creates a reader from a string.
     * @param source - the source string.
     */
    constructor(source : string);

    /**
     * Create a reader from a stream using UTF-8 character encoding.
     * @param stream - the input stream to use.
     */
    constructor(stream : InputStream);

    /**
     * Create a reader from a stream using the specified character encoding.
     * @param stream - the input stream to use.
     * @param encoding - the encoding to use.
     */
    constructor(stream : InputStream, encoding : string);

    /**
     * Closes the reader.
     */
    close() : void

    /**
     * The method reads the whole input stream, parses it and returns a list of strings.
     */
    getLines() : List<string>

    /**
     * The method reads the whole input stream as one string and returns it.
     */
    getString() : string

    /**
     * Reads a single character from the stream.
     */
    read() : string

    /**
     * Reads multiple characters from the stream as string.
     * @param length - the number of characters to read.
     */
    read(length : number) : string

    /**
     * Reads the next line.
     */
    readLine() : string

    /**
     * Reads n characters from the stream as string.
     * @param n - the number of characters to read
     */
    readN(n : number) : string

    /**
     * Identifies if this stream is ready to be read.
     */
    ready() : boolean

    /**
     * Skips the specified number of characters in the stream.
     * @param n - the number of characters to skip.
     */
    skip(n : number) : void

}

export = Reader;
