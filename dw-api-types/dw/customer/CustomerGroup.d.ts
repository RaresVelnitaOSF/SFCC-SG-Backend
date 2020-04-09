import ExtensibleObject = require('../object/ExtensibleObject');
import Customer = require('./Customer');
import CustomAttributes = require('../object/CustomAttributes');

declare global {
    module ICustomAttributes {
        interface CustomerGroup extends CustomAttributes{
        }
    }
}
declare class CustomerGroup extends ExtensibleObject<ICustomAttributes.CustomerGroup> {
    description  :  string;
    ID  :  string;
    ruleBased  :  Boolean;

    assignCustomer(customer : Customer) : void;
    getDescription() : string;
    getID() : string;
    isRuleBased() : Boolean;
    unassignCustomer(customer : Customer) : void;
}

export = CustomerGroup;