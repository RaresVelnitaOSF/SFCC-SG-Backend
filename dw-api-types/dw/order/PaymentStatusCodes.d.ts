

/**
 * Helper class containing status codes for the various errors that can occur when validating a payment card. One of these codes is returned as part of a Status object when a unsuccessful call to the VerifyPaymentCard or VerifyCreditCard pipelet is made. The same codes are used when calling PaymentCard.verify(Number, Number, String) or PaymentCard.verify(Number, Number, String, String).
 */
declare class PaymentStatusCodes {
    /**
     * The code indicates that the credit card number is incorrect.
     */
    static readonly CREDITCARD_INVALID_CARD_NUMBER  :  string

    /**
     * The code indicates that the credit card is expired.
     */
    static readonly CREDITCARD_INVALID_EXPIRATION_DATE  :  string

    /**
     * The code indicates that the credit card security code length is invalid.
     */
    static readonly CREDITCARD_INVALID_SECURITY_CODE  :  string

}

export = PaymentStatusCodes;