import Money = require('../value/Money'); 
import Collection = require('../util/Collection');
import Quantity = require('../value/Quantity');
import LineItem = require('./LineItem');
import ReturnCaseItem = require('./ReturnCaseItem');
import InvoiceItem = require('./InvoiceItem');
import EnumValue = require('../value/EnumValue');
import ShippingOrderItem = require('./ShippingOrderItem');

/**
 * Defines extensions to ProductLineItems and ShippingLineItems belonging to an order.

The order-item can be accessed using ProductLineItem.getOrderItem() or ShippingLineItem.getOrderItem() - these methods return null if the item is associated with a basket rather than an order. Alternative access is available using Order.getOrderItem(string) by passing the itemID used to identify the order-item in for example export files. The associated order-item can also be accessed from invoice-items, shipping-order-items, return-items and return-case-items using AbstractItem.getOrderItem().

The order-item provides an item-level status and type, methods for accessing and creating associated items, and methods used to allocate inventory for shipping-order creation.
 */
declare class OrderItem {
    /**
     *Constant for Order Item Status BACKORDER
     */ 
    static readonly STATUS_BACKORDER  :  string

    /**
     * Constant for Order Item Status CANCELLED
     */
    static readonly STATUS_CANCELLED  :  string

    /**
     * Constant for Order Item Status CONFIRMED
     */
    static readonly STATUS_CONFIRMED  :  string

    /**
     * Constant for Order Item Status CREATED
     */
    static readonly STATUS_CREATED  :  string

    /**
     * Constant for Order Item Status NEW
     */
    static readonly STATUS_NEW  :  string

    /**
     * Constant for Order Item Status OPEN
     */
    static readonly STATUS_OPEN  :  string

    /**
     * Constant for Order Item Status SHIPPED
     */
    static readonly STATUS_SHIPPED  :  string

    /**
     * Constant for Order Item Status WAREHOUSE
     */
    static readonly STATUS_WAREHOUSE  :  string

    /**
     * Constant for Order Item Type PRODUCT
     */
    static readonly TYPE_PRODUCT  :  string

    /**
     * Constant for Order Item Type SERVICE
     */
    static readonly TYPE_SERVICE  :  string

    private constructor();

    /**
     * Sum of amounts appeased for this item, calculated by iterating over invoice items associated with the item.
     */
    readonly appeasedAmount  :  Money  

    /**
     * Sum of amounts captured for this item, calculated by iterating over invoice items associated with the item.
     */
    readonly capturedAmount  :  Money  

    /**
     * All invoice items associated with this item, each InvoiceItem will belong to a different Invoice, which can also be accessed using Order.getInvoices() or Order.getInvoice(string).
     */
    readonly invoiceItems  :  Collection<InvoiceItem>;


    /**
     * The itemID used to identify the OrderItem. Note this is not a UUID, it is created internally when the OrderItem instance is created, and is typically used within export files to identify the item.
     */
    readonly itemID  :  string  

    /**
     * The line item which is being extended by this instance.
     */
    readonly lineItem  :  LineItem  


    /**
     * Sum of amounts refunded for this item, calculated by iterating over invoice items associated with the item.
     */
    readonly refundedAmount  :  Money  

    /**
     * All return case items associated with this item, each ReturnCaseItem will belong to a different ReturnCase, which can also be accessed using Order.getReturnCases() or Order.getReturnCase(string).
     */
    readonly returnCaseItems  :  Collection<ReturnCaseItem> 


    /**
     * The quantity returned, dynamically sum of quantities held by associated ReturnItems.
     */
    readonly returnedQuantity  :  Quantity


    private constructor();

    /**
     * Attempts to allocate inventory for the item and returns the quantity that could be allocated or null if no allocation was possible.
     * @param partialAllocation *true* accept a partial allocation as a result. Partial allocation is only possible when no option product line items are included, *false* only full allocation will be used, partial allocation will be released automatically
     */
    allocateInventory(partialAllocation : boolean) : Quantity | null

    /**
     * Sum of amounts appeased for this item, calculated by iterating over invoice items associated with the item.
     */
    getAppeasedAmount() : Money

    /**
     * Sum of amounts captured for this item, calculated by iterating over invoice items associated with the item.
     */
    getCapturedAmount() : Money

    /**
     * Returns all invoice items associated with this item, each InvoiceItem will belong to a different Invoice, which can also be accessed using Order.getInvoices() or Order.getInvoice(string).
     */
    getInvoiceItems() : Collection<InvoiceItem>

    /**
     * The itemID used to identify the OrderItem.
     */
    getItemID() : string

    /**
     * Returns the line item which is being extended by this instance.
     */
    getLineItem() : LineItem

    /**
     * Sum of amounts refunded for this item, calculated by iterating over invoice items associated with the item.
     */
    getRefundedAmount() : Money

    /**
     * Returns all return case items associated with this item, each ReturnCaseItem will belong to a different ReturnCase, which can also be accessed using Order.getReturnCases() or Order.getReturnCase(string).
     */
    getReturnCaseItems() : Collection<ReturnCaseItem>

    /**
     * The quantity returned, dynamically sum of quantities held by associated ReturnItems.
     */
    getReturnedQuantity() : Quantity

    /**
     * Returns a collection of the ShippingOrderItems created for this item.
     */
    getShippingOrderItems() : Collection<ShippingOrderItem>

    /**
     * Returns a collection of the ShippingOrderItems created for this item.
     * @param includeCancelled
     * - true all shipping order items, including the cancelled, created for this item will be returned
     * - false only non-cancelled shipping order items created for this item will be returned
     */
    getShippingOrderItems(includeCancelled : boolean) : Collection<ShippingOrderItem>

    /**
     * Returns a collection of all split OrderItems associated with this item.
     */
    getSplitItems() : Collection<OrderItem>

    /**
     * Returns the split source item associated with this item, if existing.
     */
    getSplitSourceItem() : OrderItem

    /**
     * Gets the order item status.
     * 
     * The possible values are STATUS_NEW, STATUS_OPEN, STATUS_BACKORDER, STATUS_CONFIRMED, STATUS_WAREHOUSE, STATUS_SHIPPED, STATUS_CANCELLED.
     */
    getStatus() : EnumValue<string>

    /**
     * Returns the type of line item with which this instance is associated, one of

        - SERVICE (method getLineItem() returns a ShippingLineItem
        - PRODUCT (method getLineItem() returns a ProductLineItem
    */
    getType() : EnumValue<string>

    /**
     * Set the status of the order item, use one of the values documented in getStatus().
     * @param status 
     */
    setStatus(status : string) : void
}

export = OrderItem;