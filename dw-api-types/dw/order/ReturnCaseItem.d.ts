import AbstractItem = require('./AbstractItem');
import Quantity = require('../value/Quantity');
import EnumValue = require('../value/EnumValue');
import Money = require('../value/Money');
import Collection = require('../util/Collection');
import ReturnItem = require('./ReturnItem');


declare class ReturnCaseItem extends AbstractItem {
    private constructor();

    static readonly STATUS_CANCELLED  :  string
    static readonly STATUS_CONFIRMED  :  string
    static readonly STATUS_NEW  :  string
    static readonly STATUS_PARTIAL_RETURNED  :  string
    static readonly STATUS_RETURNED  :  string

    /**
     * Return the Quantity authorized for this ReturnCaseItem, may be N/A.
     */
    readonly authorizedQuantity  :  Quantity

    /**
     * Price of a single unit before discount application.
     */
    readonly basePrice  :  Money

    /**
     * Return the note for this return case item.
     */
    readonly note  :  string

    /**
     * Returns null or the parent item.
     */
    readonly parentItem  :  ReturnCaseItem | null

    /**
     * The reason code for return case item.
     */
    readonly reasonCode  :  EnumValue<string>

    /**
     * Mandatory number of ReturnCase to which this item belongs
     */
    readonly returnCaseNumber  :  string 

    /**
     * Unsorted collection of ReturnItems associated with this ReturnCaseItem.
     */
    readonly returnItems  :  Collection<ReturnCaseItem>

    /**
     * Gets the return case item status.

        The possible values are STATUS_NEW,STATUS_CONFIRMED, STATUS_PARTIAL_RETURNED, STATUS_RETURNED, STATUS_CANCELLED. 
    */
    readonly status  :  EnumValue<string>


    /**
     * Create a new ReturnItem for this ReturnCaseItem and assign it to the given Return.
     * @param returnNumber 	- number of Return to which new item is assigned.
     */
    createReturnItem(returnNumber : string) : ReturnItem

    /**
     * Return the Quantity authorized for this ReturnCaseItem, may be N/A.
     */
    getAuthorizedQuantity() : Quantity

    /**
     * Price of a single unit before discount application.
     */
    getBasePrice() : Money

    /**
     * Return the note for this return case item.
     */
    getNote() : string

    /**
     * Returns null or the parent item.
     */
    getParentItem() : ReturnCaseItem | null

    /**
     * Returns the reason code for return case item.
     */
    getReasonCode() : EnumValue<string>

    /**
     * Mandatory number of ReturnCase to which this item belongs
     */
    getReturnCaseNumber() : string

    /**
     * Unsorted collection of ReturnItems associated with this ReturnCaseItem.
     */
    getReturnItems() : Collection<ReturnItem>

    /**
     * Gets the return case item status.
     */
    getStatus() : EnumValue<string>

    /**
     * Set the optional authorized Quantity for this item.
     * @param authorizedQuantity - null or the quantity
     */
    setAuthorizedQuantity(authorizedQuantity : Quantity | null) : void

    /**
     * Sets a note for this return case item.
     * @param note 	- the note for this return case item to set
     */
    setNote(note : string) : void

    /**
     * Set a parent item.
     * @param parentItem - The parent item, null is allowed
     */
    setParentItem(parentItem : ReturnCaseItem | null) : void

    /**
     * Changes the reason code.
     * @param reasonCode  - the reason code to set
     */
    setReasonCode(reasonCode : string) : void

    /**
     * Sets the status.
     * @param statusstring  statusString - the status 
     * @throws NullPointerException - if status is null
     * @throws IllegalArgumentException - if the status transition to the status is not allowed
     */
    setStatus(statusstring : string) : void

}

export = ReturnCaseItem;

