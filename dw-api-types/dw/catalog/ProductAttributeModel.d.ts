import Collection = require('../util/Collection');
import ObjectAttributeGroup = require('../object/ObjectAttributeGroup');
import ObjectAttributeDefinition = require('../object/ObjectAttributeDefinition');

declare class ProductAttributeModel {
    attributeGroups  :  Collection<ObjectAttributeGroup>;
    orderRequiredAttributeDefinitions  :  Collection<ObjectAttributeGroup>;
    visibleAttributeGroups  :  Collection<ObjectAttributeGroup>;

    getAttributeDefinition(id : string) : ObjectAttributeDefinition;
    getAttributeDefinitions(group : ObjectAttributeGroup) : Collection<ObjectAttributeDefinition>;
    getAttributeGroup(id : string) : ObjectAttributeGroup;
    getAttributeGroups() : Collection<ObjectAttributeGroup>;
    getDisplayValue(definition : ObjectAttributeDefinition) : Object;
    getOrderRequiredAttributeDefinitions() : Collection<ObjectAttributeDefinition>;
    getValue(definition : ObjectAttributeDefinition) : Object;
    getVisibleAttributeDefinitions(group : ObjectAttributeGroup) : Collection<ObjectAttributeDefinition>;
    getVisibleAttributeGroups() : Collection<ObjectAttributeGroup>;
}

export = ProductAttributeModel;