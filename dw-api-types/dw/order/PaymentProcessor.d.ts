import ExtensibleObject = require('../object/ExtensibleObject');
import CustomAttributes = require('../object/CustomAttributes');

declare global {
    module ICustomAttributes {
        interface PaymentProcessor extends CustomAttributes {
        }
    }
}
/**
    A PaymentProcessor represents an entity that processes payments of one or more types. In the Commerce Cloud Digital system, a payment processor is just a container for configuration values, which describe, for example, the parameters (URL, merchant ID, password, etc) required for connecting to a payment gateway
 * 
 */
declare class PaymentProcessor extends ExtensibleObject<ICustomAttributes.PaymentProcessor> {
    /**
     * The 'ID' of this processor.
     */
    readonly ID  :  string

    private constructor();

    /**
     * Returns the 'ID' of this processor.
     */
    getID() : string

    /**
     * Returns the value of the specified preference for this payment processor.
     * @param name preference name. Typically an attribute defined on SitePreferences contained in an attribute group whose name is the same as this.ID.
     */
     getPreferenceValue(name : string) : Object | null

}

export = PaymentProcessor;