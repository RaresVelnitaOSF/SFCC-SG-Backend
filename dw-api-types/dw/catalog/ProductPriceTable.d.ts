import Collection = require('../util/Collection')
import Quantity = require('../value/Quantity')
import Money = require('../value/Money')
import PriceBook = require('./PriceBook')


declare class ProductPriceTable {
    quantities  :  Collection<Quantity>

    getNextQuantity(quantity : Quantity) : Quantity
    getPercentage(quantity : Quantity) : number
    getPrice(quantity : Quantity) : Money
    getPriceBook(quantity : Quantity) : PriceBook
    getQuantities() : Collection<Quantity>
}

export = ProductPriceTable;