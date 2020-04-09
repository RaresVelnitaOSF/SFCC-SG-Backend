import PersistentObject = require('../object/PersistentObject');

declare class SortingRule extends PersistentObject {
    readonly ID  :  string;
    getID() : string;
}

export = SortingRule;
