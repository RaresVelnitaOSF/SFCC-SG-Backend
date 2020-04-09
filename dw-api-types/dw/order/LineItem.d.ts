import ExtensibleObject = require('../object/ExtensibleObject');
import Money = require('../value/Money');
import LineItemCtnr = require('./LineItemCtnr');
import CustomAttributes = require('../object/CustomAttributes');

declare global {
    module ICustomAttributes {
        interface LineItem extends CustomAttributes{
        }
    }
}

/**
 * Common line item base class.
 */
declare class LineItem<T> extends ExtensibleObject<T> {
    /**
     * The base price for the line item, which is the price of the unit before applying adjustments, in the purchase currency. The base price may be net or gross of tax depending on the configured taxation policy.
     */
    basePrice : Money;

    /**
     * The gross price for the line item, which is the price of the unit before applying adjustments, in the purchase currency, including tax.
     */
    grossPrice : Money;

    /**
     * The line item ctnr of the line item.
     */
    readonly lineItemCtnr : LineItemCtnr<any>

    /**
     * The display text for the line item.
     */
    lineItemText : string

    /**
     * The net price for the line item, which is the price of the unit before applying adjustments, in the purchase currency, excluding tax.
     */
    netPrice : Money

    /**
     * Get the price of the line item. If the line item is based on net pricing then the net price is returned. If the line item is based on gross pricing then the gross price is returned.
     */
    readonly price : Money;

    /**
     * Return the price amount for the line item. Same as getPrice().getValue().
     */
    priceValue : number;

    /**
     * The tax for the line item, which is the tax of the unit before applying adjustments, in the purchase currency.
     */
    tax : Money;

    /**
     * Get the price used to calculate the tax for this line item.
     */
    readonly taxBasis : Money;

    /**
     * The tax class ID for the line item or null if no tax class ID is associated with the line item. In the case where the tax class ID is null, you should use the default tax class ID.
     */
    taxClassID : string | null

    /**
     * The tax rate, which is the decimal tax rate to be applied to the product represented by this line item. A value of 0.175 represents a percentage of 17.5%.
     */
    taxRate : number


    // methods

    /**
     * Returns the base price for the line item, which is the price of the unit before applying adjustments, in the purchase currency. The base price may be net or gross of tax depending on the configured taxation policy.
     */
    getBasePrice() : Money;

    /**
     * Returns the gross price for the line item, which is the price of the unit before applying adjustments, in the purchase currency, including tax
     */
    getGrossPrice() : Money;

    /**
     * Returns the line item ctnr of the line item.
     */
    getLineItemCtnr() : LineItemCtnr<any>; // TODO: find simple way to pass correct type

    /**
     * Returns the display text for the line item.
     */
    getLineItemText() : string;

    /**
     * Returns the net price for the line item, which is the price of the unit before applying adjustments, in the purchase currency, excluding tax.
     */
    getNetPrice() : Money;

    /**
     * Get the price of the line item. If the line item is based on net pricing then the net price is returned. If the line item is based on gross pricing then the gross price is returned
     */
    getPrice() : Money;

    /**
     * Get the price of the line item. If the line item is based on net pricing then the net price is returned. If the line item is based on gross pricing then the gross price is returned.
     */
    getPrice() : Money;

    /**
     * Get the price of the line item. If the line item is based on net pricing then the net price is returned. If the line item is based on gross pricing then the gross price is returned.
     */
    getPrice() : Money;

    /**
     * Return the price amount for the line item. Same as getPrice().getValue().
     */
    getPriceValue() : number;

    /**
     * Returns the tax for the line item, which is the tax of the unit before applying adjustments, in the purchase currency.
     */
    getTax() : Money;

    /**
     * Returns the tax for the line item, which is the tax of the unit before applying adjustments, in the purchase currency.
     */
    getTax() : Money;
    /**
     * Get the price used to calculate the tax for this line item.
     *
     * @returns The tax basis used to calculate tax for this line item, or Money.NOT_AVAILABLE if tax has not been set for this line item yet.
     */
    getTaxBasis() : Money;

    /**
     * Returns the tax class ID for the line item or null if no tax class ID is associated with the line item. In the case where the tax class ID is null, you should use the default tax class ID.
     */
    getTaxClassID() : string | null

    /**
     * Returns the tax rate, which is the decimal tax rate to be applied to the product represented by this line item. A value of 0.175 represents a percentage of 17.5%.
     */
    getTaxRate() : number;

    /**
     * Sets the display text for the line item.
     *
     * @param aText - line item text.
     */
    setLineItemText(aText : string) : void

    /**
     * Sets price attributes of the line item based on the current purchase currency and taxation policy.
The methods sets the 'basePrice' attribute of the line item. Additionally, it sets the 'netPrice' attribute of the line item if the current taxation policy is 'net', and the 'grossPrice' attribute, if the current taxation policy is 'gross'.
If null is specified as value, the price attributes are reset to Money.NOT_AVAILABLE.
     *
     * @param value - Price value or null
     */
    setPriceValue(value : number | null) : void

    /**
     * Sets the value for the tax of the line item, which is the the tax of the unit before applying adjustments, in the purchase currency.
     *
     * @param aValue - the new value for the tax.
     */
    setTax(aValue : Money) : void

    /**
     * Sets the tax class ID for the line item.
     *
     * @param aValue - the tax class ID for the line item.
     */
    setTaxClassID(aValue : string) : void


    /**
     * Sets the tax rate, which is the decimal tax rate to be applied to the product represented by this line item. A value of 0.175 represents a percentage of 17.5%.
     *
     * @param taxRate - the new value for the tax rate.
     */
    setTaxRate(taxRate : number) : void

    /**
     * Updates the tax-related attributes of the line item based on the specified tax rate and a tax basis determined by the system. This method sets the tax basis as an attribute, and is not affected by the previous value of this attribute.

The value used as a basis depends on the type of line item this is and on the promotion preferences for the current site. If the "old" tax basis rules are used, then the tax basis will simply be equal to getPrice(). If the "new" tax basis rules used, then the tax basis depends upon line item type as follows:

        1. *ProductLineItem*: basis equals ProductLineItem.getProratedPrice().
        2. *ShippingLineItem*: basis equals ShippingLineItem.getAdjustedPrice().
        3. *ProductShippingLineItem*: basis equals ProductShippingLineItem.getAdjustedPrice().
        4. *PriceAdjustment*: basis equals 0.00.

    All other line item types: basis equals getPrice().

If null is passed as tax rate, tax-related attribute fields are set to N/A.

     * @param taxRate - the tax rate to use or null.
     */
    updateTax(taxRate : number | null) : void
    /**
     * Updates the tax-related attributes of the line item based on the specified tax rate and the passed tax basis. If null is passed as tax rate or tax basis, tax-related attribute fields are set to N/A.
     * @param taxRate - the tax rate to use or null.
     * @param taxBasis  the tax basis to use or null.
     */
    updateTax(taxRate : number |  null, taxBasis : Money | null) : void

    /**
     * Updates tax amount of the line item setting the provided value. Depending on the way how the tax is calculated (based on net or gross price), the corresponding gross or net price is updated accordingly. For tax calculation based on net price, the gross price is calculated by adding the tax to the net price. For tax calculation based on gross price, the net price is calculated by subtracting the tax from the gross price.

If null is passed as tax amount, the item tax and resulting net or gross price are set to N/A.

Note that tax rate is not calculated and it is not updated.
     * @param tax - the tax amount of the line item to set
     */
    updateTaxAmount(tax : Money | null) : void


}

export = LineItem;
