import Collection = require('../util/Collection');
import ObjectAttributeDefinition = require('./ObjectAttributeDefinition');
import ObjectAttributeGroup = require('./ObjectAttributeGroup');

declare class ObjectTypeDefinition {
    attributeDefinitions: Collection<ObjectAttributeDefinition>
    displayName: string;
    ID: string;
    Syetem: boolean;

    getAttributeDefinitions() : Collection<ObjectAttributeDefinition>;
    getAttributeGroup(name : string) : ObjectAttributeGroup | null;
    getAttributeGroups() : Collection<ObjectAttributeGroup>;
    getCustomAttributeDefinition(name : string) : ObjectAttributeDefinition | null;
    getDisplayName() : string;
    getID() : string;
    getSystemAttributeDefinition(name : string) : ObjectAttributeDefinition | null;
    isSystem() : boolean;
}


export = ObjectTypeDefinition;