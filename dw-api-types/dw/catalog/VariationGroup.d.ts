import Product = require('./Product');

declare class VariationGroup extends Product {
    masterProduct  :  Product
    getMasterProduct() : Product
}

export = VariationGroup;