import ProductInventoryRecord = require('./ProductInventoryRecord');
import ProductAvailabilityLevels = require('./ProductAvailabilityLevels');


declare class ProductAvailabilityModel {
    static AVAILABILITY_STATUS_BACKORDER  :  string;
    static AVAILABILITY_STATUS_IN_STOCK  :  string;
    static AVAILABILITY_STATUS_NOT_AVAILABLE  :  string;
    static AVAILABILITY_STATUS_PREORDER  :  string;
    availability  :  number;
    availabilityStatus  :  string;
    inStock  :  boolean;
    inventoryRecord  :  ProductInventoryRecord;
    orderable  :  boolean;
    SKUCoverage  :  number;
    timeToOutOfStock  :  number;

    getAvailability() : number;
    getAvailabilityLevels(quantity : number) : ProductAvailabilityLevels;
    getAvailabilityStatus() : typeof ProductAvailabilityModel.AVAILABILITY_STATUS_BACKORDER | typeof ProductAvailabilityModel.AVAILABILITY_STATUS_IN_STOCK | typeof ProductAvailabilityModel.AVAILABILITY_STATUS_NOT_AVAILABLE | typeof ProductAvailabilityModel.AVAILABILITY_STATUS_PREORDER;

    /**
     * Returns the ProductInventoryRecord for the Product associated with this model.
     * @return the ProductInventoryRecord or null if there is none.
     */
    getInventoryRecord() : ProductInventoryRecord | null;
    getSKUCoverage() : number;
    getTimeToOutOfStock() : number;

    /**
     *
     * Returns true if the Product is in-stock in the given quantity. This is determined as follows:
     *   * If the product is not currently online (based on its online flag and online dates), then return false.
     *   * If there is no inventory-list for the current site, then return false.
     *   * If there is no inventory-record for the product, then return the default setting on the inventory-list.
     *   * If there is no allocation-amount on the inventory-record, then return the value of the perpetual-flag.
     *   * If there is an allocation-amount, but the perpetual-flag is true, then return true.
     *   * If the quantity is less than or equal to the stock-level, then return true.
     * Otherwise return false.

     * @param quantity - the quantity that is requested
     * @return true if the Product is in-stock.
     * @throws if the specified quantity is less or equal than zero
    */
    isInStock(quantity : number) : boolean;
    isInStock() : boolean;
    isOrderable(quantity : number) : boolean;
    isOrderable() : boolean;

}

export = ProductAvailabilityModel;
