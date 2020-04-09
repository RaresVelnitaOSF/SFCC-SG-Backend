import LineItem = require('./LineItem');
import Money = require('../value/Money'); 
import Collection = require('../util/Collection');
import Quantity = require('../value/Quantity');
import Shipment = require('./Shipment');
import ProductLineItem = require('./ProductLineItem');
import PriceAdjustment = require('./PriceAdjustment');

declare class ProductShippingLineItem extends LineItem {
    /**
     * The gross price of the product shipping line item after applying all product-shipping-level adjustments.
     */
    readonly adjustedGrossPrice  :  Money 

    /**
     * The net price of the product shipping line item after applying all product-shipping-level adjustments.
     */
    readonly adjustedNetPrice  :  Money

    /**
     * The price of the product shipping line item after applying all pproduct-shipping-level adjustments. For net pricing the adjusted net price is returned (see getAdjustedNetPrice()). For gross pricing, the adjusted gross price is returned (see getAdjustedGrossPrice()).
     */
    readonly adjustedPrice  :  Money 

    /**
     * The tax of the unit after applying adjustments, in the purchase currency.
     */
    readonly adjustedTax  :  Money

    /**
     * An iterator of price adjustments that have been applied to this product shipping line item.
     */
    readonly priceAdjustments  :  Collection<PriceAdjustment>

    /**
     * The parent product line item this shipping line item belongs to.
     */
    readonly productLineItem  :  ProductLineItem

    /**
     * The quantity of the shipping cost.
     */
    quantity  :  Quantity

    /**
     * The shipment this shipping line item belongs to.
     */
    readonly shipment  :  Shipment

    /**
     * The 'surcharge' flag.
     */
    surcharge  :  boolean

    private constructor();

    /**
     * Returns the gross price of the product shipping line item after applying all product-shipping-level adjustments.
     */
    getAdjustedGrossPrice() : Money

    /**
     * Returns the net price of the product shipping line item after applying all product-shipping-level adjustments.
     */
    getAdjustedNetPrice() : Money

    /**
     * Returns the price of the product shipping line item after applying all pproduct-shipping-level adjustments.
     */
    getAdjustedPrice() : Money

    /**
     * Returns the tax of the unit after applying adjustments, in the purchase currency.
     */
    getAdjustedTax() : Money

    /**
     * Returns an iterator of price adjustments that have been applied to this product shipping line item.
     */
    getPriceAdjustments() : Collection<PriceAdjustment>

    /**
     * Returns the parent product line item this shipping line item belongs to.
     */
    getProductLineItem() : ProductLineItem

    /**
     * Returns the quantity of the shipping cost.
     */
    getQuantity() : Quantity

    /**
     * Returns the shipment this shipping line item belongs to.
     */
    getShipment() : Shipment

    /**
     * Returns the 'surcharge' flag.
     */
    isSurcharge() : boolean

    /**
     * Sets price attributes of the line item based on the purchase currency, taxation policy and line item quantity.
    The method sets the 'basePrice' attribute of the line item.
    * @param value 
    */
    setPriceValue(value : number) : void

    /**
     * Sets the quantity of the shipping cost.
     * @param quantity 
     */
    setQuantity(quantity : Quantity) : void

    /**
     * Sets the 'surcharge' flag.
     * @param flag 
     */
    setSurcharge(flag : boolean) : void

}

export = ProductShippingLineItem;