import Customer = require('./Customer');
import ProductList = require('./ProductList');
import Profile = require('./Profile');
import Collection = require('../util/Collection');
import CustomerAddress = require('./CustomerAddress');
import SeekableIterator = require('../util/SeekableIterator');
import Map = require('../util/Map');

/**
 * ProductListMgr provides methods for retrieving, creating, searching for, and removing product lists.
 */
declare class ProductListMgr {
    private constructor();

    /**
     * Creates a new instance of a product list, of the specified type.
     * @param customer 
     * @param type 
     */
    static createProductList(customer : Customer, type : number) : ProductList

    /**
     * Gets the product list by its ID.
     * @param ID 
     */
    static getProductList(ID : string) : ProductList | null

    /**
     * Returns the first product list belonging to the customer with the specified profile.
     * @param profile 
     * @param type 
     */
    static getProductList(profile : Profile, type : number) : ProductList

    /**
     * Retrieve all product lists of the specified type owned by the specified customer.
     * @param customer 
     * @param type 
     */
    static getProductLists(customer : Customer, type : number) : Collection<ProductList>

    /**
     * Retrieve all the product lists of the specified type and event type belonging to the specified customer.
     * @param customer 
     * @param type 
     * @param eventType 
     */
    static getProductLists(customer : Customer, type : number, eventType : string) : Collection<ProductList>

    /**
     * Returns the collection of product lists that have the specified address as the shipping address.
     * @param customerAddress 
     */
    static getProductLists(customerAddress : CustomerAddress) : Collection<ProductList>

    /**
     * Searches for product list instances.
     * @param queryAttributes 
     * @param sortString 
     */
    static queryProductLists(queryAttributes : Map<string, string>, sortString : string) : SeekableIterator<ProductList>

    /**
     * Searches for product list instances.
     * @param queryString 
     * @param sortString 
     * @param args 
     * @param */ 
    static queryProductLists(queryString : string, sortString : string, ...args : string[]) : SeekableIterator<ProductList>


    /**
     * Removes the specified product list from the system.
     * @param productList 
     */
    static removeProductList(productList : ProductList) : void


}

export = ProductListMgr;