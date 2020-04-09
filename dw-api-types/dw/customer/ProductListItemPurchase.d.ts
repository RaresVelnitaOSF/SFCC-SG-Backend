import ProductListItem = require('./ProductListItem')
import Quantity = require('../value/Quantity')

declare class ProductListItemPurchase {
    item  :  ProductListItem
    orderNo  :  string
    purchaseDate  :  Date
    purchaserName  :  string
    quantity  :  Quantity

    getItem() : ProductListItem
    getOrderNo() : string
    getPurchaseDate() : Date
    getPurchaserName() : string
    getQuantity() : Quantity
}

export = ProductListItemPurchase;