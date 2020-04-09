import AbstractItem = require('./AbstractItem');
import Quantity = require('../value/Quantity');
import Decimal = require('../util/Decimal');
import EnumValue = require('../value/EnumValue');
import Money = require('../value/Money');
import Collection = require('../util/Collection');
import ReturnCaseItem = require('./ReturnCaseItem');
import TaxGroup = require('./TaxGroup');
import TaxItem = require('./TaxItem');

/**
 * An item of a Return, created using Return.createItem(string). Represents a physically returned order line item. Please refer to the documentation of ReturnHooks for further information.
When the related Return were set to status COMPLETED, only the the custom attributes of the return item can be changed.
 */
declare class ReturnItem extends AbstractItem {
    private constructor();

    /**
     * Price of a single unit before discount application.
     */
    readonly basePrice  :  Money

    /**
     * Return the note for this return item.
     */
    readonly note  :  string

    /**
     * Returns null or the parent item.
     */
    readonly parentItem  :  ReturnItem | null

    /**
     * The reason code for return item. The list of reason codes can be updated by updating meta-data for ReturnItem.
     */
    readonly reasonCode  :  EnumValue<string>

    /**
     * The return case item related to this item. Should never return null.
     */
    readonly returnCaseItem  :  ReturnCaseItem

    /**
     * The Quantity returned. This may return an N/A quantity.
     */
    readonly returnedQuantity  :  Quantity

    /**
     * The mandatory returnNumber of the Return to which this item belongs.
     */
    readonly returnNumber  :  string



    /**
     * Create a new tax-item and add to this item.
     * @param amount - amount to assign to the tax-item
     * @param taxGroup - the TaxGroup to which the item belongs
     */
    addTaxItem(amount : Decimal, taxGroup : TaxGroup) : TaxItem

    /**
     * Apply a rate of (factor / divisor) to the prices in this item, with the option to half round up or half round down to the nearest cent if necessary.
     * @param factor - factor used to calculate rate
     * @param divisor - divisor used to calculate rate
     * @param roundUp - whether to round up or down on 0.5
     */
    applyPriceRate(factor : Decimal, divisor : Decimal, roundUp : boolean) : void

    /**
     * Price of a single unit before discount application.
     */
    getBasePrice() : Money

    /**
     * Return the note for this return item.
     */
    getNote() : string

    /**
     * Returns null or the parent item.
     */
    getParentItem() : ReturnItem | null

    /**
     * Returns the reason code for return item.
     */
    getReasonCode() : EnumValue<string>

    /**
     * Returns the return case item related to this item.
     */
    getReturnCaseItem() : ReturnCaseItem

    /**
     * The Quantity returned.
     */
    getReturnedQuantity() : Quantity

    /**
     * The mandatory returnNumber of the Return to which this item belongs.
     */
    getReturnNumber() : string

    /**
     * Sets a note for this return item.
     * @param note 
     */
    setNote(note : string) : void

    /**
     * Set a parent item.
     * @param parentItem  - The parent item, null is allowed
     */
    setParentItem(parentItem : ReturnItem | null) : void

    /**
     * Set the reason code.
     * @param reasonCode 	- the reason code to set
     */
    setReasonCode(reasonCode : string) : void

    /**
     * Set the Quantity returned
     * @param quantity 
     */
    setReturnedQuantity(quantity : Quantity) : void

    /**
     * Set the tax-basis price for this item.
     * @param taxBasis 
     */
    setTaxBasis(taxBasis : Money) : void

    /**
     * Set the tax-items for this item.
     * @param taxItems 
     */
    setTaxItems(taxItems : Collection<TaxItem>) : void

}

export = ReturnItem;