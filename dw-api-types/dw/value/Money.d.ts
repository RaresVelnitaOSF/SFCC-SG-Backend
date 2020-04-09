import Decimal = require('../util/Decimal')
import Quantity = require('./Quantity')

/**
 * Represents money in Commerce Cloud Digital.
 */
declare class Money {
    /**
     * Represents that there is no money available.
     */
    static NOT_AVAILABLE  :  Money

    /**
     * Identifies if the instance contains settings for value and currency.
     */
    readonly available  :  boolean

    /**
     * The money as Decimal, null is returned when the money is not available.
     */
    readonly decimalValue  :  Decimal | null;

    /**
     * The value of the money instance.
     */
    readonly value  :  number

    /**
     * Return the value of the money instance or null if the Money instance is NOT_AVAILABLE.
     */
    readonly valueOrNull  :  number | null

    /**
     * The ISO 4217 currency mnemonic (such as 'USD', 'EUR') of the currency the money value relates to. Note a money instance may also describe a price that is 'not available'. In this case the value of this attribute is N/A.
     */
    readonly currencyCode : string;

    /**
     * Constructs a new money instance with the specified amount for the specified currency.
     * @param value 
     * @param currencyCode 
     */
    constructor(value : number, currencyCode : string)

    /**
     * Returns a Money instance by adding the specified Money object to the current object.
     * @param value 
     */
    add(value : Money) : Money

    /**
     * Adds a certain percentage to the money object.
     * @param percent 
     */
    addPercent(percent : number) : Money

    /**
     * Adds a rate (e.g. 0.05) to the money object. This is typically for example to add a tax rate.
     * @param value 
     */
    addRate(value : number) : Money

    /**
     * Compares two Money values. An exception is thrown if the two Money values are of different currency. If one of the Money values represents the N/A value it is treated as 0.0.
     * @param other 
     */
    compareTo(other : Money) : number

    /**
     * Divide Money object by specified divisor. If this Money is N/A the result is also N/A.
     * @param divisor 
     */
    divide(divisor : number) : Money

    /**
     * Compares two money values whether they are equivalent.
     * @param other 
     */
    equals(other : Money) : boolean

    /**
     * Returns the ISO 4217 currency mnemonic (such as 'USD', 'EUR') of the currency the money value relates to. Note a money instance may also describe a price that is 'not available'. In this case the value of this attribute is N/A.
     */
    getCurrencyCode() : string

    /**
     * Returns the money as Decimal, null is returned when the money is not available.
     */
    getDecimalValue() : Decimal | null;

    /**
     * Returns the value of the money instance.
     */
    getValue() : number

    /**
     * Return the value of the money instance or null if the Money instance is NOT_AVAILABLE.
     */
    getValueOrNull() : number | null

    /**
     * Calculates the hash code for a money;
     */
    hashCode() : number

    /**
     * Identifies if the instance contains settings for value and currency.
     */
    isAvailable() : boolean

    /**
     * Identifies if two Money value have the same currency.
     * @param value 
     */
    isOfSameCurrency(value : Money) : boolean

    /**
     * Multiply Money object by specified factor. If this Money is N/A the result is also N/A.
     * @param factor 
     */
    multiply(quantity : Quantity | number) : Money

    /**
     * Method returns a new instance of Money with the same currency but different value. An N/A instance is returned if value is null.
     * @param value 
     */
    newMoney(value : Decimal | null) : Money

    /**
     * Convenience method. Calculates and returns the percentage off this price represents in relation to the passed base price. The result is generally equal to 100.0 - this.percentOf(value). For example, if this value is $30 and the passed value is $50, then the return value will be 40.0, representing a 40% discount.
     * @param value 
     */
    percentLessThan(value : Money) : number | null;

    /**
     * Convenience method. Calculates and returns the percentage of the passed value this price represents. For example, if this value is $30 and the passed value is $50, then the return value will be 60.0 (i.e. 60%). 
     * @param value 
     */
    percentOf(value : Money) : number | null;

    /**
     * Prorates the specified values using the specified discount.
     * @param dist 
     * @param values 
     */
    static prorate(dist : Money, ...values : Money[]) : Money

    /**
     * Returns a new Money instance by substracting the specified Money object from the current object. Only objects representing the same currency can be subtracted. If one of the Money values is N/A, the result is N/A.
     * @param value 
     */
    subtract(value : Money) : Money

    /**
     * Subtracts a certain percentage from the money object. The percent value is given as true percent value, so for example 10 represent 10%. If this Money is N/A the result is also N/A.
     * @param percent 
     */
    subtractPercent(percent : number) : Money

    /**
     * Subtracts a rate (e.g. 0.05) from the money object. This is typically for example to subtract a tax rates.
     * @param value 
     */
    subtractRate(value : number) : Money

    /**
     * Returns a string representation of Money according to the regional settings configured for current request locale, for example '$59.00' or 'USD 59.00'.
     */
    toFormattedString() : string

    /**
     * Returns a string representation for the numeric value of this money. The number is formatted with the decimal symbols of the platforms default locale.
     */
    toNumberString() : string

    /**
     * Returns a string representation of this Money object.
     */
    toString() : string
}

export = Money;
