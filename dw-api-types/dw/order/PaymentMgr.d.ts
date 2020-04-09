import List = require('../util/List');
import PaymentCard = require('./PaymentCard');
import Customer = require('../customer/Customer');
import PaymentMethod = require('./PaymentMethod');


/**
 * PaymentMgr is used to access payment methods and payment cards of the current site.
To access payment methods and payment cards explicitly, use methods getPaymentMethod(String) and getPaymentCard(String).

To access active payment methods use method getActivePaymentMethods().

To access applicable payment methods for a customer, country and/or payment amount use method getApplicablePaymentMethods(Customer, String, Number).
 */
declare class PaymentMgr {
    /**
     * The sorted list of all enabled payment methods of the current site, regardless of any customer group, country, payment amount or currency restrictions. The payment methods are sorted as defined in the Business Manager.
     */
    readonly activePaymentMethods  :  List<PaymentMethod>

    private constructor();

    /**
     * Returns the sorted list of all enabled payment methods of the current site, regardless of any customer group, country, payment amount or currency restrictions.
     */
    static getActivePaymentMethods() : List<PaymentMethod>

    /**
     * Returns the sorted list of all enabled payment methods of the current site applicable for the session currency, specified customer, country and payment amount.
     * @param customer 
     * @param countryCode 
     * @param paymentAmount 
     */
    static getApplicablePaymentMethods(customer : Customer, countryCode : string, paymentAmount : number) : List<PaymentMethod>

    /**
     * Returns the payment card for the specified cardType or null if no such card exists in the current site.
     * @param cardType 
     */
    static getPaymentCard(cardType : string) : PaymentCard | null

    /**
     * Returns the payment method for the specified ID or null if no such method exists in the current site.
     * @param id 
     */
    static getPaymentMethod(id : string) : PaymentMethod | null
}

export = PaymentMgr;