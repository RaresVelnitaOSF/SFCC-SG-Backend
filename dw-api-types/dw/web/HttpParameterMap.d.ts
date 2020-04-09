
import Set = require('../util/Set');
import LinkedHashMap = require('../util/LinkedHashMap');
import HttpParameter = require('./HttpParameter');
import File = require('../io/File');


interface MultipartCallback {
    (fieldID: string, contentType: string, originalFileName: string): File;
}

declare class HttpParameterMap {
    /**
     * The number of paramters in this http parameter map.
     */
    readonly parameterCount: number;

    /**
     * A collection of all parameter names.
     */
    readonly parameterNames: Set<string>;

    /**
     * The HTTP request body as string (e.g. useful for XML posts). A body is only returned if the request is a POST or PUT request and was not send with "application/x-www-form-urlencoded" encoding. If the request was send with that encoding it is interpreted as form data and the body will be empty.
     */
    readonly requestBodyAsString: string;

    /**
     * Returns the http parameter for the given key or an empty http parameter, if no parameter is defined for that key.
     * @param name
     */
    get(name: string): HttpParameter;

    /**
     * Returns the number of paramters in this http parameter map.
     */
    getParameterCount(): number;

    /**
     * Returns a sub-map containing all parameters that start with the given prefix.
     * @param prefix
     */
    getParameterMap(prefix: string): HttpParameterMap;

    /**
     * Returns a collection of all parameter names.
     */
    getParameterNames(): Set<string>;

    /**
     * Returns the HTTP request body as string (e.g. useful for XML posts). A body is only returned if the request is a POST or PUT request and was not send with "application/x-www-form-urlencoded" encoding. If the request was send with that encoding it is interpreted as form data and the body will be empty.
     */
    getRequestBodyAsString(): string;

    /**
     * Identifies if the parameter has been submitted.
     * @param key
     */
    isParameterSubmitted(key: string): boolean;

    /**
     * This method can be called to process a form submission for an HTML form with encoding type "multipart/form-data".
     * @param callback
     */
    processMultipart(callback: MultipartCallback): LinkedHashMap<string, File>;

    private constructor();
}

export = HttpParameterMap;
