import CustomerActiveData = require('./CustomerActiveData')
import ExternalProfile = require('./ExternalProfile');
import AddressBook = require('./AddressBook')
import Collection = require('../util/Collection')
import CustomerGroup = require('./CustomerGroup')
import OrderHistory = require('./OrderHistory')
import Profile = require('./Profile')
import ProductList = require('./ProductList')

declare class Customer {
    private constructor()

    readonly activeData  :  CustomerActiveData
    readonly addressBook  :  AddressBook
    readonly anonymous  :  boolean
    readonly authenticated  :  boolean
    readonly customerGroups  :  Collection<CustomerGroup>
    readonly externallyAuthenticated  :  boolean
    readonly ID  :  string
    readonly note  :  string
    readonly orderHistory  :  OrderHistory
    readonly profile  :  Profile | null
    readonly registered  :  boolean

    /**
     * Creates an externalProfile and attaches it to the list of external profiles for the customer
     * @param authenticationProviderId
     * @param externalId
     */
    createExternalProfile(authenticationProviderId : string, externalId : string) : ExternalProfile

    /**
     * Returns the active data for this customer.
     */
    getActiveData() : CustomerActiveData

    /**
     * Returns the address book for the profile of this customer, or null if this customer has no profile, such as for an anonymous customer.
     */
    getAddressBook() : AddressBook | null

    /**
     * Returns the customer groups this customer is member of.
     */
    getCustomerGroups() :  Collection<CustomerGroup>

    /**
     * A convenience method for finding an external profile among the customer's external profiles collection
     * @param authenticationProviderId
     * @param externalId
     */
    getExternalProfile(authenticationProviderId : string, externalId : string) : ExternalProfile | null

    /**
     * Returns a collection of any external profiles the customer may have
     */
    getExternalProfiles() : Collection<ExternalProfile>

    /**
     * Returns the unique, system generated ID of the customer.
     */
    getID() : string

    /**
     * Returns the note for this customer, or null if this customer has no note, such as for an anonymous customer or when note has 0 length.
     */
    getNote() : string | null

    /**
     * Returns the customer order history.
     */
    getOrderHistory() : OrderHistory

    /**
     * Returns the product lists of the specified type.
     * @param type
     */
    getProductLists(type : number) : Collection<ProductList>

    /**
     * Returns the customer profile.
     */
    getProfile() : Profile | null

    /**
     * Identifies if the customer is anonymous. An anonymous customer is the opposite of a registered customer.
     */
    isAnonymous() : boolean

    /**
     * Identifies if the customer is authenticated. This method checks whether this customer is the customer associated with the session and than checks whether the session in an authenticated state. Note: The pipeline debugger will always show 'false' for this value regardless of whether the customer is authenticated or not.
     */
    isAuthenticated() : boolean

    /**
     * Identifies if the customer is externally authenticated. An externally authenticated customer does not have the password stored in our system but logs in through an external OAuth provider (Google, Facebook, LinkedIn, etc.)
     */
    isExternallyAuthenticated() : boolean

    /**
     * Returns true if there exist CustomerGroup for all of the given IDs and the customer is member of at least one of that groups.
     * @param groupIDs A list of unique semantic customer group IDs.
     */
    isMemberOfAnyCustomerGroup(...groupIDs : string[]) : boolean

    /**
     * Returns true if the customer is member of the specified CustomerGroup.
     * @param group
     */
    isMemberOfCustomerGroup(group : CustomerGroup) : boolean

    /**
     * Returns true if there is a CustomerGroup with such an ID and the customer is member of that group.
     * @param groupID
     */
    isMemberOfCustomerGroup(groupID : string) : boolean

    /**
     * Returns true if there exist CustomerGroup for all of the given IDs and the customer is member of all that groups.
     * @param groupIDs
     */
    isMemberOfCustomerGroups(...groupIDs : string[]) : boolean

    /**
     * Identifies if the customer is registered. A registered customer may or may not be authenticated. This method checks whether the user has a profile.
     */
    isRegistered() : boolean

    /**
     * Sets the note for this customer. This is a no-op for an anonymous customer.
     * @param aValue
     */
    setNote(aValue : string) : void
}

export = Customer
