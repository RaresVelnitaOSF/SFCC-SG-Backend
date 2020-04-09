import ExtensibleObject = require('../object/ExtensibleObject');
import MediaFile = require('../content/MediaFile');
import MarkupText = require('../content/MarkupText');
import PaymentCard = require('./PaymentCard');
import List = require('../util/List');
import PaymentProcessor = require('./PaymentProcessor');
import Customer = require('../customer/Customer');
import CustomAttributes = require('../object/CustomAttributes');

declare global {
    module ICustomAttributes {
        interface PaymentMethod extends CustomAttributes{
        }
    }
}

/**
 * The PaymentMethod class represents a logical type of payment a customer can make in the storefront. This class provides methods to access the payment method attributes, status, and (for card-based payment methods) the related payment cards.
A typical storefront presents the customer a list of payment methods that a customer can choose from after he has entered his billing address during the checkout. PaymentMgr.getApplicablePaymentMethods(Customer, String, Number) is used to determine the PaymentMethods that are relevant for the customer based on the amount of his order, his customer groups, and his shipping address.
 */
declare class PaymentMethod extends ExtensibleObject<ICustomAttributes.PaymentMethod> {

    /**
     * Returns 'true' if payment method is active (enabled), otherwise 'false' is returned.
     */
    readonly active  :  boolean

    /**
     * Returns enabled payment cards that are assigned to this payment method, regardless of current customer, country or payment amount restrictions. The payment cards are sorted as defined in the Business Manager.
     */
    readonly activePaymentCards  :  List<PaymentCard>

    /**
     * The description of the payment method.
     */
    readonly description  :  MarkupText

    /**
     * The unique ID of the payment method.
     */
    readonly ID  :  string

    /**
     * The reference to the payment method image.
     */
    readonly image  :  MediaFile

    /**
     * The name of the payment method.
     */
    readonly name  :  string

    /**
     * The payment processor associated to this payment method.
     */
    readonly paymentProcessor  :  PaymentProcessor

    private constructor();

    /**
     * Returns enabled payment cards that are assigned to this payment method, regardless of current customer, country or payment amount restrictions.
     */
    getActivePaymentCards() : List<PaymentCard>

    /**
     * Returns the sorted list of all enabled payment cards of this payment method applicable for the specified customer, country, payment amount and the session currency The payment cards are sorted as defined in the Business Manager.
     * @param customer 
     * @param countryCode 
     * @param paymentAmount 
     */
    getApplicablePaymentCards(customer : Customer, countryCode : string, paymentAmount : number) : List<PaymentCard>

    /**
     * Returns the description of the payment method.
     */
    getDescription() : MarkupText

    /**
     * Returns the unique ID of the payment method.
     */
    getID() : string

    /**
     * Returns the reference to the payment method image.
     */
    getImage() : MediaFile

    /**
     * Returns the name of the payment method.
     */
    getName() : string

    /**
     * Returns the payment processor associated to this payment method.
     */
    getPaymentProcessor() : PaymentProcessor

    /**
     * Returns 'true' if payment method is active (enabled), otherwise 'false' is returned.
     */
    isActive() : boolean

    /**
     * Returns 'true' if this payment method is applicable for the specified customer, country and payment amount and the session currency.
     * @param customer 
     * @param countryCode 
     * @param paymentAmount 
     */
    isApplicable(customer : Customer, countryCode : string, paymentAmount : number) : boolean

}

export = PaymentMethod;