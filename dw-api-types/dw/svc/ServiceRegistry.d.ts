
import Service = require('./Service');
import ServiceDefinition = require('./ServiceDefinition');
import ServiceCallback = require('./ServiceCallback');

/**
 * @deprecated
 */
declare class ServiceRegistry {
    protected constructor();

    /**
     * Configure the given serviceId with a callback.
     * @param serviceID
     * @param configObj
     */
    static configure<T, L, Q extends Service<T, L>>(serviceID : string, configObj : ServiceCallback<Q>) : ServiceDefinition

    /**
     * Constructs a new instance of the given service.
     * @param serviceID
     */
    static get<REQ, RESP, SERVICE extends Service<REQ, RESP>>(serviceID : string) : SERVICE

    /**
     * Gets a Service Definition.
     * @param serviceID
     */
    static getDefinition(serviceID : string) : ServiceDefinition

    /**
     * Returns the status of whether the given service has been configured with a callback
     * @param serviceID
     */
    static isConfigured(serviceID : string) : boolean

}


export = ServiceRegistry;
