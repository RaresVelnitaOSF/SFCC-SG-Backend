import ExtensibleObject = require('../object/ExtensibleObject');
import Money = require('../value/Money');
import Collection = require('../util/Collection');
import EnumValue = require('../value/EnumValue');
import LineItem = require('./LineItem');
import ProductLineItem = require('./ProductLineItem');
import OrderAddress = require('./OrderAddress');
import ShippingMethod = require('./ShippingMethod');
import PriceAdjustment = require('./PriceAdjustment');
import ShippingLineItem = require('./ShippingLineItem');
import GiftCertificateLineItem = require('./GiftCertificateLineItem');
import CustomAttributes = require('../object/CustomAttributes');

declare global {
    module ICustomAttributes {
        interface Shipment extends CustomAttributes{
        }
    }
}

declare class Shipment extends ExtensibleObject<ICustomAttributes.Shipment> {
    /**
     * Shipment shipping status representing 'Not shipped'.
     */
    static readonly SHIPPING_STATUS_NOTSHIPPED  :  number

    /**
     * Shipment shipping status representing 'Shipped'.
     */
    static readonly SHIPPING_STATUS_SHIPPED  :  number


    /**
     * The adjusted total gross price, including tax, in the purchase currency. Adjusted merchandize prices represent the sum of product prices before services such as shipping have been added, but after adjustments from i.e. promotions have been added.
     */
    readonly adjustedMerchandizeTotalGrossPrice  :  Money

    /**
     * The adjusted net price, excluding tax, in the purchase currency. Adjusted merchandize prices represent the sum of product prices before services such as shipping have been added, but after adjustments from i.e. promotions have been added.
     */
    readonly adjustedMerchandizeTotalNetPrice  :  Money

    /**
     * The merchandize total price after all product discounts. If the line item container is based on net pricing the adjusted merchandize total net price is returned. If the line item container is based on gross pricing the adjusted merchandize total gross price is returned.
     */
    readonly adjustedMerchandizeTotalPrice  :  Money

    /**
     * The total tax in purchase currency. Adjusted merchandize prices represent the sum of product prices before services such as shipping have been added, but after adjustments from i.e. promotions have been added.
     */
    readonly adjustedMerchandizeTotalTax  :  Money

    /**
     * The adjusted sum of all shipping line items of the shipment, including tax after shipping adjustments have been applied.
     */
    readonly adjustedShippingTotalGrossPrice  :  Money

    /**
     * The sum of all shipping line items of the shipment, excluding tax after shipping adjustments have been applied.
     */
    readonly adjustedShippingTotalNetPrice  :  Money


    /**
     * The adjusted shipping total price. If the line item container is based on net pricing the adjusted shipping total net price is returned. If the line item container is based on gross pricing the adjusted shipping total gross price is returned.
     */
    readonly adjustedShippingTotalPrice  :  Money

    /**
     * The tax of all shipping line items of the shipment after shipping adjustments have been applied.
     */
    readonly adjustedShippingTotalTax  :  Money

    /**
     * All line items related to the shipment.

    The returned collection may include line items of the following types:

        - ProductLineItem
        - ShippingLineItem
        - GiftCertificateLineItem
        - PriceAdjustment

    Their common type is LineItem.

    Each ProductLineItem in the collection may itself contain bundled or option product line items, as well as a product-level shipping line item.
    */
    readonly allLineItems  :  Collection<LineItem>

    /**
     * Return true if this shipment is the default shipment.
     */
    readonly default  :  boolean 

    /**
     * Returns true if this line item represents a gift, false otherwise.
     */
    gift  :  boolean

    /**
     * All gift certificate line items of the shipment.
     */
    readonly giftCertificateLineItems  :  Collection<GiftCertificateLineItem> 

    /**
     * The value set for gift message or null if no value set.
     */
    giftMessage  :  string

    /**
     * The ID of this shipment.
     */
    readonly ID  :  string 

    /**
     * The total gross price, including tax, in the purchase currency. Merchandize total prices represent the sum of product prices before services such as shipping or adjustments from i.e. promotions have been added.
     */
    readonly merchandizeTotalGrossPrice  :  Money

    /**
     * The net price, excluding tax, in the purchase currency. Merchandize total prices represent the sum of product prices before services such as shipping or adjustments from i.e. promotions have been added.
     */
    readonly merchandizeTotalNetPrice  :  Money

    /**
     * The merchandize total price. If the line item container is based on net pricing the merchandize total net price is returned. If the line item container is based on gross pricing the merchandize total gross price is returned.
     */
    readonly merchandizeTotalPrice  :  Money

    /**
     * The total tax in purchase currency. Merchandize total prices represent the sum of product prices before services such as shipping or adjustments from i.e. promotions have been added.
     */
    readonly merchandizeTotalTax  :  Money

