import Reader = require('./Reader');
import File = require('./File');

declare class FileReader extends Reader {
    /**
     * Constructs the reader.
     * @param file the file object to read.
     * @param [encoding] the character encoding to use
     */
    constructor(file: File, encoding?: string);
}


export = FileReader;
