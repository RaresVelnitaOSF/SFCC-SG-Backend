import ShippingLocation = require('./ShippingLocation');

/**
 * Provides methods to access the tax table.
 */
declare class TaxMgr {
    /**
     * Constant representing the gross taxation policy.
     */
    static TAX_POLICY_GROSS  :  number

    /**
     * Constant representing the net taxation policy.
     */
    static TAX_POLICY_NET  :  number

    /**
     * The ID of the tax class that represents items with a custom tax rate. The standard order calculation process assumes that such line items are initialized with a tax rate and a being ignored during the tax rate lookup sequence of the calculation process.
    Note that this tax class does not appear in the Business Manager tax module.
     */
    readonly customRateTaxClassID  :  string

    /**
     * The ID of the default tax class defined for the site. This class might be used in case a product or service does not define a tax class.
    If no default tax class is defined, the method returns null.
     */
    readonly defaultTaxClassID  :  string

    /**
     * The ID of the default tax jurisdiction defined for the site. This jurisdiction might be used in case no jurisdiction is defined for a specific address.
    If no default tax jurisdiction is defined, this method returns null.
     */
    readonly defaultTaxJurisdictionID  :  string

    /**
     * The taxation policy (net/gross) configured for the current site.
     */
    readonly taxationPolicy  :  number

    /**
     * The ID of the tax class that represents tax exempt items. The tax manager will return a tax rate of 0.0 for this tax class.
     *
      _Note that this tax class does not appear in the Business Manager tax module._
     */
    readonly taxExemptTaxClassID  :  string

    private constructor();

    /**
     * Returns the ID of the tax class that represents items with a custom tax rate. The standard order calculation process assumes that such line items are initialized with a tax rate and a being ignored during the tax rate lookup sequence of the calculation process.
     *
     * _Note that this tax class does not appear in the Business Manager tax module._
     */
    static getCustomRateTaxClassID() : string


    /**
     * Returns the ID of the default tax class defined for the site. This class might be used in case a product or service does not define a tax class.
    If no default tax class is defined, the method returns null.
     */
    static getDefaultTaxClassID() : string | null


    /**
     * Returns the ID of the default tax jurisdiction defined for the site. This jurisdiction might be used in case no jurisdiction is defined for a specific address.
        If no default tax jurisdiction is defined, this method returns null.
    */
    static getDefaultTaxJurisdictionID() : string | null

    /**
     *  Returns the taxation policy (net/gross) configured for the current site.
     *
     * See Also:
     * `TAX_POLICY_GROSS`
     * `TAX_POLICY_NET`
     */
    static getTaxationPolicy() : number


    /**
     * Returns the ID of the tax class that represents tax exempt items. The tax manager will return a tax rate of 0.0 for this tax class.
     *
        _Note that this tax class does not appear in the Business Manager tax module._

    */
    static getTaxExemptTaxClassID() : string

    /**
     *     Returns the ID of the tax jurisdiction for the specified address. If no tax jurisdiction defined for the site matches the specified address, this method returns null.
     *

     * @param location The shipping location
     * @returns the ID of the tax jurisdiction for the specified address or null.
     */
    static getTaxJurisdictionID(location : ShippingLocation) : string

    /**
     * Returns the tax rate defined for the specified combination of tax class and tax jurisdiction.
     *
     * Method returns null if no tax rate is defined.
     * Method returns 0.0 of 'nontaxable' tax rate is specified (see method 'getNontaxableTaxClassID'.

    * @param taxClassID ID of the tax class
    * @param taxJurisdictionID ID of tax jusrisdiction
    * @returns the tax rate defined for the specified combination of tax class and tax jurisdiction.
    */
    static getTaxRate(taxClassID : string, taxJurisdictionID : string) : number | null

}


export = TaxMgr;
