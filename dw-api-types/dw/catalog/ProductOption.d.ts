import ExtensibleObject = require('../object/ExtensibleObject')
import MediaFile = require('../content/MediaFile')
import Collection = require('../util/Collection')
import ProductOptionValue = require('./ProductOptionValue')
import CustomAttributes = require('../object/CustomAttributes');

declare global {
    module ICustomAttributes {
        interface ProductOption extends CustomAttributes{
        }
    }
}

declare class ProductOption extends ExtensibleObject<ICustomAttributes.ProductOption> {
    defaultValue  :  ProductOptionValue
    description  :  string
    displayName  :  string
    htmlName  :  string
    ID  :  string
    image  :  MediaFile
    optionValues  :  Collection<ProductOptionValue>

    getDefaultValue() : ProductOptionValue
    getDescription() : string
    getDisplayName() : string
    getHtmlName() : string
    getHtmlName(prefix : string) : string
    getID() : string
    getImage() : MediaFile
    getOptionValues() : Collection<ProductOptionValue>
}

export = ProductOption