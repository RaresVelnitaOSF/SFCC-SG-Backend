import Decimal = require('../util/Decimal');

declare class TaxGroup {
    private constructor();

    /**
     * Creates a TaxGroup.
     * This TaxGroup can be used for example in ReturnItem.addTaxItem(Decimal, TaxGroup).
     * @param taxType - the tax type
     * @param caption - the caption
     * @param description - the description
     * @param taxRate - the tax rate as floating point. 1.0 means 100 %.
     */
    static create(taxType : string, caption : string, description : string, taxRate : Decimal) : TaxGroup

    /**
     * Gets the caption.
     */
    readonly caption  :  string

    /**
     * Gets the description.
     */
    readonly description  :  string

    /**
     * Gets the percentage amount of the rate.
     */
    readonly rate  :  number

    /**
     * Gets the tax type.
     */
    readonly taxType  :  string

    /**
     * Gets the caption.
     */
    getCaption() : string

    /**
     * Gets the description.
     */
    getDescription() : string

    /**
     * Gets the percentage amount of the rate.
     */
    getRate() : Number

    /**
     * Gets the tax type.
     */
    getTaxType() : string
}

export = TaxGroup;