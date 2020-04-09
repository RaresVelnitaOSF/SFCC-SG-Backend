

/**
 * The Decimal class is a helper class to perform decimal arithmetic in scripts and to represent a decimal number with arbitray length. The decimal class avoids arithmetic errors, which are typical for calculating with floating numbers, that are based on a binary mantissa. The class is designed in a way that it can be used very similar to a desktop calculator. var d = new Decimal( 10.0 ); var result = d.add( 2.0 ).sub( 3.0 ).get(); The above code will return 9 as result.
 */
declare class Decimal {
    constructor();
    constructor(value : number);
    constructor(value : string);

    /**
     * Returns a new Decimal with the absolute value of this Decimal.
     */
    abs() : Decimal;

    /**
     * Adds a Number value to this Decimal and returns the new Decimal.
     * @param value 
     */
    add(value : number | Decimal) : Decimal;
    /**
     * Adds a percentage value to the current value of the decimal.
     * @param value 
     */
    addPercent(value : number | Decimal) : Decimal;

    /**
     * Divides the specified Number value with this decimal and returns the new decimal.
     * @param value 
     */
    divide(value : number | Decimal) : Decimal;

    /**
     * Compares two decimal values whether they are equivalent.
     * @param other 
     */
    equals(other : Decimal) : boolean;

    /**
     * Returns the value of the Decimal as a Number.
     */
    get() : number;

    /**
     * Calculates the hash code for this decimal;
     */
    hashCode() : number;

    /**
     * Multiples the specified Number value with this Decimal and returns the new Decimal.
     * @param value 
     */
    multiply(value : number | Decimal) : Decimal;

    /**
     * Returns a new Decimal with the negated value of this Decimal.
     */
    negate() : Decimal;

    /**
     * 
     * @param decimals Rounds the current value of the decimal using the specified number of decimals.
     */
    round(decimals : number) : Decimal;

    /**
     * Subtracts the specified Number value from this Decimal and returns the new Decimal.
     * @param value 
     */
    subtract(value : number | Decimal) : Decimal;
    /**
     * Subtracts a percentage value from the current value of the decimal.
     * @param value 
     */
    subtractPercent(value : number | Decimal) : Decimal;
}

export = Decimal;