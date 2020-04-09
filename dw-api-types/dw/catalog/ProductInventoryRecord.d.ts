import ExtensibleObject = require('../object/ExtensibleObject');
import Quantity = require('../value/Quantity');

import CustomAttributes = require('../object/CustomAttributes');

declare global {
    module ICustomAttributes {
        interface ProductInventoryRecord extends CustomAttributes{
        }
    }
}

declare class ProductInventoryRecord extends ExtensibleObject<ICustomAttributes.ProductInventoryRecord> {
    allocation  :  Quantity;
    allocationResetDate  :  Date;
    ATS  :  Quantity;
    backorderable  :  boolean;
    inStockDate  :  Date;
    perpetual  :  boolean;
    preorderable  :  boolean;
    preorderBackorderAllocation  :  Quantity;
    reserved  :  Quantity;
    stockLevel  :  Quantity;
    turnover  :  Quantity;

    getAllocation() : Quantity;
    getAllocationResetDate() : Date;
    getATS() : Quantity;
    getInStockDate() : Date;
    getPreorderBackorderAllocation() : Quantity;
    getReserved() : Quantity;
    getStockLevel() : Quantity;
    getTurnover() : Quantity;
    isBackorderable() : boolean;
    isPerpetual() : boolean;
    isPreorderable() : boolean;
    setAllocation(quantity : number) : void;
    setBackorderable(backorderableFlag : boolean) : void;
    setInStockDate(inStockDate : Date) : void;
    setPerpetual(perpetualFlag : boolean) : void;
    setPreorderable(preorderableFlag : boolean) : void;
    setPreorderBackorderAllocation(quantity : number) : void;
}

export = ProductInventoryRecord;