import Catalog = require('./Catalog');
import Product = require('./Product');
import SeekableIterator = require('../util/SeekableIterator');

/**
 * Provides helper methods for getting products based on Product ID or Catalog.
 */
declare class ProductMgr {
    private constructor();

    /**
     * Returns the product with the specified id.
     * @param productID 
     */
    static getProduct(productID : string) : Product | null

    /**
     * Returns all products assigned to the current site.
     */
    static queryAllSiteProducts() : SeekableIterator<Product>

    /**
     * Returns all products assigned to the current site.
     */
    static queryAllSiteProductsSorted() : SeekableIterator<Product>

    /**
     * Returns all products assigned to the the specified catalog, where assignment has the same meaning as it does for queryAllSiteProducts().
     * @param catalog 
     */
    static queryProductsInCatalog(catalog : Catalog) : SeekableIterator<Product>

    /**
     * Returns all products assigned to the the specified catalog.
     * @param catalog 
     */
    static queryProductsInCatalogSorted(catalog : Catalog) : SeekableIterator<Product>

}

export = ProductMgr;