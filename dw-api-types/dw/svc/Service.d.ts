
import ServiceConfig = require('./ServiceConfig');
import Result = require('./Result');
/**
 * Base class of Services.
A service represents a call-specific configuration. Configurations are inherited from a shared ServiceDefinition, and can be overridden for specific calls on the service.
 */
declare	class Service <REQ, RESP>{
    /**
     * Invokes the service.
     */
    call(...args: any[]): Result<RESP>;
    /**
     * Returns the property that stores the object returned by createRequest.
     */
    getRequestData(): REQ;
    /**
     * Returns the property that stores the object returned by the service.
     *
     * This property is only useful after the service [Service.call(Object[])](https://info.demandware.com/DOC2/index.jsp?topic=%2Fcom.demandware.dochelp%2FDWAPI%2Fscriptapi%2Fhtml%2Fapi%2Fclass_dw_svc_Service.html&anchor=dw_svc_Service_call_Object_DetailAnchor) completes, and is the same as the object
     * inside the [Result](https://info.demandware.com/DOC2/index.jsp?topic=%2Fcom.demandware.dochelp%2FDWAPI%2Fscriptapi%2Fhtml%2Fapi%2Fclass_dw_svc_Result.html).
     */
    getResponse(): RESP;
    /**
     * Forces the mock mode to be enabled.
     */
    setMock(): this;
    /**
     * Returns the status of whether this service is executing in mock mode.
     */
    isMock(): boolean;
    /**
     * Forces a Service to throw an error when there is a problem instead of returning a Result with non-OK status.
     */
    setThrowOnError(): this;
    /**
     * Returns the status of whether this service will throw an error when encountering a problem.
     */
    isThrowOnError(): boolean;
    /**
     * Override the URL to the given value. Any query parameters (if applicable) will be appended to this URL.
     */
    setURL(url: string): this;
    /**
     * Override the Credential by the credential object with the given ID.
     *
     * If the URL is also overridden, that URL will continue to override the URL in this credential.
     */
    setCredentialID(id: string): this;
    /**
     * Returns the ID of the currently associated Credential.
     */
    getCredentialID(): string;
    /**
     * Returns the current URL, excluding any custom query parameters.
     */
    getURL(): string;
    /**
     * Returns the Service Configuration.
     */
    getConfiguration(): ServiceConfig;
}

export = Service;
