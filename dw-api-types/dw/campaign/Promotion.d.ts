import ExtensibleObject = require('../object/ExtensibleObject');
import MarkupText = require('../content/MarkupText');
import Campaign = require('./Campaign');
import CustomAttributes = require('../object/CustomAttributes');

declare global {
    module ICustomAttributes {
        interface Promotion extends CustomAttributes{
        }
    }
}
/**
 * This class represents a promotion. Examples of promotions include:

    "Get 20% off your order"
    "$15 off a given product"
    "free shipping for all orders over $50"
    Get a bonus product with purchase of another product

The Promotion class provides access to the basic attributes of the promotion such as name, callout message, and description, but the details of the promotion rules are not available in the API due to their complexity.

Commerce Cloud Digital allows merchants to create a single logical "promotion rule" (e.g. "Get 20% off your order") and then assign it to one or more "containers" where the supported container types are campaigns or AB-tests. A Promotion represents a specific instance of a promotion rule assigned to a container. Promotion rules themselves that are not assigned to any container are inaccessible through the API. Each instance (i.e. assignment) can have separate "qualifiers". Qualifiers are the customer groups, source code groups, or coupons that trigger a given promotion for a customer.
 */
declare class Promotion extends ExtensibleObject<ICustomAttributes.Promotion> {
    /**
     * Constant representing promotion exclusivity of type class.
     */
    static readonly EXCLUSIVITY_CLASS : string;

    /**
     * Constant representing promotion exclusivity of type global.
     */
    static readonly EXCLUSIVITY_GLOBAL : string;

    /**
     * Constant representing promotion exclusivity of type no.
     */
    static readonly EXCLUSIVITY_NO : string;

    /**
     * Constant representing promotion class of type order.
     */
    static readonly PROMOTION_CLASS_ORDER : string

    /**
     * Constant representing promotion class of type product.
     */
    static readonly PROMOTION_CLASS_PRODUCT : string

    /**
     * Constant representing promotion class of type shipping.
     */
    static readonly PROMOTION_CLASS_SHIPPING : string

    /**
     * Constant indicating that that all qualifier conditions must be met in order for this promotion to apply for a given customer.
     */
    static readonly QUALIFIER_MATCH_MODE_ALL : string

    /**
     * Constant indicating that that at least one qualifier condition must be met in order for this promotion to apply for a given customer.
     */
    static readonly QUALIFIER_MATCH_MODE_ANY : string

    /**
     * Returns 'true' if promotion is active, otherwise 'false'.
A promotion is active if its campaign is active, and the promotion is enabled, and it is scheduled for now.
     */
    readonly active : boolean

    /**
     * Returns 'true' if the promotion is triggered by coupons, false otherwise.
     */
    readonly basedOnCoupons  :  boolean

    /**
     * Returns 'true' if the promotion is triggered by customer groups, false otherwise.
     */
    readonly basedOnCustomerGroups  :  boolean

    /**
     * Returns 'true' if the promotion is triggered by source codes, false otherwise.
     */
    readonly basedOnSourceCodes  :  boolean

    /**
     * The callout message of the promotion.
     */
    readonly calloutMsg  :  MarkupText

    /**
     * The campaign this particular instance of the promotion is defined in.

Note: If this promotion is defined as part of an AB-test, then a Campaign object will be returned, but it is a mock implementation, and not a true Campaign. This behavior is required for backwards compatibility and should not be relied upon as it may change in future releases.
     */
    readonly campaign  :  Campaign


}


export = Promotion;