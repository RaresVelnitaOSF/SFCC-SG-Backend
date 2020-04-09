

/**
 * Represents a Calendar and is based on the java.util.Calendar class. Refer to the java.util.Calendar documentation for more information.

 **IMPORTANT NOTE** : Please use the stringUtils.formatCalendar(Calendar) functions to convert a Calendar object into a string.
 */
declare class Calendar {
    /**
     * Indicates whether the HOUR is before or after noon.
     */
    static readonly AM_PM  :  number

    /**
     * Value for the month of year field representing April.
     */
    static readonly APRIL  :  number

    /**
     * Value for the month of year field representing August.
     */
    static readonly AUGUST  :  number

    /**
     * Represents a date.
     */
    static readonly DATE  :  number

    /**
     * Represents a day of the month.
     */
    static readonly DAY_OF_MONTH  :  number

    /**
     * Represents a day of the week.
     */
    static readonly DAY_OF_WEEK  :  number

    /**
     * Represents a day of the week in a month.
     */
    static readonly DAY_OF_WEEK_IN_MONTH  :  number

    /**
     * Represents a day of the year.
     */
    static readonly DAY_OF_YEAR  :  number

    /**
     * Value for the month of year field representing December.
     */
    static readonly DECEMBER  :  number

    /**
     * Indicates the daylight savings offset in milliseconds.
     */
    static readonly DST_OFFSET  :  number

    /**
     * Indicates the era such as 'AD' or 'BC' in the Julian calendar.
     */
    static readonly ERA  :  number

    /**
     * Value for the month of year field representing February.
     */
    static readonly FEBRUARY  :  number

    /**
     * Value for the day of the week field representing Friday.
     */
    static readonly FRIDAY  :  number

    /**
     * Represents an hour.
     */
    static readonly HOUR  :  number

    /**
     * Represents an hour of the day.
     */
    static readonly HOUR_OF_DAY  :  number

    /**
     * The input date pattern, for instance MM/dd/yyyy
     */
    static readonly INPUT_DATE_PATTERN  :  number

    /**
     * The input date time pattern, for instance MM/dd/yyyy h:mm a
     */
    static readonly INPUT_DATE_TIME_PATTERN  :  number

    /**
     * The input time pattern, for instance h:mm a
     */
    static readonly INPUT_TIME_PATTERN  :  number

    /**
     * Value for the month of year field representing January.
     */
    static readonly JANUARY  :  number

    /**
     * Value for the month of year field representing July.
     */
    static readonly JULY  :  number

    /**
     * Value for the month of year field representing June.
     */
    static readonly JUNE  :  number

    /**
     * The long date pattern, for instance MMM/d/yyyy
     */
    static readonly LONG_DATE_PATTERN  :  number

    /**
     * Value for the month of year field representing March.
     */
    static readonly MARCH  :  number

    /**
     * Value for the month of year field representing May.
     */
    static readonly MAY  :  number

    /**
     * Represents a millisecond.
     */
    static readonly MILLISECOND  :  number

    /**
     * Represents a minute.
     */
    static readonly MINUTE  :  number

    /**
     * Value for the day of the week field representing Monday.
     */
    static readonly MONDAY  :  number

    /**
     * Represents a month where the first month of the year is 0.
     */
    static readonly MONTH  :  number

    /**
     * Value for the month of year field representing November.
     */
    static readonly NOVEMBER  :  number

    /**
     * Value for the month of year field representing October.
     */
    static readonly OCTOBER  :  number

    /**
     * Value for the day of the week field representing Saturday.
     */
    static readonly SATURDAY  :  number

    /**
     * Represents a second.
     */
    static readonly SECOND  :  number

    /**
     * Value for the month of year field representing September.
     */
    static readonly SEPTEMBER  :  number

    /**
     * The short date pattern, for instance M/d/yy
     */
    static readonly SHORT_DATE_PATTERN  :  number

    /**
     * Value for the day of the week field representing Sunday.
     */
    static readonly SUNDAY  :  number

    /**
     * Value for the day of the week field representing Thursday.
     */
    static readonly THURSDAY  :  number

    /**
     * The time pattern, for instance h:mm:ss a
     */
    static readonly TIME_PATTERN  :  number

    /**
     * Value for the day of the week field representing Tuesday.
     */
    static readonly TUESDAY  :  number

    /**
     * Value for the day of the week field representing Wednesday.
     */
    static readonly WEDNESDAY  :  number

    /**
     * Represents a week of the month.
     */
    static readonly WEEK_OF_MONTH  :  number

    /**
     * Represents a week in the year.
     */
    static readonly WEEK_OF_YEAR  :  number

    /**
     * Represents a year.
     */
    static readonly YEAR  :  number

    /**
     * Indicates the raw offset from GMT in milliseconds.
     */
    static readonly ZONE_OFFSET  :  number

    /**
     * The first day of the week base on locale context. For example, in the US the first day of the week is SUNDAY. However, in France the first day of the week is MONDAY.
     */
    firstDayOfWeek  :  number

