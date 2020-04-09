import Collection = require('../util/Collection');
import CustomerGroup = require('./CustomerGroup');
import CustomerList = require('./CustomerList');
import CustomerPasswordConstraints = require('./CustomerPasswordConstraints');
import Customer = require('./Customer');
import ObjectTypeDefinition = require('../object/ObjectTypeDefinition');
import Profile = require('./Profile');
import SeekableIterator = require('../util/SeekableIterator');
import Map = require('../util/Map');
import AuthenticationStatus = require('./AuthenticationStatus');

/**
 * Provides helper methods for managing customers and customer profiles. Note: this class allows access to sensitive information through operations that retrieve the Profile object. Pay attention to appropriate legal and regulatory requirements related to this data.
 */
declare class CustomerMgr {
    private constructor();

    /**
     * The customer groups of the current site.
     */
    readonly customerGroups  :  Collection<CustomerGroup>

    /**
     * An instance of CustomerPasswordConstraints for the customer list assigned to the current site.
     */
    readonly passwordConstraints  :  CustomerPasswordConstraints

    /**
     * The number of registered customers in the system. This number can be used for reporting purposes.
     */
    readonly registeredCustomerCount  :  number

    /**
     * The customer list of the current site.
     */
    readonly siteCustomerList  :  CustomerList

    static authenticateCustomer(login : string, password : string) : AuthenticationStatus;

    /**
     * Creates a new Customer using the supplied login, password.
     * @param login
     * @param password
     */
    static createCustomer(login : string, password : string) : Customer

    /**
     * Creates a new Customer using the supplied login, password, and a customerNo.
     * @param login
     * @param password
     * @param customerNo
     */
    static createCustomer(login : string, password : string, customerNo : string) : Customer

    /**
     * Given an authentication provider Id and an external Id: creates a Customer record in the system if one does not exist already for the same 'authenticationProviderId' and 'externalId' pair.
     * @param authenticationProviderId
     * @param externalId
     */
    static createExternallyAuthenticatedCustomer(authenticationProviderId : string, externalId : string) : Customer

    /**
     * Returns the meta data for profiles.
     */
    static describeProfileType() : ObjectTypeDefinition

    /**
     * Returns the customer with the specified customer number.
     * @param customerNumber
     */
    static getCustomerByCustomerNumber(customerNumber : string) : Customer | null

    /**
     * Returns the customer for the specified login name.
     * @param login
     */
    static getCustomerByLogin(login : string) : Customer | null

    /**
     * Returns the customer associated with the specified password reset token.
     * @param token
     */
    static getCustomerByToken(token : string) : Customer | null

    /**
     * Returns the customer group with the specified ID or null if group does not exists.
     * @param id
     */
    static getCustomerGroup(id : string) : CustomerGroup | null

    /**
     * Returns the customer groups of the current site.
     */
    static getCustomerGroups() : Collection<CustomerGroup>

    /**
     * Returns the customer list identified by the specified ID.
     * @param id
     */
    static getCustomerList(id : string) : CustomerList | null

    /**
     * Given an authentication provider Id and external Id returns the Customer Profile in our system.
     * @param authenticationProviderId
     * @param externalId
     */
    static getExternallyAuthenticatedCustomerProfile(authenticationProviderId : string, externalId : string) : Profile | null

    /**
     * Returns an instance of CustomerPasswordConstraints for the customer list assigned to the current site.
     */
    static getPasswordConstraints() : CustomerPasswordConstraints

    /**
     * Returns the profile with the specified customer number.
     * @param customerNumber
     */
    static getProfile(customerNumber : string) : Profile | null

    /**
     * Returns the number of registered customers in the system.
     */
    static getRegisteredCustomerCount() : number

    /**
     * Returns the customer list of the current site.
     */
    static getSiteCustomerList() : CustomerList

    /**
     * Checks if the given password matches the password constraints (for example password length) of the current site's assigned customerlist.
     * @param password
     */
    static isAcceptablePassword(password : string) : boolean

    /**
     * This method authenticates the current session using the supplied login and password. If a different customer is currently authenticated in the session, then this customer is "logged out" and her/his privacy and form data are deleted. If the authentication with the given credentials fails, then null is returned and no changes to the session are made.
     *
If the input value "RememberMe" is set to True, this method stores a cookie on the customer's machine which will be used to identify the customer when the next session is initiated. The cookie is set to expire in 180 days (i.e. 6 months). Note that a customer who is remembered is not automatically authenticated and will have to explicitly log in to access any personal information.
     * @param login
     * @param password
     * @param rememberMe
     */
    static loginCustomer(authStatus : AuthenticationStatus, rememberMe : boolean)  : Customer | null

    /**
     * Logs in externally authenticated customer if it has already been created in the system and the profile is not disabled or locked
     * @param authenticationProviderId
     * @param externalId
     * @param rememberMe
     */
    static loginExternallyAuthenticatedCustomer(authenticationProviderId : string, externalId : string, rememberMe : boolean) : Customer | null

    /**
     * Logs out the customer currently logged into the storefront.
     * @param rememberMe
     */
    static logoutCustomer(rememberMe : boolean) : Customer

    /**
     * Executes a user-definable function on a set of customer profiles.
     * @param processFunction
     * @param querystring
     * @param args
     * @param */
    static processProfiles(processFunction : Function, querystring : string, ...args : string[]) : void

    /**
     * Searches for a single profile instance.
     * @param querystring
     * @param args
     * @param */
    static queryProfile(querystring : string, ...args : string[]) : Profile | null

    /**
     * Searches for profile instances.
     * @param querystring
     * @param sortstring
     * @param args
     * @param */
    static queryProfiles(querystring : string, sortstring : string, ...args : string[]) : SeekableIterator<Profile>

    /**
     * Searches for profile instances.
     * @param queryAttributes
     * @param sortstring
     */
    static queryProfiles(queryAttributes : Map<string, string>, sortstring : string) : SeekableIterator<Profile>

    /**
     * Logs out the supplied customer and deletes the customer record.
     * @param customer
     */
    static removeCustomer(customer : Customer) : void

    /**
     * Searches for a single profile instance.
     * @param querystring
     * @param args
     * @param */
    static searchProfile(querystring : string, ...args : string[]) : Profile | null

    /**
     * Searches for profile instances.
     * @param querystring
     * @param sortstring
     * @param args
     * @param */
    static searchProfiles(querystring : string, sortstring : string, ...args : string[]) : SeekableIterator<Profile>

    /**
     * Searches for profile instances.
     * @param queryAttributes
     * @param sortstring
     */
    static searchProfiles(queryAttributes : Map<string, string>, sortstring : string) : SeekableIterator<Profile>




}

export = CustomerMgr;
