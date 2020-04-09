import Calendar = require('./Calendar');
import Money = require('../value/Money');

/**
 * String utility class.
 */
declare class StringUtils {

    /**
     * String encoding type HTML.
     * 
     * See Also:
    encodeString(String, Number)
    */
    static readonly ENCODE_TYPE_HTML  :  number

    /**
     * String encoding type XML.
    See Also:
    encodeString(String, Number)
    */
    static readonly ENCODE_TYPE_XML  :  number

    /**
     * String truncate mode 'char'. Truncate string to the nearest character. Default mode if no truncate mode is specified.
    See Also:
    truncate(String, Number, String, String)
    */
    static readonly TRUNCATE_CHAR  :  string

    /**
     * String truncate mode 'sentence'. Truncate string to the nearest sentence.
    See Also:
    truncate(String, Number, String, String)
    */
    static readonly TRUNCATE_SENTENCE  :  string

    /**
     * String truncate mode 'word'. Truncate string to the nearest word.
    See Also:
    truncate(String, Number, String, String)
    */
    static readonly TRUNCATE_WORD  :  string

    private constructor();


    /**
     * Interprets a Base64 encoded string as byte stream of an UTF-8 encoded string.
     */
    static decodeBase64(base64 : string) : string

    /**
     * Interprets a Base64 encoded string as the byte stream representation of a string.
     */
    static decodeBase64(base64 : string, characterEncoding : string) : string

    /**
     * Convert a given syntax-safe string to a string according to the selected character entity encoding type.
     */
    static decodeString(str : string, type : number) : string

    /**
     * Encodes the byte representation of the given string as Base64.
     */
    static encodeBase64(str : string) : string

    /**
     * Encodes the byte representation of the given string as Base64.
     */
    static encodeBase64(str : string, characterEncoding : string) : string

    /**
     * Convert a given string to a syntax-safe string according to the selected character entity encoding type.
     */
    static encodeString(str : string, type : number) : string

    /**
     * Returns a formatted string using the specified format and arguments.
     */
    static format(format : string, ...args : Object[]) : string

    /**
     * Formats a Calendar object with Calendar.INPUT_DATE_TIME_PATTERN format of the current request locale, for example "MM/dd/yyyy h:mm a" for the locale en_US.
     */
    static formatCalendar(calendar : Calendar) : string

    /**
     * Formats a Calendar object with the provided date format.
     */
    static formatCalendar(calendar : Calendar, format : string) : string

    /**
     * Formats a Calendar object with the date format defined by the provided locale and Calendar pattern.
     */
    static formatCalendar(calendar : Calendar, locale : string, pattern : number) : string

    /**
     * Returns a formatted integer number using the default integer format of the current site.
     * @param number 
     */
    static formatInteger(number : number) : string

    /**
     * Formats a Money Object with the default money format of the current request locale.
     * @param money 
     */
    static formatMoney(money : Money) : string

    /**
     * Returns a formatted number using the default number format of the current site.
     * @param number 
     */
    static formatNumber(number : number) : string

    /**
     * Returns a formatted string using the specified number and format.
     * @param number 
     * @param format 
     */
    static formatNumber(number : number, format : string) : string

    /**
     * Returns a formatted number as a string using the specified number format in specified locale.
     * @param number 
     * @param format 
     * @param locale 
     */
    static formatNumber(number : number, format : string, locale : string) : string

    /**
     * Return a string in which specified number of characters in the suffix is not changed and the rest of the characters replaced with specified character.
     * @param str 
     * @param replaceChar 
     * @param suffixLength 
     */
    static garble(str : string, replaceChar : string, suffixLength : number) : string

    /**
     * Returns the string with leading white space removed
     * @param str 
     */
    static ltrim(str : string) : string

    /**
     * This method provides cell padding functionality to the template.
     * @param str 
     * @param width 
     */
    static pad(str : string, width : number) : string

    /**
     * Returns the string with trailing white space removed.
     * @param str 
     */
    static rtrim(str : string) : string

    /**
     * Convert a given string to an HTML-safe string.
     * @param str 
     */
    static stringToHtml(str : string) : string

    /**
     * Converts a given string to a XML-safe string.
     * @param str 
     */
    static stringToXml(str : string) : string

    /**
     * Returns the string with leading and trailing white space removed.
     * @param str 
     */
    static trim(str : string) : string

    /**
     * Truncate the string to the specified length using specified truncate mode.
     * @param str 
     * @param maxLength 
     * @param mode 
     * @param suffix 
     */
    static truncate(str : string, maxLength : number, mode : string, suffix : string) : string

}

export = StringUtils;