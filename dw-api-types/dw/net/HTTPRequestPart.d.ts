import File = require('../io/File');
/**
 * Simple class representing a single part in a multi-part HTTP POST request. A part always has a name, and either a string value or a value which comes from the contents of a File. For each of the two types, a character encoding may be specified, and for file parts, a content type may additionally be specified.
 */
declare class HTTPRequestPart {
    /**
     * The content type of this part.
     */
    readonly contentType  :  string

    /**
     * Get the charset to be used to encode the string.
     */
    readonly encoding  :  string

    /**
     * Get the file value of the part.
     */
    readonly fileValue  :  File

    /**
     * Get the name of the part.
     */
    readonly name  :  string

    /**
     * Get the string value of the part.
     */
    readonly stringValue  :  string

    /**
     * Construct a part representing a simple string name/value pair.
     * @param name
     * @param value
     */
    constructor(name : string, value : string)

    /**
     * Construct a part representing a simple string name/value pair.
     * @param name
     * @param value
     * @param encoding
     */
    constructor(name : string, value : string, encoding : string)

    /**
     * Construct a part representing a name/File pair.
     * @param name
     * @param file
     */
    constructor(name : string, file : File)

    /**
     * Construct a part representing a name/File pair.
     * @param name
     * @param file
     * @param contentType
     * @param encoding
     */
    constructor(name : string, file : File, contentType : string, encoding : string)

    /**
     * Returns the content type of this part.
     */
    getContentType() : string

    /**
     * Get the charset to be used to encode the string.
     */
    getEncoding() : string

    /**
     * Get the file value of the part.
     */
    getFileValue() : File

    /**
     * Get the name of the part.
     */
    getName() : string

    /**
     * Get the string value of the part.
     */
    getStringValue() : string

}

export = HTTPRequestPart;
