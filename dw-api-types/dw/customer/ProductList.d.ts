import ExtensibleObject = require('../object/ExtensibleObject')
import ProductListRegistrant = require('./ProductListRegistrant')
import CustomerAddress = require('./CustomerAddress')
import EnumValue = require('../value/EnumValue')
import ProductListItem = require('./ProductListItem')
import Collection = require('../util/Collection')
import Customer = require('./Customer')
import ProductListItemPurchase = require('./ProductListItemPurchase')
import Product = require('../catalog/Product')
import CustomAttributes = require('../object/CustomAttributes');

declare global {
    module ICustomAttributes {
        interface ProductList extends CustomAttributes{
        }
    }
}


declare class ProductList extends ExtensibleObject<ICustomAttributes.ProductList> {
    static EXPORT_STATUS_EXPORTED  :  number
    static EXPORT_STATUS_NOTEXPORTED  :  number
    static TYPE_CUSTOM_1  :  number
    static TYPE_CUSTOM_2  :  number
    static TYPE_CUSTOM_3  :  number
    static TYPE_GIFT_REGISTRY  :  number
    static TYPE_SHOPPING_LIST  :  number
    static TYPE_WISH_LIST  :  number

    anonymous  :  boolean
    coRegistrant  :  ProductListRegistrant
    currentShippingAddress  :  CustomerAddress
    description  :  string
    eventCity  :  string
    eventCountry  :  string
    eventDate  :  Date
    eventState  :  string
    eventType  :  string
    exportStatus  :  EnumValue<number>
    giftCertificateItem  :  ProductListItem
    ID  :  string
    items  :  Collection<ProductListItem>
    lastExportTime  :  Date
    name  :  string
    owner  :  Customer
    postEventShippingAddress  :  CustomerAddress
    productItems  :  Collection<ProductListItem>
    public  :  boolean
    publicItems  :  Collection<ProductListItem> 
    purchases  :  Collection<ProductListItemPurchase>
    registrant  :  ProductListRegistrant
    shippingAddress  :  CustomerAddress
    type  :  number

    createCoRegistrant() : ProductListRegistrant
    createGiftCertificateItem() : ProductListItem
    createProductItem(product : Product) : ProductListItem
    createRegistrant() : ProductListRegistrant
    getCoRegistrant() : ProductListRegistrant
    getCurrentShippingAddress() : CustomerAddress
    getDescription() : string
    getEventCity() : string
    getEventCountry() : string
    getEventDate() : Date
    getEventState() : string
    getEventType() : string
    getExportStatus() : EnumValue<number>
    getGiftCertificateItem() : ProductListItem
    getID() : string
    getItem(ID : string) : ProductListItem
    getItems() : Collection<ProductListItem>
    getLastExportTime() : Date
    getName() : string
    getOwner() : Customer
    getPostEventShippingAddress() : CustomerAddress
    getProductItems() : Collection<ProductListItem>
    getPublicItems() : Collection<ProductListItem>
    getPurchases() : Collection<ProductListItemPurchase>
    getRegistrant() : ProductListRegistrant
    getShippingAddress() : CustomerAddress
    getType() : number
    isAnonymous() : boolean
    isPublic() : boolean
    removeCoRegistrant() : void
    removeItem(item : ProductListItem) :  void
    removeRegistrant() : void
    setDescription(description : string) : void
    setEventCity(eventCity : string) : void
    setEventCountry(eventCountry : string) : void
    setEventDate(eventDate : Date) : void
    setEventState(eventState : string) : void
    setEventType(eventType : string) : void
    setName(name : string) : void
    setPostEventShippingAddress(address : CustomerAddress) : void
    setPublic(flag : boolean) : void
    setShippingAddress(address : CustomerAddress) : void

}

export = ProductList