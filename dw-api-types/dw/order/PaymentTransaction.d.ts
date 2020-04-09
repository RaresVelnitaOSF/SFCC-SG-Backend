import ExtensibleObject = require('../object/ExtensibleObject');
import EnumValue = require('../value/EnumValue');
import Money = require('../value/Money');
import OrderPaymentInstrument = require('./OrderPaymentInstrument');
import PaymentProcessor = require('./PaymentProcessor');
import CustomAttributes = require('../object/CustomAttributes');

declare global {
    module ICustomAttributes {
        interface PaymentTransaction extends CustomAttributes {
        }
    }
}

declare class PaymentTransaction extends ExtensibleObject<ICustomAttributes.PaymentTransaction> {
    static readonly TYPE_AUTH  :  string
    static readonly TYPE_AUTH_REVERSAL  :  string
    static readonly TYPE_CAPTURE  :  string
    static readonly TYPE_CREDIT  :  string

    /**
     * The amount of the transaction
     */
    amount  :  Money

    /**
     * The payment instrument related to this payment transaction.
     */
    readonly paymentInstrument  :  OrderPaymentInstrument

    /**
     * The payment processor related to this payment transaction.
     */
    paymentProcessor  :  PaymentProcessor

    /**
     * The payment service-specific transaction id.
     */
    transactionID  :  string

    /**
     * The value of the transaction type where the value is one of TYPE_AUTH, TYPE_AUTH_REVERSAL, TYPE_CAPTURE or TYPE_CREDIT.
     */
    type  :  EnumValue<string>

    private constructor();


    /**
     * Returns the amount of the transaction.
     */
    getAmount() : Money

    /**
     * Returns the payment instrument related to this payment transaction.
     */
    getPaymentInstrument() : OrderPaymentInstrument

    /**
     * Returns the payment processor related to this payment transaction.
     */
    getPaymentProcessor() : PaymentProcessor

    /**
     * Returns the payment service-specific transaction id.
     */
    getTransactionID() : string

    /**
     * Returns the value of the transaction type where the value is one of TYPE_AUTH, TYPE_AUTH_REVERSAL, TYPE_CAPTURE or TYPE_CREDIT.
     */
    getType() : EnumValue<string>

    /**
     * Sets the amount of the transaction.
     * @param amount 
     */
    setAmount(amount : Money) : void

    /**
     * Sets the payment processor related to this payment transaction.
     * @param paymentProcessor 
     */
    setPaymentProcessor(paymentProcessor : PaymentProcessor) : void

    /**
     * Sets the payment service-specific transaction id.
     * @param transactionID 
     */
    setTransactionID(transactionID : string) : void

    /**
     * 
     * @param type Sets the value of the transaction type where permissible values are TYPE_AUTH, TYPE_AUTH_REVERSAL, TYPE_CAPTURE or TYPE_CREDIT.
     */
    setType(type : string) : void

}

export = PaymentTransaction;