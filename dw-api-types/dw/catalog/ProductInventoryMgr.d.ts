import ProductInventoryList = require('./ProductInventoryList');

/**
 * This manager provides access to inventory-related objects.
 */
declare class ProductInventoryMgr {
    private constructor();

    /**
     * The inventory list assigned to the current site or null if no inventory list is assigned to the current site.
     */
    readonly inventoryList : ProductInventoryList | null;

    /**
     * Returns the inventory list assigned to the current site or null if no inventory list is assigned to the current site.
     */
    static getInventoryList() : ProductInventoryList | null

    /**
     * Returns the inventory list with the passed ID or null if no inventory list exists with that ID.
     * @param listID 
     */
    static getInventoryList(listID : string) : ProductInventoryList | null
}

export = ProductInventoryMgr;