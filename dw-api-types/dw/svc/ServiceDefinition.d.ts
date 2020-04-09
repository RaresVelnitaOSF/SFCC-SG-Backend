import ServiceConfig = require('./ServiceConfig');
import Service = require('./Service');
import ServiceCallback = require('./ServiceCallback');

/**
 * Base class of Service Definitions.
 * <p>
 * A service definition represents configuration that is shared across all <a href="https://info.demandware.com/DOC2/index.jsp?topic=%2Fcom.demandware.dochelp%2FDWAPI%2Fscriptapi%2Fhtml%2Fapi%2Fclass_dw_svc_Service.html">Service</a> instances.
 */
declare class ServiceDefinition {
    /**
     * Register a callback to handle custom portions of the service.
     *
     * This callback may declare multiple methods:
     *
     * ```
     * {
     * initServiceClient: function() {
     * // Create and return the internal service client object.
     * // This is usually optional, except in the case of SOAP services.
     * },
     *
     * // svc is the call-specific Service instance. For example, it may be an HTTPService or FTPService.
     * // params are the arguments passed to the call method (if any).
     * createRequest: function(svc:Service, params) {
     * // Perform any required call-time configuration.
     * // Optionally return a Service-specific object
     * },
     *
     * // svc is the call-specific Service instance.
     * // arg is the output of createRequest.
     * execute: function(svc:Service, arg:Object) {
     * // Execute the service call and return a result
     * // This method is not required for HTTP-related services.
     * },
     *
     * // svc is the call-specific Service instance.
     * // response is the output of execute.
     * parseResponse: function(svc:Service, response: Object) {
     * // Process the response object as needed.
     * // The return value of this method will be the return value of the outer call method.
     * },
     *
     * // svc is the call-specific Service instance.
     * // arg is the output of createRequest.
     * mockCall: function(svc:Service, arg:Object) {
     * // This method takes the place of the 'execute' phase when mocking is enabled.
     * // Note initServiceClient, createRequest, and parseResponse still invoked.
     * },
     *
     * // svc is the call-specific Service instance.
     * // params are the arguments passed to the call method (if any).
     * mockFull: function(svc:Service, params) {
     * // This method takes the place of the entire service call when mocking is enabled.
     * // No other callbacks are invoked. The output of this method becomes the output of call.
     * }
     *
     * }
     * ```
     */
    configure<T, L, Q extends Service<T, L>>(config: ServiceCallback<Q>): ServiceDefinition;
    /**
     * Returns the name of this service.
     */
    getServiceName(): string;
    /**
     * Sets the mock mode for all Service instances that use this definition.
     */
    setMock(): ServiceDefinition;
    /**
     * Returns the status of whether mock mode is enabled for all instances of this definition.
     */
    isMock(): boolean;
    /**
     * Sets the throwOnError flag to true for all Service instances that use this definition.
     */
    setThrowOnError(): ServiceDefinition;
    /**
     * Returns the status of whether the shared throwOnError flag is set.
     */
    isThrowOnError(): boolean;
    /**
     * Returns the Service Configuration stored in the database.
     */
    getConfiguration(): ServiceConfig;
}


export = ServiceDefinition;
