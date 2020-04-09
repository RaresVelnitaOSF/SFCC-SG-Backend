import ObjectTypeDefinition = require('./ObjectTypeDefinition');
import CustomAttributes = require('./CustomAttributes');

/**
 * Base class alternative to ExtensibleObject for objects customizable through the metadata system. Similar to ExtensibleObject: the describe() method provides access to the related object-type metadata. The getCustom() method is the central point to retrieve and store the objects attribute values themselves.
 */
declare class Extensible {
    /**
     * The custom attributes for this object.
     */
    readonly custom  :  CustomAttributes;

    /**
     * Returns the custom attributes for this object.
     */
    getCustom() : CustomAttributes;

    /**
     * Returns the meta data of this object.
     */
    describe() : ObjectTypeDefinition;
}

export = Extensible;