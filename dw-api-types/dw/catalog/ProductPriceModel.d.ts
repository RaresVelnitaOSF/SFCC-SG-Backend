import Quantity = require('../value/Quantity')
import Money = require('../value/Money')
import Collection = require('../util/Collection');
import ProductPriceInfo = require('./ProductPriceInfo')
import ProductPriceTable = require('./ProductPriceTable')

declare class ProductPriceModel {
    basePriceQuantity  :  Quantity
    maxPrice  :  Money
    minPrice  :  Money
    price  :  Money
    priceInfo  :  ProductPriceInfo
    priceRange  :  boolean
    priceTable  :  ProductPriceTable

    private constructor();

    /**
     * Returns the quantity for which the base price is defined. This is typically 1.0.
     */
    getBasePriceQuantity() : Quantity

    /**
        Calculates and returns the maximum price-book price of all variants (for master products) or set-products (for product sets) for base quantity 1.00. This value can be used to display a range of prices in storefront. If the product represented by this model is not a master product or product set, then this method behaves the same as getPrice(). Only online products are considered. If the "orderable products only" search preference is enabled for the current site, then only orderable products are considered. For master products, only variants with all variation attributes configured are considered.

        * ***Warning*** : If the product represented by this model is a master product with numerous variants, this method can be very expensive and should be avoided.
     */
    getMaxPrice() : Money

    /**
        Calculates and returns the maximum price in a given price book of all variants (for master products) or set-products (for product sets) for base quantity 1.00. This value can be used to display a range of prices in storefront. This method follows the same rules as `getPriceBookPrice(String)` in determining the price book price for each variant or set-product. If the product represented by this model is not a master product or product set, then this method behaves the same as `getPriceBookPrice(String)`.

     * @param priceBookID ID of price book the price is requested for, must not be null.
     */
    getMaxPriceBookPrice(priceBookID : string) : Money

    /**
        Calculates and returns the minimum price-book price of all variants (for master products) or set-products (for product sets) for base quantity 1.00. This value can be used to display a range of prices in storefront. If the product represented by this model is not a master product or product set, then this method behaves the same as getPrice(). Only online products are considered. If the "orderable products only" search preference is enabled for the current site, then only orderable products are considered. For master products, only variants with all variation attributes configured are considered.

        * ***Warning***: If the product represented by this model is a master product with numerous variants, this method can be very expensive and should be avoided.
     */
    getMinPrice() : Money

    /**
        Calculates and returns the minimum price in a given price book of all variants (for master products) or set-products (for product sets) for base quantity 1.00. This value can be used to display a range of prices in storefront. This method follows the same rules as `getPriceBookPrice(String)` in determining the price book price for each variant or set-product. If the product represented by this model is not a master product or product set, then this method behaves the same as `getPriceBookPrice(String)`.
     *
     * @param priceBookID D of price book the price is requested for, must not be null.
     */
    getMinPriceBookPrice(priceBookID : string) : Money

    /**
        The price lookup is based on the configuration of price books. It depends on various settings, such as which price books are active, or explicitly set as applicable in the current session.

        If the product represented by this model is an option product, option prices will be added to the price book price if the price model was initialized with an option model.

        If no price could be found, `MONEY.NOT_AVAILABLE` is returned.

     */
    getPrice() : Money

    /**
        Returns the price of a product, calculated based on the passed order quantity. The price is returned for the currency of the current session.
        The price lookup is based on the configuration of price books. It depends on various settings, such as which price books are active, or explicitly set as applicable in the current session.

        If the product represented by this model is an option product, option prices will be added to the price book price if the price model was initialized with an option model.

        If no price could be found, `MONEY.NOT_AVAILABLE` is returned.
     *
     * @param quantity Quantity price is requested for
     */
    getPrice(quantity : Quantity) : Money

