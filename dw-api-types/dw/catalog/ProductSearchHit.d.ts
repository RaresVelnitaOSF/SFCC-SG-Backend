import Money = require('../value/Money');
import Product = require('./Product');
import List = require('../util/List');
import ProductVariationAttribute = require('./ProductVariationAttribute');
import ProductVariationAttributeValue = require('./ProductVariationAttributeValue');

/**
 * Represents a product search result item returned by the Search pipelet. 
An instance of ProductSearchHit is a wrapper around the actual product returned by the search. The wrapped product can be accessed by method getProduct().
For special product types, the wrapped product can be the representative of other related products actually hit by the search. A variation master or variation group returned by the search represents a collection of hit variants. A product set returned by the search represents a collection of hit set-products. A bundle returned by the search represents a collection of hit bundled-products. If the product wrapped by this ProductSearchHit is the representative of other products, method getRepresentedProducts() can be used to access all these products.
 */
declare class ProductSearchHit {

    /**
     * The first product represented by the product wrapped by the search hit.
     */
    readonly firstRepresentedProduct  :  Product 

    /**
     * The first product ID represented by the product wrapped by the search hit.
     */
    readonly firstRepresentedProductID  :  string 

    /**
     * The last product represented by the product wrapped by the search hit.
     */
    readonly lastRepresentedProduct  :  Product 

    /**
     * The last product ID represented by the product wrapped by the search hit.
     */
    readonly lastRepresentedProductID  :  string 

    /**
     * The maximum price of all products represented by the product hit. See getRepresentedProducts() for details on the set of products used for finding the maximum. The method returns N/A in case no price information can be found.
    Note: The method uses price information of the search index and therefore might return different prices than the ProductPriceModel.
    */
    readonly maxPrice  :  Money 

    /**
     * The minimum price of all products represented by the product hit. See getRepresentedProducts() for details on the set of products used for finding the minimum. The method returns N/A in case no price information can be found.
    Note: The method uses price information of the search index and therefore might return different prices than the ProductPriceModel.
    */
    readonly minPrice  :  Money 

    /**
     * Convenience method to check whether this ProductSearchHit represents multiple products (see getRepresentedProducts()) that have different prices.
     */
    readonly priceRange  :  boolean 

    /**
     * The product wrapped by this ProductSearchHit. For special product types, the wrapped product can be the representative of other related products actually hit by the search. A variation master returned by the search represents a collection of hit variants. A product set returned by the search represents a collection of hit set-products. A bundle returned by the search represents a collection of hit bundled-products. In this case call getRepresentedProducts() to get a list of the represented products.
     */
    readonly product  :  Product 

    /**
     * The product ID of this ProductSearchHit. For special product types, the ID can be the representative of other related products actually hit by the search. A variation master ID returned by the search represents a collection of hit variants. A product set ID returned by the search represents a collection of hit set-products. A bundle ID returned by the search represents a collection of hit bundled-products. In this case call getRepresentedProductIDs() to get a list of the represented product IDs.
     */
    readonly productID  :  string 

    /**
     * In case the product that is wrapped by this ProductSearchHit (see getProduct()) is a variation or a variation master or a product set, this ProductSearchHit can represent multiple products.
    * The following specific rules apply: 
    If the wrapped product is a variation master, the method returns all variant IDs of this master that satisfy the search query.
    If the wrapped product is a variation group, the method returns all variant IDs of this variation group that satisfy the search query.
    If the wrapped product is a variant representing other variants (due to variation slicing), the method returns this variant ID and all represented variant IDs that satisfy the search query.
    If the wrapped product is a product set, the method returns all set products IDs that satisfy the search query.
    If the wrapped product is a product bundle, the method returns all bundled product IDs that satisfy the search query.
    If the wrapped product is a simple product, the method returns this product ID
    If the method returns multiple product IDs, the ID of the product with the highest sort rank is returned first, and the ID of the product with the lowest sort rank is returned last. The product sort rank depends in the sorting conditions used for the search query.
    */
    readonly representedProductIDs  :  List<string>

    /**
     * In case the product that is wrapped by this ProductSearchHit (see getProduct()) is a variation or a variation master or a product set, this ProductSearchHit can represent multiple products.
    * The following specific rules apply: 
    - If the wrapped product is a variation master, the method returns all variants of this master that satisfy the search query.
    - If the wrapped product is a variation group, the method returns all variants of this variation group that satisfy the search query.
    - If the wrapped product is a variant representing other variants (due to variation slicing), the method returns this variant and all represented variants that satisfy the search query.
    - If the wrapped product is a product set, the method returns all set products that satisfy the search query.
    - If the wrapped product is a product bundle, the method returns all bundled products that satisfy the search query.
    - If the wrapped product is a simple product, the method returns this product
    - If the method returns multiple products, the product with the highest sort rank is returned first, and the product with the lowest sort rank is returned last. The product sort rank depends in the sorting conditions used for the search query.

    */
    readonly representedProducts  :  List<Product>

    private constructor();

    /**
     * Returns the first product represented by the product wrapped by the search hit.
     */
    getFirstRepresentedProduct() : Product

    /**
     * Returns the first product ID represented by the product wrapped by the search hit.
     */
    getFirstRepresentedProductID() : string

    /**
     * Returns the last product represented by the product wrapped by the search hit.
     */
    getLastRepresentedProduct() : Product

    /**
     * Returns the last product ID represented by the product wrapped by the search hit.
     */
    getLastRepresentedProductID() : string

    /**
     * Returns the maximum price of all products represented by the product hit.
     */
    getMaxPrice() : Money

    /**
     * Returns the minimum price of all products represented by the product hit.
     */
    getMinPrice() : Money

    /**
     * Returns the product wrapped by this ProductSearchHit.
     */
    getProduct() : Product

    /**
     * Returns the product ID of this ProductSearchHit.
     */
    getProductID() : string

    /**
     * In case the product that is wrapped by this ProductSearchHit (see getProduct()) is a variation or a variation master or a product set, this ProductSearchHit can represent multiple products.
     */
    getRepresentedProductIDs() : List<string>

    /**
     * In case the product that is wrapped by this ProductSearchHit (see getProduct()) is a variation or a variation master or a product set, this ProductSearchHit can represent multiple products.
     */
    getRepresentedProducts() : List<Product>

    /**
     * This method is only applicable if this ProductSearchHit represents a product variation (see getRepresentedProducts).
     * @param va 
     */
    getRepresentedVariationValues(va : string | ProductVariationAttribute) : List<ProductVariationAttributeValue>

    /**
     * Convenience method to check whether this ProductSearchHit represents multiple products (see getRepresentedProducts()) that have different prices.
     */
    isPriceRange() : boolean


}

export = ProductSearchHit;