
import Service = require('./Service');

interface ServiceCallback<SERVICE> {
    /**
     * Creates a request object to be used when calling the service.
     */
    createRequest?(service : SERVICE, ...params : any[]) : any

    /**
     * Provides service-specific execution logic.
     */
    execute?(service : SERVICE, request : any) : any

    /**
     * Allows filtering communication URL, request, and response log messages.
     */
    filterLogMessage?(msg : string) : string

    /**
     * Creates a communication log message for the given request.
     */
    getRequestLogMessage?(request : any) : string

    /**
     * Creates a response log message for the given request.
     */
    getResponseLogMessage?(response : any) : string

    /**
     * Allows overriding the URL provided by the service configuration.
     */
    getURL?() : string

    /**
     * Creates a protocol-specific client object.
     */
    initServiceClient?(service : SERVICE) : any

    /**
     * Override this method to mock the remote portion of the service call.
     */
    mockCall?(service : SERVICE, requestObj : any) : any

    /**
     * Override this method to mock the entire service call, including the createRequest, execute, and parseResponse phases.
     */
    mockFull?(service : SERVICE, args : any) : any

    /**
     * Creates a response object from a successful service call.
     */
    parseResponse?(service : SERVICE, response : any) : any
}

export = ServiceCallback;
