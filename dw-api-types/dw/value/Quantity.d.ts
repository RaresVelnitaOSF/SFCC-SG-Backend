import Decimal = require('../util/Decimal');

/**
 * Represents the quantity of an item.
 */
declare class Quantity {

    /**
     * Identifies if the instance contains settings for value and unit.
     */
    readonly available  :  boolean;

    /**
     * The quantity as Decimal, null is returned when the quantity is not available
     */
    readonly decimalValue  :  Decimal | null;

    /**
     * The value for unit which identifies the unit of measure for the quantity. Examples of unit are 'inches' or 'pounds'.
     */
    readonly unit  :  string;

    /**
     * The quantity value.
     */
    readonly value  :  number;

    /**
     * Creates a new quantity instance with the specified value and unit.
     * @param value - the actual quantity, must not be null
     * @param unit - the unit identifier for the quantity, must not be null
     */
    constructor(value : number, unit : string);

    /**
     * Add Quantity object to the current object. Only objects representing the same unit can be added.
     * @param value 
     */
    add(value : Quantity) : Quantity;

    /**
     * Compares two Quantity values. An exception is thrown if the two Quantities values are of different unit. If one of the Quantity values represents the N/A value it is treated as 0.0.
     * @param other 
     */
    compareTo(other : Quantity) : number;

    /**
     * Divide Quantity object by specified divisor.
     * @param divisor 
     */
    divide(divisor : number) : Quantity;

    /**
     * Compares two decimal values whether they are equivalent.
     * @param other 
     */
    equals(other : Quantity) : boolean;

    /**
     * Returns the quantity as Decimal, null is returned when the quantity is not available.
     */
    getDecimalValue() : Decimal | null;

    /**
     * Returns the value for unit which identifies the unit of measure for the quantity. Examples of unit are 'inches' or 'pounds'.
     */
    getUnit() : string;

    /**
     * Returns the quantity value.
     */
    getValue() : number;

    /**
     * Calculates the hash code for a decimal.
     */
    hashCode() : number;

    /**
     * Identifies if the instance contains settings for value and unit.
     */
    isAvailable() : boolean;

    /**
     * Identifies if two Quantities have the same unit.
     * @param value 
     */
    isOfSameUnit(value : Quantity) : boolean;

    /**
     * Multiply Quantity object by specified factor.
     * @param factor multiplication factor
     */
    multiply(factor : number) : Quantity;

    /**
     * Method returns a new instance of Quantity with the same unit but different value. An N/A instance is returned if value is null.
     * @param value 
     */
    newQuantity(value : Decimal | null) : Quantity;

    /**
     * Rounds the Quantity value to the number of specified decimal digits.
     * @param precision number of decimal digits after the decimal point
     */
    round(precision : number) : Quantity;

    /**
     * Subtract Quantity object from the current object. Only objects representing the same unit can be subtracted.
     * @param value 
     */
    subtract(value : Quantity) : Quantity;

}

export = Quantity;