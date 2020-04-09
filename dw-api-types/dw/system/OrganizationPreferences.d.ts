import ExtensibleObject = require('../object/ExtensibleObject');

import CustomAttributes = require('../object/CustomAttributes');

declare global {
    module ICustomAttributes {
        interface OrganizationPreferences extends CustomAttributes {
        }
    }
}

/**
 * OrganizationPreferences is a container for custom global (i.e. organization-level) attributes. The object corresponds with system object definition "OrganizationPreferences". It has no system attributes and exists only as a place for merchants to define custom attributes which need to be available to all of their sites.
 */
declare class OrganizationPreferences extends ExtensibleObject<ICustomAttributes.OrganizationPreferences> {

    private constructor();
}

export = OrganizationPreferences;
