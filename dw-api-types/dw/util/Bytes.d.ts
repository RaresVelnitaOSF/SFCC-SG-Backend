

/**
 * A simple immutable class representing an array of bytes, used for working with binary data in a scripting context. Limitation: The size of the resulting byte representation is limited to 10k bytes.
 */
declare class Bytes {
    /**
     * The maximum number of bytes that a Bytes object can represent == 10KB
     */
    static readonly MAX_BYTES  :  number;


    /**
     * The number of bytes represented by this object.
     */
    readonly length  :  number;

    /**
     * Construct a Bytes object from the given string using the default encoding.
     * @param string
     */
    constructor(string : string);

    /**
     * Construct a Bytes object from the given string using the given encoding.
     * @param string
     * @param encoding
     */
    constructor(string : string, encoding : string);

    /**
     * Returns the value of the byte at position index as an integer.
     * @param index
     */
    byteAt(index : number) : number

    /**
     * Return a new Bytes object containing the subsequence of this object's bytes specified by the index and length parameters.
     * @param index
     * @param length
     */
    bytesAt(index : number, length : number) : Bytes

    /**
     * Returns the number of bytes represented by this object.
     */
    getLength() : number

    /**
     * Absolute get method for reading a signed integer value (32 bit) in network byte order(= big endian).
     */
    intAt(index : number) : number

    /**
     * Return a new Bytes object which has the same bytes as this one in reverse order.
     */
    reverse() : Bytes

    /**
     * Absolute get method for reading a signed short value (16 bit) in network byte order(= big endian).
     * @param index
     */
    shortAt(index : number) : number

    /**
     * Constructs a new String by decoding this array of bytes using the default encoding.
     */
    toString() : string

    /**
     * Constructs a new String by decoding this array of bytes using the specified encoding.
     * @param encoding
     */
    toString(encoding : string) : string

}

export = Bytes;
