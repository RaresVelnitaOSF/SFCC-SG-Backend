import ExtensibleObject = require('../object/ExtensibleObject');
import Collection = require('../util/Collection');
import EnumValue = require('../value/EnumValue');
import MediaFile = require('../content/MediaFile');
import ProductInventoryList = require('./ProductInventoryList');
import MarkupText = require('../content/MarkupText');
import StoreGroup = require('./StoreGroup');
import CustomAttributes = require('../object/CustomAttributes');

declare global {
    module ICustomAttributes {
        interface Store  extends CustomAttributes{
        }
    }
}

declare class Store extends ExtensibleObject<ICustomAttributes.Store> {
    address1 : string
    address2 : string
    city : string
    countryCode : EnumValue<string>
    email : string
    fax : string
    ID : string
    image : MediaFile
    inventoryList : ProductInventoryList | null
    inventoryListID : string | null
    latitude : number
    longitude : number
    name : string
    phone : string
    posEnabled : boolean
    postalCode : string
    stateCode : string
    storeEvents : MarkupText
    storeGroups : Collection<StoreGroup>
    storeHours : MarkupText
    storeLocatorEnabled : boolean

    private constructor()

    getAddress1() : string
    getAddress2() : string
    getCity() : string
    getCountryCode() : EnumValue<string>

    getEmail() : string
    getFax() : string
    getID() : string
    getImage() : MediaFile
    getInventoryList() : ProductInventoryList
    getInventoryListID() : string
    getLatitude() : number
    getLongitude() : number
    getName() : string
    getPhone() : string
    getPostalCode() : string
    getStateCode() : string
    getStoreEvents() : MarkupText
    getStoreGroups() : Collection<StoreGroup>
    getStoreHours() : MarkupText
    isPosEnabled() : boolean
    isStoreLocatorEnabled() : boolean
}


export = Store;
