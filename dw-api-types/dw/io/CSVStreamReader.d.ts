import Reader = require('./Reader');
import List = require('../util/List');

declare class CSVStreamReader {
    /**
     * Creates a new CSVStreamReader.
     * The separator character, the quote character and the number of header lines can be specified in the call.
     * @param ioreader - the reader to use.
     * @param separator - a string, which represents the separator character.
     * @param quote - a string, which represents the quote character.
     * @param skip - the number of lines to skip at the beginning of the file.
     */
    constructor(ioreader : Reader, separator? : string, quote? : string, skip? : number);
    /**
     * Closes the underlying reader.
     */
    close() : void
    /**
     * Returns a list of lines representing the entire CSV file.
     * Each line is a array of strings.
     * Using this method on large feeds is inherently unsafe and may lead to an out-of-memory condition.
     * Instead use method readNext() and process entries line by line.
     */
    readAll() : List<string[]>
    /**
     * Returns the next line from the input stream.
     * The line is returned as an array of strings.
     * The method returns null if the end of the stream is reached.
     */
    readNext() : string[]
}


export = CSVStreamReader;