    /**
     * The current time stamp of this calendar. This method is also used to convert a Calendar into a Date.

    ***WARNING**: Keep in mind that the returned Date object is always in the time zone GMT. That means that time zone information set at the calendar object will not be honored and gets lost.
    */
    time  :  Date

    /**
     * The current time zone of this calendar.
     */
    timeZone  :  string

    /**
     * Creates a new Calendar object that is set to the current time.
     */
    constructor();

    /**
     * Creates a new Calendar object for the given Date object.
     */
    constructor(date: Date);

    /**
     * Adds or subtracts the specified amount of time to the given calendar field, based on the calendar's rules.
     * @param field  the calendar field.
     * @param value  the amount of date or time to be added to the field
     */
    add(field : number, value : number) : void

    /**
     * Indicates if this Calendar represents a time after the time represented by the specified Object.
     * @param obj 
     */
    after(obj : Calendar) : boolean

    /**
     * Indicates if this Calendar represents a time before the time represented by the specified Object.
     * @param obj 
     */
    before(obj : Calendar) : boolean

    /**
     * Sets all the calendar field values and the time value (millisecond offset from the Epoch) of this Calendar undefined.
     */
    clear() : void

    /**
     * Sets the given calendar field value and the time value (millisecond offset from the Epoch) of this Calendar undefined.
     * @param field 
     */
    clear(field : number) : void

    /**
     * Compares the time values (millisecond offsets from the Epoch) represented by two Calendar objects.
     * @param anotherCalendar 
     */
    compareTo(anotherCalendar : Calendar) : number

    /**
     * Compares two calendar values whether they are equivalent.
     * @param other 
     */
    equals(other : Calendar) : boolean

    /**
     * Returns the value of the given calendar field.
     * @param field 
     */
    get(field : number) : number

    /**
     * Returns the maximum value that the specified calendar field could have.
     * @param field 
     */
    getActualMaximum(field : number) : number

    /**
     * Returns the minimum value that the specified calendar field could have.
     * @param field 
     */
    getActualMinimum(field : number) : number

    /**
     * Returns the first day of the week base on locale context.
     */
    getFirstDayOfWeek() : number

    /**
     * Returns the maximum value for the given calendar field.
     * @param field 
     */
    getMaximum(field : number) : number

    /**
     * Returns the minimum value for the given calendar field.
     * @param field 
     */
    getMinimum(field : number) : number

    /**
     * Returns the current time stamp of this calendar.
     */
    getTime() : Date

    /**
     * Returns the current time zone of this calendar.
     */
    getTimeZone() : string

    /**
     * Calculates the hash code for a calendar;
     */
    hashCode() : number

    /**
     * Indicates if the specified year is a leap year.
     * @param year 
     */
    isLeapYear(year : number) : boolean

    /**
     * Checks, whether two calendar dates fall on the same day.
     * @param other 
     */
    isSameDay(other : Calendar) : boolean

    /**
     * Indicates if the field is set.
     * @param field 
     */
    isSet(field : number) : boolean

    /**
     * Parses the string according to the date and time format pattern and set the time at this calendar object.
     * @param timestring 
     * @param format 
     */
    parseByFormat(timestring : string, format : string) : void

    /**
     * Parses the string according the date format pattern of the given locale.
     * @param timestring 
     * @param locale 
     * @param pattern 
     */
    parseByLocale(timestring : string, locale : string, pattern : number) : void

    /**
     * Rolls the specified field up or down one value.
     * @param field 
     * @param up 
     */
    roll(field : number, up : boolean) : void

    /**
     * Rolls the specified field using the specified value.
     * @param field 
     * @param amount 
     */
    roll(field : number, amount : number) : void

    /**
     * Sets the given calendar field to the given value.
     * @param field 
     * @param value 
     */
    set(field : number, value : number) : void

    /**
     * Sets the values for the calendar fields YEAR, MONTH, and DAY_OF_MONTH.
     * @param year 
     * @param month 
     * @param date 
     */
    set(year : number, month : number, date : number) : void

    /**
     * Sets the values for the calendar fields YEAR, MONTH, DAY_OF_MONTH, HOUR_OF_DAY, and MINUTE.
     * @param year 
     * @param month 
     * @param date 
     * @param hourOfDay 
     * @param minute 
     */
    set(year : number, month : number, date : number, hourOfDay : number, minute : number) : void

    /**
     * Sets the values for the calendar fields YEAR, MONTH, DAY_OF_MONTH, HOUR_OF_DAY, MINUTE and SECOND.
     * @param year 
     * @param month 
     * @param date 
     * @param hourOfDay 
     * @param minute 
     * @param second 
     */
    set(year : number, month : number, date : number, hourOfDay : number, minute : number, second : number) : void

    /**
     * Sets what the first day of the week is.
     * @param value 
     */
    setFirstDayOfWeek(value : number) : void

    /**
     * Sets the current time stamp of this calendar.
     * 
     * WARNING: Keep in mind that the set Date object is always interpreted in the time zone GMT.
     * @param date 
     */
    setTime(date : Date) : void


    /**
     * Sets the current time zone of this calendar.
     * @param timeZone 
     */
    setTimeZone(timeZone : string) : void


}

export = Calendar;