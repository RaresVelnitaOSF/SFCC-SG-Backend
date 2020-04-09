import AbstractItem = require('./AbstractItem');
import Quantity = require('../value/Quantity');
import EnumValue = require('../value/EnumValue');
import Money = require('../value/Money');
import Collection = require('../util/Collection')

declare class InvoiceItem extends AbstractItem {
    private constructor();

    /**
     * Price of a single unit before discount application.
     */
    readonly basePrice  :  Money

    /**
     * The captured amount for this item.
     */
    readonly capturedAmount  :  Money

    /**
     * The number of the invoice to which this item belongs.
     */
    readonly invoiceNumber  :  String 

    /**
     * Returns null or the parent item.
     */
    readonly parentItem  :  InvoiceItem | null

    /**
     * The quantity of this item.
     */
    readonly quantity  :  Quantity

    /**
     * The refunded amount for this item.
     */
    readonly refundedAmount  :  Money

    /**
     * Price of a single unit before discount application.
     */
    getBasePrice() : Money

    /**
     * Returns the captured amount for this item.
     */
    getCapturedAmount() : Money

    /**
     * Returns the number of the invoice to which this item belongs.
     */
    getInvoiceNumber() : String

    /**
     * Returns null or the parent item.
     */
    getParentItem() : InvoiceItem | null

    /**
     * Returns the quantity of this item.
     */
    getQuantity() : Quantity

    /**
     * Returns the refunded amount for this item.
     */
    getRefundedAmount() : Money

    /**
     * Updates the captured amount for this item.
     * @param capturedAmount 
     */
    setCapturedAmount(capturedAmount : Money) : void

    /**
     * Set a parent item.
     * @param parentItem 
     */
    setParentItem(parentItem : InvoiceItem | null) : void

    /**
     * Updates the refunded amount for this item.
     * @param refundedAmount 
     */
    setRefundedAmount(refundedAmount : Money) : void

}

export = InvoiceItem;