
import ExtensibleObject = require('../object/ExtensibleObject');
import ServiceProfile = require('./ServiceProfile');
import ServiceCredential = require('./ServiceCredential');
import CustomAttributes = require('../object/CustomAttributes');

declare global {
    module ICustomAttributes {
        interface ServiceConfig extends CustomAttributes{
        }
    }
}
/**
 * Configuration object for Services.
 */
declare class ServiceConfig extends ExtensibleObject<ICustomAttributes.ServiceConfig> {
    /**
     * Returns the unique Service ID.
     */
    getID(): string;
    /**
     * Returns the type of the service, such as HTTP or SOAP.
     */
    getServiceType(): string;
    /**
     * Returns the related service credentials.
     */
    getCredential(): ServiceCredential;
    /**
     * Returns the related service profile.
     */
    getProfile(): ServiceProfile;
}

export = ServiceConfig;
