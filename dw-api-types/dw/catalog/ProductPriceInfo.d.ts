import Money = require('../value/Money')
import PriceBook = require('./PriceBook')

declare class ProductPriceInfo {
    onlineFrom  :  Date
    onlineTo  :  Date
    percentage  :  number
    price  :  Money
    priceBook  :  PriceBook
    priceInfo  :  string
    getOnlineFrom() : Date
    getOnlineTo() : Date
    getPercentage() : number
    getPrice() : Money
    getPriceBook() : PriceBook
    getPriceInfo() : string
}

export = ProductPriceInfo;