import Variant = require('./Variant')
import Product = require('./Product')
import Collection = require('../util/Collection')
import VariationGroup = require('./VariationGroup')
import ProductVariationAttribute = require('./ProductVariationAttribute')
import ProductVariationAttributeValue = require('./ProductVariationAttributeValue')
import MediaFile = require('../content/MediaFile')
import List = require('../util/List')
import HashMap = require('../util/HashMap')
import URL = require('../web/URL')

declare class ProductVariationModel {
    defaultVariant  :  Variant
    master  :  Product
    productVariationAttributes  :  Collection<ProductVariationAttribute>
    selectedVariant  :  Variant
    selectedVariants  :  Collection<Variant>
    variants  :  Collection<Variant>
    variationGroups  :  Collection<VariationGroup>

    getAllValues(attribute : ProductVariationAttribute) : Collection<ProductVariationAttributeValue>
    getDefaultVariant() : Variant
    getFilteredValues(attribute : ProductVariationAttribute) : Collection<ProductVariationAttributeValue>
    getHtmlName(attribute : ProductVariationAttribute) : string
    getHtmlName(prefix : string, attribute : ProductVariationAttribute) : string
    getImage(viewtype : string, attribute : ProductVariationAttribute, value : ProductVariationAttributeValue) : MediaFile
    getImage(viewtype : string, index : number) : MediaFile
    getImage(viewtype : string) : MediaFile
    getImages(viewtype : string) : List<MediaFile>
    getMaster() : Product
    getProductVariationAttribute(id : string) : ProductVariationAttribute
    getProductVariationAttributes() : Collection<ProductVariationAttribute>
    getSelectedValue(attribute : ProductVariationAttribute) : ProductVariationAttributeValue
    getSelectedVariant() : Variant
    getSelectedVariants() : Collection<Variant>
    getVariants() : Collection<Variant>
    getVariants(filter : HashMap<string, string>) : Collection<Variant>
    getVariationGroups() : Collection<VariationGroup>
    getVariationValue(variantOrVariationGroup : Product, attribute : ProductVariationAttribute) : ProductVariationAttributeValue
    hasOrderableVariants(attribute : ProductVariationAttribute, value : ProductVariationAttributeValue) : Boolean
    isSelectedAttributeValue(attribute : ProductVariationAttribute, value : ProductVariationAttributeValue) : Boolean
    setSelectedAttributeValue(variationAttributeID : string, variationAttributeValueID : string) : void
    url(action : string, varAttrAndValues : Object) : URL
    urlSelectVariationValue(action : string, attribute : ProductVariationAttribute, value : ProductVariationAttributeValue) : string
    urlUnselectVariationValue(action : string, attribute : ProductVariationAttribute) : string
}

export = ProductVariationModel;