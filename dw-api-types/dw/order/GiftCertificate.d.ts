import ExtensibleObject = require('../object/ExtensibleObject');
import Money = require('../value/Money');

declare class GiftCertificate {
    /**
     * Represents a status of 'issued', which indicates that the Gift Certificate has been created and that it can be used to purchase products.
     */
    static readonly STATUS_ISSUED  :  number

    /**
     * Represents a status of 'partially redeemed', which indicates that the Gift Certificate has been used to purchase products, but that there is still a balance on the gift certificate.
     */
    static readonly STATUS_PARTIALLY_REDEEMED  :  number

    /**
     * Represents a status of 'pending', which indicates that the Gift Certificate has been created but that it cannot be used yet.
     */
    static readonly STATUS_PENDING  :  number

    /**
     * Represents a status of 'redeemed', which indicates that the Gift Certificate has been used and no longer contains a balance.

    */
    static readonly STATUS_REDEEMED  :  number

    /**
     * The original amount on the gift certificate.
     */
    readonly amount  :  Money

    /**
     * The balance on the gift certificate.
     */
    readonly balance  :  Money

    /**
     * The description string.
     */
    description  :  string

    /**
     * Returns true if the Gift Certificate is enabled, false otherwise.
     */
    enabled  :  boolean

    /**
     * The code of the gift certificate. This redemption code is send to gift certificate recipient.
     */
    readonly giftCertificateCode  :  string

    /**
     * The masked gift certificate code with all but the last 4 characters replaced with a '*' character.
     */
    readonly maskedGiftCertificateCode  :  string

    /**
     * The merchant ID of the gift certificate.
     */
    readonly merchantID  :  string

    /**
     * The message to include in the email of the person receiving the gift certificate.
     */
    message  :  string

    /**
     * The order number
     */
    orderNo  :  string

    /**
     * The email address of the person receiving the gift certificate.
     */
    recipientEmail  :  string

    /**
     * The name of the person receiving the gift certificate.
     */
    recipientName  :  string

    /**
     * The name of the person or organization that sent the gift certificate or null if undefined.
     */
    senderName  :  string | null

    /**
     * The status where the possible values are STATUS_PENDING, STATUS_ISSUED, STATUS_PARTIALLY_REDEEMED or STATUS_REDEEMED.
     */
    status  :  number

    private constructor();

    /**
     * Returns the original amount on the gift certificate.
     */
    getAmount() : Money

    /**
     * Returns the balance on the gift certificate.
     */
    getBalance() : Money

    /**
     * Returns the description string.
     */
    getDescription() : string

    /**
     * Returns the code of the gift certificate.
     */
    getGiftCertificateCode() : string

    /**
     * Returns the masked gift certificate code with all but the last 4 characters replaced with a '*' character.
     */
    getMaskedGiftCertificateCode() : string

    /**
     * Returns the masked gift certificate code with all but the specified number of characters replaced with a '*' character.
     * @param ignore 
     */
    getMaskedGiftCertificateCode(ignore : number) : string

    /**
     * Returns the merchant ID of the gift certificate.
     */
    getMerchantID() : string

    /**
     * Returns the message to include in the email of the person receiving the gift certificate.
     */
    getMessage() : string

    /**
     * Returns the order number
     */
    getOrderNo() : string

    /**
     * Returns the email address of the person receiving the gift certificate.
     */
    getRecipientEmail() : string

    /**
     * Returns the name of the person receiving the gift certificate.
     */
    getRecipientName() : string

    /**
     * Returns the name of the person or organization that sent the gift certificate or null if undefined.
     */
    getSenderName() : string | null

    /**
     * Returns the status where the possible values are STATUS_PENDING, STATUS_ISSUED, STATUS_PARTIALLY_REDEEMED or STATUS_REDEEMED.
     */
    getStatus() : number

    /**
     * Returns true if the Gift Certificate is enabled, false otherwise.
     */
    isEnabled() : boolean

    /**
     * An optional description that you can use to categorize the gift certificate.
     * @param description 
     */
    setDescription(description : string) : void

    /**
     * Controls if the Gift Certificate is enabled.
     * @param enabled 
     */
    setEnabled(enabled : boolean) : void

    /**
     * Sets the message to include in the email of the person receiving the gift certificate.
     * @param message 
     */
    setMessage(message : string) : void

    /**
     * Sets the order number
     * @param orderNo 
     */
    setOrderNo(orderNo : string) : void

    /**
     * Sets the email address of the person receiving the gift certificate.
     * @param recipientEmail 
     */
    setRecipientEmail(recipientEmail : string) : void

    /**
     * Sets the name of the person receiving the gift certificate.
     * @param recipient 
     */
    setRecipientName(recipient : string) : void

    /**
     * Sets the name of the person or organization that sent the gift certificate.
     * @param sender 
     */
    setSenderName(sender : string) : void

    /**
     * Sets the status of the gift certificate.
     * @param status 
     */
    setStatus(status : number) : void



}

export = GiftCertificate;