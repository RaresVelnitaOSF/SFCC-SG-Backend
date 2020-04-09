import ExtensibleObject = require('../object/ExtensibleObject');

import CustomAttributes = require('../object/CustomAttributes');

declare global {
    module ICustomAttributes {
        interface SitePreferences extends CustomAttributes {
        }
    }
}

/**
 * SitePreferences is a container for custom site-level attributes. The object corresponds with system object type "SitePreferences". It has no system attributes and exists only as a place for merchants to define custom attributes which need to be available for each site.

Logically there is only one SitePreferences instance per site. The instance is obtained by calling Site.getPreferences(). Once an instance of the container is obtained, it is possible to read/write site preference values by using the usual syntax for ExtensibleObject instances. For example:
 */
declare class SitePreferences extends ExtensibleObject<ICustomAttributes.SitePreferences> {
    /**
     * The name of the source code url paremeter configured for the site.
     */
    readonly sourceCodeURLParameterName  :  string

    /**
     * Returns the name of the source code url paremeter configured for the site.
     */
    getSourceCodeURLParameterName() : string

    private constructor();
}

export = SitePreferences;
