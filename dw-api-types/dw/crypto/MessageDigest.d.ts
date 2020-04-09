import Bytes = require('../util/Bytes');
/**
 * This class provides the functionality of a message digest algorithm, such as MD5 or SHA. Message digests are secure one-way hash functions that take arbitrary-sized data and output a fixed-length hash value. This implementation offers only stateless digest() methods. A Bytes object or String is passed to a digest() method and the computed hash is returned.
 */

declare class MessageDigest {
    /**
     * Constant representing the MD2 algorithm
     */
    static readonly DIGEST_MD2  :  string

    /**
     * Constant representing the MD5 algorithm
     */
    static readonly DIGEST_MD5  :  string

    /**
     * Constant representing the SHA algorithm
     */
    static readonly DIGEST_SHA  :  string

    /**
     * Constant representing the SHA 1 algorithm
     */
    static readonly DIGEST_SHA_1  :  string

    /**
     *  Constant representing the SHA 256 algorithm
     */
    static readonly DIGEST_SHA_256  :  string

    /**
     * Constant representing the SHA 512 algorithm
     */
    static readonly DIGEST_SHA_512  :  string

    /**
     * Construct a MessageDigest with the specified algorithm name. The supported algorithms are:
        - MD5
        - MD2
        - SHA
        - SHA-1
        - SHA-256
        - SHA-512
     * @param algorithm
     */
    constructor(algorithm : string)

    /**
     * Completes the hash computation by performing final operations such as padding.
     */
    digest() : Bytes

    /**
     * Computes the hash value for the passed Bytes.
     * @param input
     */
    digestBytes(input : Bytes) : Bytes

    /**
     * Updates the digest using the passed Bytes.
     * @param input
     */
    updateBytes(input : Bytes) : void

}

export = MessageDigest;
