import Service = require('./Service');
import HTTPClient = require('../net/HTTPClient');
import File = require('../io/File');

/**
 * Represents an HTTP Service.
 */
declare class HTTPService<T, K> extends Service<T, K> {
    /**
     * The authentication type.
     */
    authentication  :  string

    /**
     * The caching time to live value.
     */
    cachingTTL  :  number

    /**
     * The underlying HTTP client object.
     */
    readonly client  :  HTTPClient

    /**
     * The request body encoding to declare.
     */
    encoding  :  string

    /**
     * The output file, or null if there is none.
     */
    outFile  :  File | null

    /**
     * The request method.
     */
    requestMethod  :  string

    protected constructor();

    /**
     * Adds an HTTP Header.
     * @param name
     * @param val
     */
    addHeader(name : string, val : string) : this

    /**
     * Adds a query parameter that will be appended to the URL.
     * @param name
     * @param val
     */
    addParam(name : string, val : string) : this

    /**
     * Returns the authentication type.
     */
    getAuthentication() : string

    /**
     * Returns the caching time to live value.
     */
    getCachingTTL() : number

    /**
     * Returns the underlying HTTP client object.
     */
    getClient() : HTTPClient

    /**
     * Returns the request body encoding to declare.
     */
    getEncoding() : string

    /**
     *  Returns the output file, or null if there is none.
     */
    getOutFile() : File | null

    /**
     * Returns the request method.
     */
    getRequestMethod() : string

    /**
     * Sets the type of authentication.
     * @param authentication
     */
    setAuthentication(authentication : string) : this

    /**
     * Enables caching for GET requests.
     * @param ttl
     */
    setCachingTTL(ttl : number) : this

    /**
     * Sets the encoding of the request body (if any).
     * @param encoding
     */
    setEncoding(encoding : string) : this

    /**
     * Sets the output file in which to write the HTTP response body.
     * @param outFile
     */
    setOutFile(outFile : File) : this

    /**
     * Sets the HTTP request method.
     * @param requestMethod
     */
    setRequestMethod(requestMethod : string) : this
}

export = HTTPService;
