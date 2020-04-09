import File = require('../io/File');
import FTPFileInfo = require('./FTPFileInfo');

declare class FTPClient {
    /**
     * The maximum size for get() returning a File is forty times the default size for getting a file. The largest file allowed is 200MB.
     */
    static readonly MAX_GET_FILE_SIZE  :  number

    /**
     * The maximum size for get() returning a String is five times the default size for getting a String. The largest String allowed is 10MB.
     */
    static readonly MAX_GET_STRING_SIZE  :  number

    constructor();

    /**
     * Identifies if the FTP client is currently connected to the FTP server.
     */
    readonly connected  :  boolean

    /**
     * The reply code from the last FTP action.
     */
    readonly replyCode  :  number

    /**
     * The string message from the last FTP action.
     */
    readonly replyMessage  :  string

    /**
     * The timeout for this client, in milliseconds.
     */
    timeout  :  number

    /**
     * Changes the current directory on the remote server to the given path.
     * @param path
     */
    cd(path : string) : boolean

    /**
     *     Connects and logs on to an FTP Server as "anonymous" and returns a boolean indicating success or failure.
     * @param host
     */
    connect(host : string) : boolean

    /**
     * Connects and logs on to an FTP server and returns a boolean indicating success or failure.
     * @param host
     * @param user
     * @param password
     */
    connect(host : string, user : string, password : string) : boolean

    /**
     * Connects and logs on to an FTP Server as "anonymous" and returns a boolean indicating success or failure.
     * @param host
     * @param port
     */
    connect(host : string, port : number) : boolean

    /**
     * Connects and logs on to an FTP server and returns a boolean indicating success or failure.
     * @param host
     * @param port
     * @param user
     * @param password
     */
    connect(host : string, port : number, user : string, password : string) : boolean

    /**
     * Deletes the remote file on the server identified by the path parameter.
     * @param path
     */
    del(path : string) : boolean

    /**
     * The method first logs the current user out from the server and then disconnects from the server.
     */
    disconnect() : void

    /**
     * Reads the content of a remote file and returns it as a string using "ISO-8859-1" encoding to read it.
     * @param path
     */
    get(path : string) : string

    /**
     * Reads the content of a remote file and returns it as string using the passed encoding.
     * @param path
     * @param encoding
     */
    get(path : string, encoding : string) : string

    /**
     * Reads the content of a remote file and returns it as a string using "ISO-8859-1" encoding to read it.
     * @param path
     * @param maxGetSize
     */
    get(path : string, maxGetSize : number) : String

    /**
     * Reads the content of a remote file and returns it as a string using the specified encoding.
     * @param path
     * @param encoding
     * @param maxGetSize
     */
    get(path : string, encoding : string, maxGetSize : number) : String

    /**
     * Reads the content of a remote file and creates a local copy in the given file using the passed string encoding to read the file content and using the system standard encoding "UTF-8" to write the file.
     * @param path
     * @param encoding
     * @param file
     */
    get(path : string, encoding : string, file : File) : boolean

    /**
     * Reads the content of a remote file and creates a local copy in the given file using the passed string encoding to read the file content and using the system standard encoding "UTF-8" to write the file.
     * @param path
     * @param encoding
     * @param file
     * @param maxGetSize
     */
    get(path : string, encoding : string, file : File, maxGetSize : number) : boolean

    /**
     * Reads the content of a remote file and creates a local copy in the given file.
     * @param path
     * @param file
     */
    getBinary(path :string, file : File) : boolean

    /**
     * Reads the content of a remote file and creates a local copy in the given file.
     * @param path
     * @param file
     * @param maxGetSize
     */
    getBinary(path : string, file : File, maxGetSize : number) : boolean

    /**
     * Identifies if the FTP client is currently connected to the FTP server.
     */
    getConnected() : boolean

    /**
     * Returns the reply code from the last FTP action.
     */
    getReplyCode() : number

    /**
     * Returns the string message from the last FTP action.
     */
    getReplyMessage() : string

    /**
     * Returns the timeout for this client, in milliseconds.
     */
    getTimeout() : number

    /**
     * Returns a list of FTPFileInfo objects containing information about the files in the current directory.
     */
    list() : FTPFileInfo[] | null

    /**
     * Returns a list of FTPFileInfo objects containing information about the files in the remote directory defined by the given path.
     * @param path
     */
    list(path : string) : FTPFileInfo[] | null

    /**
     * Creates a directory
     * @param path
     */
    mkdir(path : string) : boolean

    /**
     * Puts the specified content to the specified full path using "ISO-8859-1" encoding.
     * @param path
     * @param content
     */
    put(path : string, content : string) : boolean

    /**
     * Put the given content to a file on the given full path on the FTP server.
     * @param path
     * @param content
     * @param encoding
     */
    put(path : string, content : string, encoding : string) : boolean

    /**
     * Put the content of the given file into a file on the remote FTP server with the given full path.
     * @param path
     * @param file
     */
    putBinary(path : string, file : File) : boolean

    /**
     * Deletes the remote directory on the server identified by the path parameter.
     * @param path
     */
    removeDirectory(path : string) : boolean

    /**
     * Renames an existing file.
     * @param from
     * @param to
     */
    rename(from : string, to : string) : boolean


    /**
     * Sets the timeout for connections made with the FTP client to the given number of milliseconds.
     * @param timeoutMillis
     */
    setTimeout(timeoutMillis : number) : void

}


export = FTPClient;
