import ExtensibleObject = require('../object/ExtensibleObject');
import MediaFile = require('../content/MediaFile');
import MarkupText = require('../content/MarkupText');
import Customer = require('../customer/Customer');
import Status = require('../system/Status');
import CustomAttributes = require('../object/CustomAttributes');

declare global {
    module ICustomAttributes {
        interface PaymentCard extends CustomAttributes{
        }
    }
}
/**
 * Represents payment cards and provides methods to access the payment card attributes and status.
 */
declare class PaymentCard extends ExtensibleObject<ICustomAttributes.PaymentCard> {
    /**
     * Returns 'true' if payment card is active (enabled), otherwise 'false' is returned.
     */
    readonly active  :  boolean

    /**
     * The unique card type of the payment card.
     */
    readonly cardType  :  string

    /**
     * The description of the payment card.
     */
    readonly description  :  MarkupText

    /**
     * The reference to the payment card image.
     */
    readonly image  :  MediaFile

    /**
     * The name of the payment card.
     */
    readonly name  :  string

    private constructor();

    /**
     * Returns the unique card type of the payment card.
     */
    getCardType() : string

    /**
     * Returns the description of the payment card.
     */
    getDescription() : MarkupText

    /**
     * Returns the reference to the payment card image.
     */
    getImage() : MediaFile

    /**
     * Returns the name of the payment card.
     */
    getName() : string

    /**
     * Returns 'true' if payment card is active (enabled), otherwise 'false' is returned.
     */
    isActive() : boolean

    /**
     * Returns 'true' if this payment card is applicable for the specified customer, country and payment amount and the session currency.
     * @param customer 
     * @param countryCode 
     * @param paymentAmount 
     */
    isApplicable(customer : Customer | null, countryCode : string | null, paymentAmount : number | null) : boolean

    /**
     * Verify the card against the provided values.
     * @param expiresMonth 
     * @param expiresYear 
     * @param cardNumber 
     */
    verify(expiresMonth : number, expiresYear : number, cardNumber : string) : Status

    /**
     * Verify the card against the provided values.
     * @param expiresMonth 
     * @param expiresYear 
     * @param cardNumber 
     * @param csc 
     */
    verify(expiresMonth : number, expiresYear : number, cardNumber : string, csc : string) : Status

}

export = PaymentCard;