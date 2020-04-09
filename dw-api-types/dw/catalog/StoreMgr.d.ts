import Store = require('./Store');
import Collection = require('../util/Collection');
import StoreGroup = require('./StoreGroup');
import LinkedHashMap = require('../util/LinkedHashMap');

/**
 * Provides helper methods for getting stores based on id and querying for stores based on geolocation.
 */
declare class StoreMgr {
    private constructor();

    /**
     * All the store groups of the current site.
     */
    readonly allStoreGroups  :  Collection<StoreGroup>

    /**
     * Returns all the store groups of the current site.
     */
    static getAllStoreGroups() : Collection<StoreGroup>

    /**
     * Returns the store object with the specified id or null if store with this id does not exist in the site.
     * @param storeID
     */
    static getStore(storeID : string) : Store | null
    /**
     * Returns the store group with the specified id or null if the store group with this id does not exist in the current site.
     * @param storeGroupID
     */
    static getStoreGroup(storeGroupID : string) : StoreGroup | null

    /**
     * Search for stores based on geo-coordinates.
     * @param latitude
     * @param longitude
     * @param distanceUnit
     * @param maxDistance
     * @param querystring
     * @param args
     * @param */
    static searchStoresByCoordinates(latitude : number, longitude : number, distanceUnit : string, maxDistance : number, querystring : string, ...args : Object[]) : LinkedHashMap<Store, number>

    /**
     * Convenience method.
     * @param latitude
     * @param longitude
     * @param distanceUnit
     * @param maxDistance
     */
    static searchStoresByCoordinates(latitude : number, longitude : number, distanceUnit : string, maxDistance : number) : LinkedHashMap<Store, number>

    /**
     * Search for stores by country/postal code and optionally by additional filter criteria.
     * @param countryCode
     * @param postalCode
     * @param distanceUnit
     * @param maxDistance
     * @param querystring
     * @param args
     * @param */
    static searchStoresByPostalCode(countryCode : string, postalCode : string, distanceUnit : string, maxDistance : number, querystring : string, ...args : Object[]) : LinkedHashMap<Store, number>

    /**
     * Convenience method.
     * @param countryCode
     * @param postalCode
     * @param distanceUnit
     * @param maxDistance
     */
    static searchStoresByPostalCode(countryCode : string, postalCode : string, distanceUnit : string, maxDistance : number) : LinkedHashMap<Store, number>


}

export = StoreMgr;
