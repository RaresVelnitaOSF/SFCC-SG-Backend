import List = require('../util/List');
import Calendar = require('../util/Calendar');
import SitePreferences = require('./SitePreferences');
import CustomAttributes = require('../object/CustomAttributes');
/**
 * This class represents a site in Commerce Cloud Digital and provides access to several site-level configuration values which are managed from within the Business Manager. It is only possible to get a reference to the current site as determined by the current request. The static method getCurrent() returns a reference to the current site.
 */
declare class Site {
    /**
     * Constant that represents the Site under maintenance/offline
     */
    static readonly SITE_STATUS_MAINTENANCE  :  number

    /**
     * Constant that represents the Site is Online
     */
    static readonly SITE_STATUS_ONLINE  :  number

    /**
     * Constant that represents the Site is in preview mode or online/password (protected)
     */
    static readonly SITE_STATUS_PROTECTED  :  number

    /**
     * The current site.
     */
    readonly current  :  Site  //(Read Only)

    /**
     * The default currency code for the current site.
     */
    readonly defaultCurrency  :  string  //(Read Only)

    /**
     * Return default locale for the site.
     */
    readonly defaultLocale  :  string  //(Read Only)

    /**
     * The configured HTTP host name. If no host name is configured the method returns the instance hostname.
     */
    readonly httpHostName  :  string

    /**
     * The configured HTTPS host name. If no host name is configured the method returns the HTTP host name or the instance hostname, if that is not configured as well.
     */
    readonly httpsHostName  :  string

    /**
     * The ID of the site.
     */
    readonly ID  :  string

    /**
     * A descriptive name for the site.
     */
    readonly name  :  string

    /**
     * Whether oms is active in the current site. This depends on a general property which states whether oms is active for the server, and a site-dependent preference whether oms is available for the current site.
     */
    readonly OMSEnabled  :  boolean

    /**
     * This method returns a container of all site preferences of this site.
     */
    readonly preferences  :  SitePreferences

    /**
     * The status of this site.
     *
     * Possible values are SITE_STATUS_ONLINE, SITE_STATUS_MAINTENANCE, SITE_STATUS_PROTECTED
     */
    readonly status  :  number


    /**
     * The code for the time zone in which the storefront is running.
     */
    readonly timezone  :  string

    /**
     * Returns time zone offset in which the storefront is running.
     */
    readonly timezoneOffset  :  number

    /**
     * The allowed currencies of the current site as a collection of currency codes.
     */
    readonly allowedCurrencies  :  List<string>

    /**
     * The allowed locales of the current site as a collection of locale ID's.
     */
    readonly allowedLocales  :  List<string>

    /**
     * All sites.
     */
    readonly allSites  :  List<Site>

    /**
     * A new Calendar object in the time zone of the current site.
     */
    readonly calendar  :  Calendar

    private constructor();

    /**
     * Returns the allowed currencies of the current site as a collection of currency codes.
     */
    getAllowedCurrencies() : List<string>

    /**
     * Returns the allowed locales of the current site as a collection of locale ID's.
     */
    getAllowedLocales() : List<string>

    /**
     * Returns all sites.
     */
    static getAllSites() : List<Site>

    /**
     * Returns a new Calendar object in the time zone of the current site.
     */
    static getCalendar() : Calendar

    /**
     * Returns the current site.
     */
    static getCurrent() : Site

    /**
     * Returns a custom preference value.
     * @param name
     */
    getCustomPreferenceValue<K extends keyof ICustomAttributes.SitePreferences>(name : K) : ICustomAttributes.SitePreferences[K] | null

    /**
     * Returns the default currency code for the current site.
     */
    getDefaultCurrency() : string

    /**
     * Return default locale for the site.
     */
    getDefaultLocale() : string

    /**
     * Returns the configured HTTP host name.
     */
    getHttpHostName() : string

    /**
     * Returns the configured HTTPS host name.
     */
    getHttpsHostName() : string

    /**
     * Returns the ID of the site.
     */
    getID() : string

    /**
     * Returns a descriptive name for the site.
     */
    getName() : string

    /**
     * This method returns a container of all site preferences of this site.
     */
    getPreferences() : SitePreferences

    /**
     * Returns the status of this site.
     */
    getStatus() : number

    /**
     * Returns the code for the time zone in which the storefront is running.
     */
    getTimezone() : string

    /**
     * Returns time zone offset in which the storefront is running.
     */
    getTimezoneOffset() : Number

    /**
     * Whether oms is active in the current site.
     */
    isOMSEnabled() : boolean

    /**
     * The method sets a value for a custom preference.
     * @param name
     * @param value
     */
    setCustomPreferenceValue(name : string, value : Object) : void



}

export = Site;
