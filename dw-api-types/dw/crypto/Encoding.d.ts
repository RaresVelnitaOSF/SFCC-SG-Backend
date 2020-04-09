import Bytes = require('../util/Bytes');


declare class Encoding {
    private constructor();

    /**
     * Decode the given string which represents a sequence of characters encoded in base-64 to a byte array.
     * @param string
     */
    static fromBase64(string : string) : Bytes

    /**
     * Converts a String representing hexadecimal values into an array of bytes of those same values.
     * @param string
     */
    static fromHex(string : string) : Bytes

    /**
     * Decodes a URL safe string into its original form.
     * @param string
     */
    static fromURI(string : string) : String

    /**
     * Decodes a URL safe string into its original form using the specified encoding.
     * @param string
     * @param encoding
     */
    static fromURI(string : string, encoding : string) : string

    /**
     * Convert the given byte array to a string encoded in base-64.
     * @param bytes
     */
    static toBase64(bytes : Bytes) : string


    /**
     * Converts an array of bytes into a string representing the hexadecimal values of each byte in order.
     * @param bytes
     */
    static toHex(bytes : Bytes) : string

    /**
     * Encodes a string into its URL safe form according to the "application/x-www-form-urlencoded" encoding scheme using the default encoding.
     * @param string
     */
    static toURI(string : string) : string

    /**
     * Encodes a string into its URL safe form according to the "application/x-www-form-urlencoded" encoding scheme using the specified encoding.
     * @param string
     * @param encoding
     */
    static toURI(string : string, encoding : string) : string

}


export = Encoding;