    /**
        Returns the active price of the product in the specified price book for quantity 1.00.
        If the product represented by this model is an option product, option prices will be added to the price book price if the price model was initialized with an option model.

        `Money.NOT_AVAILABLE` will be returned in any of the following cases:

        - priceBookID is null or does not identify a valid price book.
        - The price book has no price for the product.
        - None of the prices for the product in the price book is currently active.
        - The currently active price entry is a percentage.
     *
     *
     * @param priceBookID  ID of price book the price is requested for.
     */
    getPriceBookPrice(priceBookID : string) : Money

    /**
        Returns the active price of the product in the specified price book for the specified quantity.
        If the product represented by this model is an option product, option prices will be added to the price book price if the price model was initialized with an option model.

        `Money.NOT_AVAILABLE` will be returned in any of the following cases:

        - priceBookID is null or does not identify a valid price book.
        quantity is null.
        - The price book has no price for the product.
        - None of the prices for the product in the price book is currently active.
        - The currently active price entry is a percentage.

     * @param priceBookID ID of price book the price is requested for.
     * @param quantity the specified quantity to find the price for.
     */
    getPriceBookPrice(priceBookID : string, quantity : Quantity) : Money

    /**
     * This method acts similarly to `getPriceBookPrice(String)` but returns a ProductPriceInfo object wrapping the actual price with additional information.
     *
     * @param priceBookID ID of price book the price is requested for, must not be null.
     */
    getPriceBookPriceInfo(priceBookID : string) : ProductPriceInfo | null

    /**
     * This method acts similarly to `getPriceBookPrice(String, Quantity)` but returns a ProductPriceInfo object wrapping the actual price with additional information.
     *
     * @param priceBookID ID of price book the price is requested for, must not be null.
     * @param quantity Quantity price is requested for.
     */
    getPriceBookPriceInfo(priceBookID : string, quantity : Quantity) : ProductPriceInfo | null


    /**
        Returns the price info of a product, calculated based on base price quantity 1.00. The price is returned for the currency of the current session.
        This method is similar to getPrice() but instead of just returning the price value, it returns a ProductPriceInfo which contains additional information such as the PriceBook which defined the price and the percentage discount this price point represents.

        If the product represented by this model is an option product, option prices will be added to the price book price if the price model was initialized with an option model.

        If no price info could be found, null is returned.
     */
    getPriceInfo() : ProductPriceInfo | null

    /**
        Returns the price info of a product, calculated based on the passed order quantity. The price is returned for the currency of the current session.
        This method is similar to getPrice(Quantity) but instead of just returning the price value, it returns a ProductPriceInfo which contains additional information such as the PriceBook which defined the price and the percentage discount this price point represents.

        If the product represented by this model is an option product, option prices will be added to the price book price if the price model was initialized with an option model.

        If no price info could be found, null is returned.
     *
     * @param quantity the quantity to use.
     */
    getPriceInfo(quantity : Quantity) : ProductPriceInfo | null

    /**
     * Returns all the price infos of a product that could have been the basis of the storefront price, calculated based on base price quantity 1.00. This will return an empty list if getPriceInfo() would return null, and if there is only one price info in the collection it will be the same price info as getPriceInfo(). Two or more price infos indicate that there are that many price books that meet the criteria for returning the price shown in the storefront.
     */
    getPriceInfos() : Collection<ProductPriceInfo>

    /**
     * Returns the product price table object. The price table represents a map between order quantities and prices, and also provides % off information to be shown to storefront customers. The price is returned for the currency of the current session.
     Usually, the product price table is printed on product detail pages in the storefront.

    If the product represented by this model is an option product, option prices will be added to the price book price if the price model was initialized with an option model.

    All other methods of this class are based on the information in the product price table.
     */
    getPriceTable() : ProductPriceTable

    /**
    Returns true if this product is a master product (or product set) and the collection of online variants (or set products respectively) contains products of different prices.

    * **Warning**: If the product represented by this model is a master product with numerous variants, this method can be very expensive and should be avoided.
     */
    isPriceRange() : boolean

    /**
     * Returns true if this product is a master product (or product set) and the collection of online variants (or set products respectively) contains products of different prices in the specified price book.
     *
     * @param priceBookID The ID of the price book.
     */
    isPriceRange(priceBookID : string) : boolean
}

export = ProductPriceModel
