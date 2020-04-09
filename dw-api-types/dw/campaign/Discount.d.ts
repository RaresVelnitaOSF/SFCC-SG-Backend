import Promotion = require('../campaign/Promotion');
/**
 * Superclass of all specific discount classes.
 */
declare class Discount {
    /**
     * Constant representing discounts of type amount.
     */
    static readonly TYPE_AMOUNT  :  string
    /**
     * Constant representing discounts of type bonus.
     */
    static readonly TYPE_BONUS  :  string

    /**
     * Constant representing discounts of type bonus choice.
     */
    static readonly TYPE_BONUS_CHOICE  :  string

    /**
     * Constant representing discounts of type fixed-price.
     */
    static readonly TYPE_FIXED_PRICE  :  string

    /**
     * Constant representing discounts of type fixed price shipping.
     */
    static readonly TYPE_FIXED_PRICE_SHIPPING  :  string

    /**
     * Constant representing discounts of type free.
     */
    static readonly TYPE_FREE  :  string

    /**
     * Constant representing discounts of type free shipping.
     */
    static readonly TYPE_FREE_SHIPPING  :  string

    /**
     * Constant representing discounts of type percentage.
     */
    static readonly TYPE_PERCENTAGE  :  string

    /**
     * Constant representing discounts of type percent off options.
     */
    static readonly TYPE_PERCENTAGE_OFF_OPTIONS  :  string

    /**
     * Constant representing discounts of type price book price.
     */
    static readonly TYPE_PRICEBOOK_PRICE  :  string

    /**
     * Constant representing discounts of type total fixed price.
     */
    static readonly TYPE_TOTAL_FIXED_PRICE  :  string


    protected constructor();

    /**
     * Returns the promotion this discount is based on.
     */
    getPromotion() : Promotion

    /**
     * Returns the quantity of the discount.
     */
    getQuantity() : number

    /**
     * Returns the type of the discount.
     */
    getType() : string

}

export = Discount;