    /**
     * A collection of all product line items related to this shipment.
     */
    readonly productLineItems  :  Collection<ProductLineItem>

    /**
     * The merchandise total price of the shipment after considering all product price adjustments and prorating all Buy-X-Get-Y and order-level discounts, according to the scheme described in PriceAdjustment.getProratedPrices(). For net pricing the net price is returned. For gross pricing, the gross price is returned.
     */
    readonly proratedMerchandizeTotalPrice  :  Money

    /**
     * The shipment number for this shipment. This number is automatically generated.
     */
    readonly shipmentNo  :  string

    /**
     * The shipping address or null if none is set.
     */
    readonly shippingAddress  :  OrderAddress | null

    /**
     * A collection of all shipping line items of the shipment, excluding any product-level shipping costs that are associated with ProductLineItems of the shipment.
     */
    readonly shippingLineItems  :  Collection<ShippingLineItem>

    /**
     * The shipping method or null if none is set.
     */
    shippingMethod  :  ShippingMethod | null

    /**
     * The shipping method ID or null if none is set.
     */
    readonly shippingMethodID  :  string

    /**
     * A collection of price adjustments that have been applied to the shipping costs of the shipment, for example by the promotions engine.
    Note that this method returns all shipping price adjustments in this shipment regardless of which shipping line item they belong to. Use ShippingLineItem.getShippingPriceAdjustments() to retrieve the shipping price adjustments associated with a specific shipping line item.
    */
    readonly shippingPriceAdjustments  :  Collection<PriceAdjustment>

    /**
     * The shipping status. Possible values are SHIPMENT_NOTSHIPPED or SHIPMENT_SHIPPED.
     */
    shippingStatus  :  EnumValue<number>

    /**
     * The sum of all shipping line items of the shipment, including tax before shipping adjustments have been applied.
     */
    readonly shippingTotalGrossPrice  :  Money

    /**
     * The sum of all shipping line items of the shipment, excluding tax before shipping adjustments have been applied.
     */
    readonly shippingTotalNetPrice  :  Money

    /**
     * The shipping total price. If the line item container is based on net pricing the shipping total net price is returned. If the line item container is based on gross pricing the shipping total gross price is returned.
     */
    readonly shippingTotalPrice  :  Money

    /**
     * The tax of all shipping line items of the shipment before shipping adjustments have been applied.
     */
    readonly shippingTotalTax  :  Money

    /**
     * Convenenience method. Same as getShippingLineItem(ShippingLineItem.STANDARD_SHIPPING_ID)
     */
    readonly standardShippingLineItem  :  ShippingLineItem

    /**
     * The grand total price gross of tax for the shipment, in purchase currency. Total prices represent the sum of product prices, services prices and adjustments.
     */
    readonly totalGrossPrice  :  Money

    /**
     * The grand total price for the shipment net of tax, in purchase currency. Total prices represent the sum of product prices, services prices and adjustments.
     */
    readonly totalNetPrice  :  Money

    /**
     * The total tax for the shipment, in purchase currency. Total prices represent the sum of product prices, services prices and adjustments.
     */
    readonly totalTax  :  Money

    /**
     * The tracking number of this shipment.
     */
    trackingNumber  :  string


    private constructor();

    /**
     * A shipment has initially no shipping address.
     */
    createShippingAddress() : OrderAddress

    /**
     * Creates a new shipping line item for this shipment.
     * @param id 
     */
    createShippingLineItem(id : string) : ShippingLineItem

    /**
     * Returns the adjusted total gross price, including tax, in the purchase currency.
     */
    getAdjustedMerchandizeTotalGrossPrice() : Money

    /**
     * Returns the adjusted net price, excluding tax, in the purchase currency.
     */
    getAdjustedMerchandizeTotalNetPrice() : Money

    /**
     * Returns the merchandize total price after all product discounts.
     */
    getAdjustedMerchandizeTotalPrice() : Money

    /**
     * Returns the merchandise total price of the shipment after considering all product price adjustments and, optionally, prorating all order-level discounts.
     * @param applyOrderLevelAdjustments 
     */
    getAdjustedMerchandizeTotalPrice(applyOrderLevelAdjustments : boolean) : Money

    /**
     * Returns the total tax in purchase currency.
     */
    getAdjustedMerchandizeTotalTax() : Money

    /**
     * Returns the adjusted sum of all shipping line items of the shipment, including tax after shipping adjustments have been applied.
     */
    getAdjustedShippingTotalGrossPrice() : Money

    /**
     * Returns the sum of all shipping line items of the shipment, excluding tax after shipping adjustments have been applied.
     */
    getAdjustedShippingTotalNetPrice() : Money

    /**
     * Returns the adjusted shipping total price.
     */
    getAdjustedShippingTotalPrice() : Money

