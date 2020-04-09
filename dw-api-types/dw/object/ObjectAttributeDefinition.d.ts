import Collection = require('../util/Collection');
import ObjectTypeDefinition = require('./ObjectTypeDefinition');
import ObjectAttributeValueDefinition = require('./ObjectAttributeValueDefinition');
import ObjectAttributeGroup = require('./ObjectAttributeGroup');

declare class ObjectAttributeDefinition {
    static readonly VALUE_TYPE_BOOLEAN  :  number;
    static readonly VALUE_TYPE_DATE  :  number;
    static readonly VALUE_TYPE_DATETIME  :  number;
    static readonly VALUE_TYPE_EMAIL  :  number;
    static readonly VALUE_TYPE_ENUM_OF_INT  :  number;
    static readonly VALUE_TYPE_ENUM_OF_STRING  :  number;
    static readonly VALUE_TYPE_HTML  :  number;
    static readonly VALUE_TYPE_IMAGE  :  number;
    static readonly VALUE_TYPE_INT  :  number;
    static readonly VALUE_TYPE_MONEY  :  number;
    static readonly VALUE_TYPE_NUMBER  :  number;
    static readonly VALUE_TYPE_PASSWORD  :  number;
    static readonly VALUE_TYPE_QUANTITY  :  number;
    static readonly VALUE_TYPE_SET_OF_INT  :  number;
    static readonly VALUE_TYPE_SET_OF_NUMBER  :  number;
    static readonly VALUE_TYPE_SET_OF_STRING  :  number;
    static readonly VALUE_TYPE_STRING  :  number;
    static readonly VALUE_TYPE_TEXT  :  number;

    valueTypeCode  :  number;
    values  :  Collection<ObjectAttributeValueDefinition>;
    unit  :  string;
    system: boolean;
    objectTypeDefinition: ObjectTypeDefinition;
    multiValueType: boolean;
    mandatory: boolean;
    key: boolean;
    ID : string;
    displayName: string;
    defaultValue:  ObjectAttributeValueDefinition;
    attributeGroups: Collection<ObjectAttributeGroup>

    private constructor();

    /**
     * Returns all attribute groups the attribute is assigned to.
     */
    getAttributeGroups() : Collection<ObjectAttributeGroup>

    /**
     * Return the default value for the attribute or null if none is defined.
     */
    getDefaultValue() : ObjectAttributeValueDefinition

    /**
     * Returns the display name for the attribute, which can be used in the user interface.
     */
    getDisplayName() : string

    /**
     * Returns the ID of the attribute definition.
     */
    getID() : string

    /**
     * Returns the object type definition in which this attribute is defined.
     */
    getObjectTypeDefinition() : ObjectTypeDefinition

    /**
     * Returns the attribute's unit representation such as inches for length or pounds for weight.
     */
    getUnit() : string

    /**
     * Returns the list of attribute values.
     */
    getValues() : Collection<ObjectAttributeValueDefinition>;

    /**
     * Returns a code for the data type stored in the attribute.
     */
    getValueTypeCode() : number

    /**
     * Identifies if the attribute represents the primary key of the object.
     */
    isKey() : boolean

    /**
     * Checks if this attribute is mandatory.
     */
    isMandatory() : boolean

    /**
     * Returns true if the attribute can have multiple values.
     */
    isMultiValueType() : boolean

    /**
     * Returns true if the attribute is of type 'Set of'.
     */
    isSetValueType() : boolean

    /**
     * Indicates if the attribute is a pre-defined system attribute or a custom attribute.
     */
    isSystem() : boolean

    /**
     * Returns a boolean flag indicating whether or not values of this attribute definition should be encoded using the encoding="off" flag in ISML templates.
     */
    requiresEncoding() : boolean

}

export = ObjectAttributeDefinition;


