import Calendar = require('../util/Calendar');
import OrganizationPreferences = require('./OrganizationPreferences');
/**
 * Represents the Commerce Cloud Digital server instance. An application server instance is configured to be of one of three types, "development system", "staging system" or "production system".
 */
declare class System {
    /**
     * A new Calendar object in the time zone of the current site.
     */
    readonly calendar: Calendar;

    readonly compatibilityMode: Number

    readonly instanceHostname: String

    readonly instanceTimeZone: String

    readonly instanceType: Number

    readonly preferences: OrganizationPreferences;

    private constructor();

    /**
     * Returns a new Calendar object in the time zone of the current instance.
     */
    static getCalendar(): Calendar;

    /**
     * Returns the compatibility mode of the custom code version that is currently active.
     */
    static getCompatibilityMode(): Number;

    /**
     * Returns instance hostname.
     */
    static getInstanceHostname(): String;

    /**
     * Returns the instance time zone.
     */
    static getInstanceTimeZone(): String;

    /**
     * Returns the type of the instance.
     */
    static getInstanceType(): Number;

    /**
     * This method returns a container of all global preferences of this organization (instance).
     */
    static getPreferences(): OrganizationPreferences;
}

export = System;
