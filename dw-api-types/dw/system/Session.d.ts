import ClickStream = require('../web/ClickStream')
import Currency = require('../util/Currency')
import CustomAttributes = require('../object/CustomAttributes')
import Customer = require('../customer/Customer')
import Forms = require('../web/Forms')
import Status = require('./Status')
import SourceCodeInfo = require('../campaign/SourceCodeInfo')

declare class Session {
    /**
     * The current click stream if this is an HTTP session, null otherwise.
     */
    readonly clickStream  :  ClickStream | null

    /**
     * Get the currency associated with the current session. The session currency is established at session construction time and is typically equal to the site default currency. In the case of a multi-currency site, the session currency may be different than the site default currency.
     */
    readonly currency  :  Currency

    /**
     * The session's custom attributes. The attributes are stored for the life time of the session and are not cleared when the customer logs out.
     */
    readonly custom  :  CustomAttributes

    /**
     * The customer associated with this storefront session. The method always returns null if called for a non-storefront session (e.g. within a job or within the business manager). For a storefront session, the method always returns a customer. The returned customer may be anonymous if the customer could not be identified via the customer cookie.
     */
    readonly customer  :  Customer | null;

    /**
     * Identifies if the customer associated with this session is authenticated or not. This call is equivalent to customer.isAuthenticated().
     */
    readonly customerAuthenticated  :  boolean

    /**
     * Identifies if the customer associated with this session is externally authenticated or not.
     */
    readonly customerExternallyAuthenticated : boolean

    /**
     * The forms object that provides access to all current forms of a customer in the session.
     */
    readonly forms  :  Forms

    /**
     * Returns information on the last source-code handled by the session. This may or may not be the session's active source-code, e.g. the last received source-code was inactive and therefore was not set as the session's active source-code.
     */
    readonly lastReceivedSourceCodeInfo  :  SourceCodeInfo

    /**
     * The session's custom privacy attributes. The attributes are stored for the live time of the session and are automatically cleared when the customer logs out.
     */
    readonly privacy  :  CustomAttributes

    /**
     * The unique session id. This can safely be used as identifier against external systems.
     */
    readonly sessionID  :  string

    /**
     * Returns information on the session's active source-code.
     */
    readonly sourceCodeInfo  :  SourceCodeInfo

    /**
     * Identifies if the agent user associated with this session is authenticated or not.
     */
    readonly userAuthenticated  :  boolean

    /**
     * The current agent user name associated with this session. 
     */
    readonly userName  :  string

    /**
     * Returns the current click stream if this is an HTTP session, null otherwise.
     */
    getClickStream() : ClickStream | null;

    /**
     * Get the currency associated with the current session.
     */
    getCurrency() : Currency

    /**
     * Returns the session's custom attributes.
     */
    getCustom() : CustomAttributes

    /**
     * Returns the customer associated with this storefront session.
     */
    getCustomer() : Customer

    /**
     * Returns the forms object that provides access to all current forms of a customer in the session.
     */
    getForms() : Forms

    /**
     * Returns information on the last source-code handled by the session.
     */
    getLastReceivedSourceCodeInfo() : SourceCodeInfo

    /**
     * Returns the session's custom privacy attributes.
     */
    getPrivacy() : CustomAttributes

    /**
     * Returns the unique session id.
     */
    getSessionID() : string
    /**
     * Returns information on the session's active source-code.
     */
    getSourceCodeInfo() : SourceCodeInfo

    /**
     * Returns the current agent user name associated with this session.
     */
    getUserName() : string
    /**
     * Identifies if the customer associated with this session is authenticated or not.
     */
    isCustomerAuthenticated() : boolean
    /**
     * Identifies if the customer associated with this session is externally authenticated or not.
     */
    isCustomerExternallyAuthenticated() : boolean

    /**
     * Identifies if the agent user associated with this session is authenticated or not.
     */
    isUserAuthenticated() : boolean
    /**
     * Sets the session currency.
     * @param newCurrency 
     */
    setCurrency(newCurrency : Currency) : void

    /**
     * Applies the specified source-code to the current session and basket.
     * @param sourceCode 
     */
    setSourceCode(sourceCode : string) : Status
}

export = Session