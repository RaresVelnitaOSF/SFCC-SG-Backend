import File = require('./File');
import Bytes = require('../util/Bytes');

declare class RandomAccessFileReader {
    /**
     * The current offset in this file.
     */
    position : number
    /**
     * Construct a reader for random read access to the provided file.
     * @param file - The file to be read. Must not be null.
     */
    constructor(file : File);
    /**
     * Closes this random access file reader and releases any system resources associated with the stream.
     */
    close() : void
    /**
     * Returns the current offset in this file.
     */
    getPosition() : number
    /**
     * Returns the length of this file.
     */
    length() : number
    /**
     * Reads a signed eight-bit value from the file starting from the current file pointer.
     * Since the byte is interpreted as signed, the value returned will always be between -128 and +127.
     */
    readByte() : number
    /**
     * Reads up to n bytes from the file starting at the current file pointer.
     * If there are fewer than n bytes remaining in the file, then as many bytes as possible are read.
     * If no bytes remain in the file, then null is returned.
     * @param numBytes - The number of bytes to read. Must be non-negative and smaller than Bytes.MAX_BYTES or an exception will be thrown.
     */
    readBytes(numBytes : number) : Bytes
    /**
     * Sets the file-pointer offset, measured from the beginning of this file, at which the next read occurs.
     * The offset may be set beyond the end of the file.
     * @param position - the offset position, measured in bytes from the beginning of the file, at which to set the file pointer
     */
    setPosition(position : number) : void
}

export = RandomAccessFileReader;
