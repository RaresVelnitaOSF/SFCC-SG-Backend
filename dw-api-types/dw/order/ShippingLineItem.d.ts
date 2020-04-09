import LineItem = require('./LineItem');
import Money = require('../value/Money'); 
import Collection = require('../util/Collection');
import PriceAdjustment = require('./PriceAdjustment');
import OrderItem = require('./OrderItem');
import Discount = require('../campaign/Discount');

declare class ShippingLineItem extends LineItem {
    /**
     * Constant used to get the standard shipping line item.
     */
    static readonly STANDARD_SHIPPING_ID  :  string

    /**
     * The price of this shipping line item including tax after shipping adjustments have been applied.
     */
    readonly adjustedGrossPrice  :  Money

    /**
     * The price of this shipping line item, excluding tax after shipping adjustments have been applied.
     */
    readonly adjustedNetPrice  :  Money

    /**
     * The adjusted price of this shipping line item. If the line item container is based on net pricing, the adjusted net price is returned. If the line item container is based on gross pricing, the adjusted gross price is returned.
     */
    readonly adjustedPrice  :  Money

    /**
     * The tax of this shipping line item after shipping adjustments have been applied.
     */
    readonly adjustedTax  :  Money

    /**
     * The ID of this ShippingLineItem.
     */
    readonly ID  :  string

    /**
     * The order-item extension for this item, or null. An order-item extension will only exist for a ShippingLineItem which belongs to an Order.
     */
    readonly orderItem  :  OrderItem | null

    /**
     * The collection of shipping price adjustments that have been applied to this shipping line item.
     */
    readonly shippingPriceAdjustments  :  Collection<PriceAdjustment>

    private constructor();

    /**
     * Creates a shipping price adjustment to be applied to the shipping line item.
    The promotion ID is mandatory and must not be the ID of any actual promotion defined in Commerce Cloud Digital.
    If there already exists a shipping price adjustment on this shipping line item referring to the specified promotion ID, an exception is thrown.
    * @param promotionID 
    */
    createShippingPriceAdjustment(promotionID : string) : PriceAdjustment

    /**
     * Creates a shipping price adjustment to be applied to the shipping line item.
    The promotion ID is mandatory and must not be the ID of any actual promotion defined in Commerce Cloud Digital
    * @param promotionID 
    * @param discount 
    */
    createShippingPriceAdjustment(promotionID : string, discount : Discount) : PriceAdjustment

    /**
     * Returns the price of this shipping line item including tax after shipping adjustments have been applied.
     */
    getAdjustedGrossPrice() : Money

    /**
     * Returns the price of this shipping line item, excluding tax after shipping adjustments have been applied.
     */
    getAdjustedNetPrice() : Money

    /**
     * Returns the adjusted price of this shipping line item.
     */
    getAdjustedPrice() : Money

    /**
     * Returns the tax of this shipping line item after shipping adjustments have been applied.
     */
    getAdjustedTax() : Money

    /**
     * Returns the ID of this ShippingLineItem.
     */
    getID() : string

    /**
     * Returns the order-item extension for this item, or null.
     */
    getOrderItem() : OrderItem | null

    /**
     * Returns the collection of shipping price adjustments that have been applied to this shipping line item.
     */
    getShippingPriceAdjustments() : Collection<PriceAdjustment>

    /**
     * Removes the specified shipping price adjustment from this shipping line item.
     * @param priceAdjustment 
     */
    removeShippingPriceAdjustment(priceAdjustment : PriceAdjustment) : void


}

export = ShippingLineItem;