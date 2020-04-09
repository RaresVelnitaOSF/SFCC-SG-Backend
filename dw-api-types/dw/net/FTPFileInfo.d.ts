

declare class FTPFileInfo {
    /**
     * Identifies if the file is a directory.
     */
    directory  :  boolean

    /**
     * The name of the file.
     */
    name  :  string

    /**
     * The size of the file.
     */
    size  :  number

    /**
     * The timestamp of the file.
     */
    timestamp  :  Date

    /**
     * Constructs the FTPFileInfo instance.
     * @param name
     * @param size
     * @param directory
     * @param timestamp
     */
    constructor (name : string, size : number, directory : boolean, timestamp : Date);

    /**
     * Identifies if the file is a directory.
     */
    getDirectory() : boolean

    /**
     * Returns the name of the file.
     */
    getName() : string

    /**
     * Returns the size of the file.
     */
    getSize() : number

    /**
     * Returns the timestamp of the file.
     */
    getTimestamp() : Date

}

export = FTPFileInfo;
