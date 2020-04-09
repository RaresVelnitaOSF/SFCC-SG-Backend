import List = require('../util/List')

declare class File {
    /**
     * Catalogs root directory.
     */
    static CATALOGS  :  string;
    /**
     * Reserved for future use.
     */
    static DYNAMIC  :  string;
    /**
     * Import/export root directory.
     */
    static IMPEX  :  string;
    /**
     * Libraries root directory.
     */
    static LIBRARIES  :  string;
    /**
     * The UNIX style '/' path separator, which must be used for files paths.
     */
    static SEPARATOR  :  string;
    /**
     * Static content root directory.
     */
    static STATIC  :  string;
    /**
     * Temp root directory.
     */
    static TEMP  :  string;
    /**
     * Indicates that this file is a directory.
     */
    readonly directory  :  Boolean;
    /**
     * Indicates if this file is a file.
     */
    readonly file  :  Boolean;
    /**
     * Return the full file path denoted by this File.
     * This value will be the same regardless of which constructor was used to create this File.
     */
    readonly fullPath  :  string;
    /**
     * The name of the file or directory denoted by this object.
     * This is just the last name in the pathname's name sequence.
     * If the pathname's name sequence is empty, then the empty string is returned.
     */
    readonly name  :  string;
    /**
     * The root directory type, e.g. "IMPEX" represented by this File.
     */
    readonly rootDirectoryType  :  string;

    /**
     * Creates a File from the given absolute file path in the file namespace.
     * @param absPath - the absolute file path throws IOException
     */
    constructor(absPath : string);

    /**
     * Creates a File given a root directory and a relative path.
     * @param rootDir - File object representing root directory
     * @param relPath - relative file path
     */
    constructor(rootDir : File, relPath : string);

    /**
     * Copy a file.
     * @param file - the File object to copy to
     */
    copyTo(file : File) : File

    /**
     * Create file.
     */
    createNewFile() : boolean;

    /**
     * Indicates if the file exists.
     */
    exists() : boolean;

    /**
     * Return the full file path denoted by this File.
     */
    getFullPath() : string;

    /**
     * Returns the name of the file or directory denoted by this object.
     */
    getName() : string;

    /**
     * Returns a File representing a directory for the specified root directory type.
     * @param rootDir - root directory type (see the constants defined in this class)
     * @param args - root directory specific arguments
     */
    static getRootDirectory(rootDir : string, ...args : string[]) : File

    /**
     * Returns the root directory type, e.g.
     */
    getRootDirectoryType() : string;

    /**
     * Assumes this instance is a gzip file.
     * @param root - a File indicating root. root must be a directory.
     */
    gunzip(root : File) : void;

    /**
     * GZip this instance into a new gzip file.
     * @param outputZipFile - the zip file created.
     */
    gzip(outputZipFile : File) : void;

    /**
     * Indicates that this file is a directory.
     */
    isDirectory() : boolean;

    /**
     * Indicates if this file is a file.
     */
    isFile() : boolean;

    /**
     * Return the time, in milliseconds, that this file was last modified.
     */
    lastModified() : number;

    /**
     * Return the length of the file in bytes.
     */
    length() : number;

    /**
     * Returns an array of strings naming the files and directories in the directory denoted by this object.
     */
    list() : string[];

    /**
     * Returns an array of File objects in the directory denoted by this File.
     */
    listFiles() : List<File>;

    /**
     * Returns an array of File objects denoting the files and directories in the directory denoted by this object that satisfy the specified filter.
     * @param filter - a Javascript function which accepts a File argument and returns true or false.
     */
    listFiles(filter : (file : File) => boolean) : List<File>;

    /**
     * Returns an MD5 hash of the content of the file of this instance.
     */
    md5() : string;

    /**
     * Creates a directory.
     */
    mkdir() : boolean;

    /**
     * Creates a directory, including, its parent directories, as needed.
     */
    mkdirs() : boolean;

    /**
     * Deletes the file or directory denoted by this object.
     */
    remove() : boolean;

    /**
     * Rename file.
     * @param file - the File object to rename to
     */
    renameTo(file : File) : boolean;

    /**
     * Assumes this instance is a zip file.
     * @param root - a File indicating root. root must be a directory.
     */
    unzip(root : File) : void;

    /**
     * Zip this instance into a new zip file.
     * @param outputZipFile - the zip file created.
     */
    zip(outputZipFile : File) : void;

}

export = File; 