import Writer = require('./Writer');
import List = require('../util/List');

declare class CSVStreamWriter {
    /**
     * Creates a new CSVStreamWriter.
     * The separator character and the quote character can be specified in the call.
     * @param writer - the writer to use.
     * @param separator - a string, which represents the separator character.
     * @param quote - a string, which represents the quote character.
     */
    constructor(writer : Writer, separator? : string, quote? : string);
    /**
     * Closes the stream.
     */
    close() : void
    /**
     * Write a single line to the CSV file.
     */
    writeNext(line : string[]) : void
}


export = CSVStreamWriter;
