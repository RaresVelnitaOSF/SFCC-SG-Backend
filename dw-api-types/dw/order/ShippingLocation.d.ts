import OrderAddress = require('./OrderAddress');
import CustomerAddress = require('../customer/CustomerAddress');

/**
 *
* Represents a specific location for a shipment.
*
* _Note: this class allows access to sensitive personal and private information. Pay attention to appropriate legal and regulatory requirements related to this data._
 */
declare class ShippingLocation {

    /**
     * The shipping location's first address.
     */
    address1  :  string

    /**
     * The shipping location's second address.
     */
    address2  :  string

    /**
     *  The shipping location's city.
     */
    city  :  string

    /**
     * The shipping location's country code.
     */
    countryCode  :  string

    /**
     * The shipping location's postal code.
     */
    postalCode  :  string

    /**
     * The shipping location's post box.
     */
    postBox  :  string

    /**
     * The shipping location's state code.
     */
    stateCode  :  string

    /**
     * The shipping location's suite.
     */
    suite  :  string

    /**
     * Constructs a new shipping location.
     */
    constructor()

    /**
     * Constructs a new shipping location and initializes it with the values of the specified address object.
     */
    constructor(address : CustomerAddress)

    /**
     * Constructs a new shipping location and initializes it with the values of the specified address object.
     */
    constructor(address : OrderAddress)

    /**
     * Returns the shipping location's first address.
     */
    getAddress1() : string

    /**
     * Returns the shipping location's second address.
     */
    getAddress2() : string

    /**
     * Returns the shipping location's city.
     */
    getCity() : string

    /**
     * Returns the shipping location's country code.
     */
    getCountryCode() : string

    /**
     * Returns the shipping location's postal code.
     */
    getPostalCode() : string

    /**
     * Returns the shipping location's post box.
     */
    getPostBox() : string

    /**
     * Returns the shipping location's state code.
     */
    getStateCode() : string

    /**
     * Returns the shipping location's suite.
     */
    getSuite() : string

    /**
     * Sets the shipping location's first address.
     * @param aValue
     */
    setAddress1(aValue : string) : void

    /**
     * Sets the shipping location's second address.
     * @param aValue
     */
    setAddress2(aValue : string) : void

    /**
     * Sets the shipping location's city.
     * @param aValue
     */
    setCity(aValue : string) : void

    /**
     * Sets the shipping location's country code.
     * @param aValue
     */
    setCountryCode(aValue : string) : void

    /**
     * Sets the shipping location's postal code.
     * @param aValue
     */
    setPostalCode(aValue : string) : void

    /**
     * Sets the shipping location's post box.
     * @param aValue
     */
    setPostBox(aValue : string) : void

    /**
     * Sets the shipping location's state code.
     * @param aValue
     */
    setStateCode(aValue : string) : void

    /**
     * Sets the shipping location's suite.
     * @param aValue
     */
    setSuite(aValue : string) : void



}


export = ShippingLocation;
