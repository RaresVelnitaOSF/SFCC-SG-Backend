import AbstractItem = require('./AbstractItem');
import Quantity = require('../value/Quantity');
import Decimal = require('../util/Decimal');
import EnumValue = require('../value/EnumValue');
import Money = require('../value/Money');
import Collection = require('../util/Collection');
import FilteringCollection = require('../util/FilteringCollection');
import ReturnCaseItem = require('./ReturnCaseItem');
import TaxGroup = require('./TaxGroup');
import TrackingRef = require('./TrackingRef');

declare class ShippingOrderItem extends AbstractItem {
    static readonly STATUS_CANCELLED  :  string
    static readonly STATUS_CONFIRMED  :  string
    static readonly STATUS_SHIPPED  :  string
    static readonly STATUS_WAREHOUSE  :  string

    /**
     * Price of a single unit before discount application.
     */
    basePrice  :  Money

    /**
     * Returns null or the parent item.
     */
    parentItem  :  ShippingOrderItem | null

    /**
     * The quantity of the shipping order item.
     * 
     * The Quantity is equal to the related line item quantity.
     */
    quantity  :  Quantity


    /**
     * The mandatory shipping order number of the related ShippingOrder.
     */
    shippingOrderNumber  :  String

    /**
     * Gets the order item status.
     * 
     * The possible values are STATUS_CONFIRMED, STATUS_WAREHOUSE, STATUS_SHIPPED, STATUS_CANCELLED.
     */
    status  :  EnumValue<string>



    /**
     * Gets the tracking refs (tracking infos) the shipping order item is assigned to.
     */
    trackingRefs  :  FilteringCollection<TrackingRef> 

    private constructor();

    /**
     * A shipping order item can be assigned to one or many tracking infos with different quantities.
     * @param trackingInfoID the id of the tracking info
     * @param quantity  the quantity the which is assigned to the tracking info for this shipping order item. Optional (null is allowed).
     */
    addTrackingRef(trackingInfoID : String, quantity : Quantity | null) : TrackingRef

    /**
     * Apply a rate of (factor / divisor) to the prices in this item, with the option to half round up or half round down to the nearest cent if necessary.
     * @param factor factor used to calculate rate
     * @param divisor divisor used to calculate rate
     * @param roundUp whether to round up or down on 0.5
     */
    applyPriceRate(factor : Decimal, divisor : Decimal, roundUp : boolean) : void

    /**
     * Price of a single unit before discount application.
     */
    getBasePrice() : Money

    /**
     * Returns null or the parent item.
     */
    getParentItem() : ShippingOrderItem | null

    /**
     * The quantity of the shipping order item.
     */
    getQuantity() : Quantity

    /**
     * The mandatory shipping order number of the related ShippingOrder.
     */
    getShippingOrderNumber() : string

    /**
     * Gets the order item status.
     */
    getStatus() : EnumValue<string>

    /**
     * Gets the tracking refs (tracking infos) the shipping order item is assigned to.
     */
    getTrackingRefs() : FilteringCollection<TrackingRef>

    /**
     * Set a parent item.
     * @param parentItem The parent item, null is allowed
     */
    setParentItem(parentItem : ShippingOrderItem | null) : void

    /**
     * Sets the status.
     * @param status 
     */
    setStatus(status : string) : void

    /**
     * Split the shipping order item.
     * @param quantity  the quantity for the newly created item
     */
    split(quantity : Quantity) : ShippingOrderItem

    /**
     * Split the shipping order item.
     * @param quantity the quantity for the newly created item
     * @param splitOrderItem
     * 
        - true the related LineItem will be splitted too
        - false the related LineItem will not be splitted

    */
    split(quantity : Quantity, splitOrderItem : boolean) : ShippingOrderItem


}

export = ShippingOrderItem;