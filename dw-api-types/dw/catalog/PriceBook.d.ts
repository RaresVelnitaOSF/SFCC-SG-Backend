import ExtensibleObject = require('../object/ExtensibleObject')
import CustomAttributes = require('../object/CustomAttributes');

declare global {
    module ICustomAttributes {
        interface PriceBook extends CustomAttributes{
        }
    }
}

declare class PriceBook extends ExtensibleObject<ICustomAttributes.PriceBook> {
    currencyCode  :  string
    description  :  string
    displayName  :  string
    ID  :  string
    online  :  boolean
    onlineFlag  :  boolean
    onlineFrom  :  Date
    onlineTo  :  Date
    parentPriceBook  :  PriceBook

    getCurrencyCode() : string
    getDescription() : string
    getDisplayName() : string
    getID() : string
    getOnlineFlag() : boolean
    getOnlineFrom() : Date
    getOnlineTo() : Date
    getParentPriceBook() : PriceBook
    isOnline() : boolean
}

export = PriceBook;