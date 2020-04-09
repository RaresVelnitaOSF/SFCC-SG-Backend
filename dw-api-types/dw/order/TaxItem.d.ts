import Money = require('../value/Money');
import TaxGroup = require('./TaxGroup')

declare class TaxItem {
    private constructor();

    /**
     * Gets the amount.
     */
    readonly amount  :  Money

    /**
     * The tax group.
     */
    readonly taxGroup  :  TaxGroup

    /**
     * Gets the amount.
     */
    getAmount() : Money

    /**
     * Returns the tax group.
     */
    getTaxGroup() : TaxGroup
}

export = TaxItem;