import Map = require('../util/Map');
import List = require('../util/List');
import File = require('../io/File');
import HTTPRequestPart = require('./HTTPRequestPart');

/**
 * The HTTPClient class supports the HTTP methods GET, POST, HEAD, PUT, PATCH, OPTIONS, and DELETE. If a secure connection via HTTPS is established the used server certificate or the signing CAs certificate needs to be imported into the customer key store via Business Manager. Note: when this class is used with sensitive data, be careful in persisting sensitive information.
 */
declare class HTTPClient {
    /**
     * The maximum permitted size (in bytes) of an HTTP response when calling operations which write the response to file. (200MB)
     */
    static readonly MAX_GET_FILE_SIZE  :  number

    /**
     * The maximum permitted size (in bytes) of an HTTP response when calling operations which store the response in memory. (10MB)
     */
    static readonly MAX_GET_MEM_SIZE  :  number

/**
 * The returned message body as text for HTTP status code greater or equal to 400. Error messages are not written to the response file.
 */
readonly errorText  :  string

/**
 * All response headers as a map in which each entry represents an individual header. The key of the entry holds the header name and the entry value holds a list of all header values.
 */
readonly responseHeaders  :  Map<string, List<string>>

/**
 * The status code of the last HTTP operation.
 */
readonly statusCode  :  number

/**
 * The message text of the last HTTP operation.
 */
readonly statusMessage  :  string

/**
 * The returned message body as text for HTTP status codes between 200 and 299.
 */
readonly text  :  string

/**
 * The timeout for this client, in milliseconds.
 */
timeout  :  number
constructor();

/**
 * Calling this method enables caching for GET requests.
 * @param ttl
 */
enableCaching(ttl : number) : void

/**
 * Returns the returned message body as text for HTTP status code greater or equal to 400.
 */
getErrorText() : string

/**
 * Returns a specific response header from the last HTTP operation.
 * @param header
 */
getResponseHeader(header : string) : string

/**
 * Returns all the values of a response header from the last HTTP operation as a list of strings.
 * @param name
 */
getResponseHeaders(name : string) : List<string>

/**
 * Returns all response headers as a map in which each entry represents an individual header.
 */
getResponseHeaders() : Map<string, List<string>>

/**
 * Returns the status code of the last HTTP operation.
 */
getStatusCode() : number

/**
 * Returns the message text of the last HTTP operation.
 */
getStatusMessage() : string

/**
 * Returns the returned message body as text for HTTP status codes between 200 and 299.
 */
getText() : string

/**
 * Returns the returned message body as text for HTTP status codes between 200 and 299.
 * @param encoding
 */
getText(encoding : string) : string

/**
 * Returns the timeout for this client, in milliseconds.
 */
getTimeout() : number

/**
 * Opens the specified URL using the specified method.
 * @param method
 * @param url
 */
open(method : string, url : string) : void

/**
 * Opens the specified URL with the in parameter method specified Http method with given credentials [user, password] using HTTP basic authentication.
 * @param method
 * @param url
 * @param user
 * @param password
 */
open(method : string, url : string, user : string, password : string) : void

/**
 * Sends an HTTP request.
 */
send() : void

/**
 * This method performs the actual HTTP communication.
 * @param text
 */
send(text : string) : void

/**
 * This method performs the actual HTTP communication.
 * @param text
 * @param encoding
 */
send(text : string, encoding : string) : void

/**
 * This method performs the actual HTTP communication.
 * @param file
 */
send(file : File) : void

/**
 * This method performs the actual HTTP communication.
 * @param file
 */
sendAndReceiveToFile(file : File) : boolean

/**
 * This method performs the actual HTTP communication.
 * @param text
 * @param outFile
 */
sendAndReceiveToFile(text : string, outFile : File) : boolean

/**
 * This method performs the actual HTTP communication.
 * @param text
 * @param encoding
 * @param outFile
 */
sendAndReceiveToFile(text : string, encoding : string, outFile : File) : boolean

/**
 * Sends a multipart HTTP request.
 * @param parts
 * @param */
sendMultiPart(...parts : HTTPRequestPart[]) : boolean

/**
 * Sets a request header for the next HTTP operation.
 * @param key
 * @param value
 */
setRequestHeader(key : string, value : string) : void

/**
 * Sets the timeout for connections made with this client to the given number of milliseconds.
 * @param timeoutMillis
 */
setTimeout(timeoutMillis : number) : void


}

export = HTTPClient;
