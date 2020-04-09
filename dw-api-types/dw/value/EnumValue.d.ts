

declare class EnumValue<T> {
    /**
     * The display value of the enumeration value. If no display value is configured the method return the string representation of the value.
     */
    readonly displayValue  :  string;

    /**
     * The value of the enumeration value. This is either an integer value or a string.
     */
    readonly value  :  T;

    /**
     * Returns the display value of the enumeration value
     */
    getDisplayValue() : string

    /**
     * Returns the value of the enumeration value.
     */
    getValue() : T;
}

export = EnumValue;
