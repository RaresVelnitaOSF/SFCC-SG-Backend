import Discount = require('./Discount');

/**
 * Represents an amount-off discount in the discount plan, for example "$10 off all orders $100 or more".
 */
declare class AmountDiscount extends Discount {
    /**
     * The discount amount, for example 10.00 for a "$10 off" discount.
     */
    readonly amount  :  number

    public constructor(amount : number);
    /**
     * Returns the discount amount, for example 10.00 for a "$10 off" discount.
     */
    getAmount() : number

}

export = AmountDiscount;
