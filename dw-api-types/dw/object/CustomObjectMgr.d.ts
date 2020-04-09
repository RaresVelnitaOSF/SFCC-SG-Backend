import CustomObject = require('./CustomObject');
import ObjectTypeDefinition = require('./ObjectTypeDefinition');
import SeekableIterator = require('../util/SeekableIterator');
import Map = require('../util/Map');
import CustomAttributes = require('../object/CustomAttributes');

/**
 * Manager class which provides methods for creating, retrieving, deleting, and searching for custom objects.
To search for system objects, use SystemObjectMgr.
 */
declare class CustomObjectMgr {
    private constructor();

    /**
     * Returns a new custom object instance of the specified type, using the given key value.
     * @param type 
     * @param keyValue 
     */
    static createCustomObject<T extends CustomAttributes>(type : string, keyValue : string) : CustomObject<T>

    /**
     * Returns a new custom object instance of the specified type, using the given key value.
     * @param type 
     * @param keyValue 
     */
    static createCustomObject<T extends CustomAttributes>(type : string, keyValue : number) : CustomObject<T>

    /**
     * Returns the meta data for the given type.
     * @param type 
     */
    static describe(type : string) : ObjectTypeDefinition

    /**
     * Returns all custom objects of a specific type.
     * @param type 
     */
    static getAllCustomObjects<T extends CustomAttributes>(type : string) : SeekableIterator<CustomObject<T>>

    /**
     * Returns a custom object based on it's type and unique key.
     * @param type 
     * @param keyValue 
     */
    static getCustomObject<T extends CustomAttributes>(type : string, keyValue : string | number) : CustomObject<T> | null


    /**
     * Searches for a single custom object instance.
     * @param type 
     * @param querystring 
     * @param args 
     * @param */ 
    static queryCustomObject<T extends CustomAttributes>(type : string, querystring : string, ...args : Object[]) : CustomObject<T> | null

    /**
     * Searches for custom object instances.
     * @param type 
     * @param querystring 
     * @param sortstring 
     * @param args 
     * */ 
    static queryCustomObjects<T extends CustomAttributes>(type : string, querystring : string, sortstring : string, ...args : Object[]) : SeekableIterator<CustomObject<T>>

    /**
     * Searches for custom object instances.
     * @param type 
     * @param queryAttributes 
     * @param sortstring 
     */
    static queryCustomObjects<T extends CustomAttributes>(type : string, queryAttributes : Map<string, string>, sortstring : string) : SeekableIterator<CustomObject<T>>


    /**
     * Removes a given custom object.
     * @param object 
     */
    static remove<T extends CustomAttributes>(object : CustomObject<T>) : void

}

export = CustomObjectMgr;