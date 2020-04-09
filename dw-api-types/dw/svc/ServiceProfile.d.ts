import ExtensibleObject = require('../object/ExtensibleObject');
import CustomAttributes = require('../object/CustomAttributes');

declare global {
    module ICustomAttributes {
        interface ServiceProfile extends CustomAttributes{
        }
    }
}


declare class ServiceProfile extends ExtensibleObject<ICustomAttributes.ServiceProfile> {
    /**
     * Returns the unique Service ID.
     */
    getID(): string;
    /**
     * Returns the interval of the circuit breaker in milliseconds.
     */
    getCbMillis(): number;
    /**
     * Returns the maximum number of errors in an interval allowed by the circuit breaker.
     */
    getCbCalls(): number;
    /**
     * Returns the interval of the rate limiter in milliseconds.
     */
    getRateLimitMillis(): number;
    /**
     * Returns the maximum number of calls in an interval allowed by the rate limiter.
     */
    getRateLimitCalls(): number;
    /**
     * Returns the service call timeout in milliseconds.
     */
    getTimeoutMillis(): number;
}

export = ServiceProfile;