    /**
     * Returns the tax of all shipping line items of the shipment after shipping adjustments have been applied.
     */
    getAdjustedShippingTotalTax() : Money

    /**
     * Returns all line items related to the shipment.
     */
    getAllLineItems() : Collection<LineItem>

    /**
     * Returns all gift certificate line items of the shipment.
     */
    getGiftCertificateLineItems() : Collection<GiftCertificateLineItem>

    /**
     * Returns the value set for gift message or null if no value set.
     */
    getGiftMessage() : string | null

    /**
     * Returns the ID of this shipment.
     */
    getID() : string

    /**
     * Returns the total gross price, including tax, in the purchase currency.
     */
    getMerchandizeTotalGrossPrice() : Money

    /**
     * Returns the net price, excluding tax, in the purchase currency.
     */
    getMerchandizeTotalNetPrice() : Money

    /**
     * Returns the merchandize total price.
     */
    getMerchandizeTotalPrice() : Money

    /**
     * Returns the total tax in purchase currency.
     */
    getMerchandizeTotalTax() : Money

    /**
     * Returns a collection of all product line items related to this shipment.
     */
    getProductLineItems() : Collection<ProductLineItem>

    /**
     * Returns the merchandise total price of the shipment after considering all product price adjustments and prorating all Buy-X-Get-Y and order-level discounts, according to the scheme described in PriceAdjustment.getProratedPrices().
     */
    getProratedMerchandizeTotalPrice() : Money

    /**
     * Returns the shipment number for this shipment.
     */
    getShipmentNo() : string

    /**
     * Returns the shipping address or null if none is set.
     */
    getShippingAddress() : OrderAddress | null

    /**
     * Returns the shipping line item identified by the specified ID, or null if not found.
     * @param id 
     */
    getShippingLineItem(id : string) : ShippingLineItem | null

    /**
     * Returns a collection of all shipping line items of the shipment, excluding any product-level shipping costs that are associated with ProductLineItems of the shipment.
     */
    getShippingLineItems() : Collection<ShippingLineItem>

    /**
     * Returns the shipping method or null if none is set.
     */
    getShippingMethod() : ShippingMethod | null

    /**
     * Returns the shipping method ID or null if none is set.
     */
    getShippingMethodID() : string | null

    /**
     * Returns a collection of price adjustments that have been applied to the shipping costs of the shipment, for example by the promotions engine.
    Note that this method returns all shipping price adjustments in this shipment regardless of which shipping line item they belong to.
    */
    getShippingPriceAdjustments() : Collection<PriceAdjustment>

    /**
     * Returns the shipping status.
     */
    getShippingStatus() : EnumValue<number>

    /**
     * Returns the sum of all shipping line items of the shipment, including tax before shipping adjustments have been applied.
     */
    getShippingTotalGrossPrice() : Money

    /**
     * Returns the sum of all shipping line items of the shipment, excluding tax before shipping adjustments have been applied.
     */
    getShippingTotalNetPrice() : Money

    /**
     * Returns the shipping total price.
     */
    getShippingTotalPrice() : Money

    /**
     * Returns the tax of all shipping line items of the shipment before shipping adjustments have been applied.
     */
    getShippingTotalTax() : Money

    /**
     * Convenenience method.
     */
    getStandardShippingLineItem() : ShippingLineItem

    /**
     * Returns the grand total price gross of tax for the shipment, in purchase currency.
     */
    getTotalGrossPrice() : Money

    /**
     * Returns the grand total price for the shipment net of tax, in purchase currency.
     */
    getTotalNetPrice() : Money

    /**
     * Returns the total tax for the shipment, in purchase currency.
     */
    getTotalTax() : Money

    /**
     * Returns the tracking number of this shipment.
     */
    getTrackingNumber() : string

    /**
     * Return true if this shipment is the default shipment.
     */
    isDefault() : boolean

    /**
     * Returns true if this line item represents a gift, false otherwise.
     */
    isGift() : boolean

    /**
     * Removes the specified shipping line item and any of its dependent shipping price adjustments.
     * @param shippingLineItem 
     */
    removeShippingLineItem(shippingLineItem : ShippingLineItem) : void

    /**
     * Controls if this line item is a gift or not.
     * @param isGift 
     */
    setGift(isGift : boolean) : void

    /**
     * Sets the value to set for the gift message.
     * @param message 
     */
    setGiftMessage(message : string) : void

    /**
     * Set the specified shipping method for the specified shipment.
     * @param method 
     */
    setShippingMethod(method : ShippingMethod | null) : void

    /**
     * Sets the shipping status of the shipment.
     * @param status 
     */
    setShippingStatus(status : Number) : void

    /**
     * Sets the tracking number of this shipment.
     * @param aValue 
     */
    setTrackingNumber(aValue : string) : void




}

export = Shipment;