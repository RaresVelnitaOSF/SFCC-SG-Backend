import Collection = require('../util/Collection');
import ObjectAttributeDefinition = require('./ObjectAttributeDefinition');
import ObjectTypeDefinition = require('./ObjectTypeDefinition');

declare class ObjectAttributeGroup {
    attributeDefinitions: Collection<ObjectAttributeDefinition>;
    description: string;
    displayName: string;
    ID: string;
    objectTypeDefinition: ObjectTypeDefinition;
    system: Boolean;

    getAttributeDefinitions() : Collection<ObjectAttributeDefinition>;
    getDescription() : string;
    getDisplayName() : string;
    getID() : string;
    getObjectTypeDefinition() : ObjectTypeDefinition;
    isSystem() : boolean;
}

export = ObjectAttributeGroup;