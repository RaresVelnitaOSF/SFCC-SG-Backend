import Set = require('./Set');
import Collection = require('./Collection');


declare class Map<K, V> {
    /**
     * Identifies if this map is empty.
     */
    public readonly empty  :  boolean;

    /**
     * Convenience variable, for an empty and immutable list.
     */
    static EMPTY_MAP : Map<any, any>;

    /**
     * The size of the map. This is a bean attribute method and supports the access to the collections length similar to a ECMA array, such as 'products.length'.
     */
    public readonly length  :  number;

    protected constructor();

    /**
     * Clears the map of all objects.
     */
    clear() : void;

    /**
     * dentifies if this map contains an element identfied by the specified key.
     * @param {K} key
     */
    containsKey(key : K) : boolean;

    /**
     * Identifies if this map contains an element identfied by the specified value.
     * @param {V} value
     */
    containsValue(value : V) : boolean;

    /**
     * Returns a set of the map's entries.
     */
    entrySet() : Set<V>;

    /**
     * Returns the object associated with the key or null.
     * @param {K} key
     */
    get(key : K) : V | null;

    /**
     * Returns the size of the map.
     */
    getLength() : number;

    /**
     * Identifies if this map is empty.
     */
    isEmpty() : boolean;

    /**
     * Returns a set of the map's keys.
     */
    keySet() : Set<K>;

    /**
     * Puts the specified value into the map using the specified key to identify it.
     * @param key
     * @param value
     */
    put(key : K, value : V) : V;

    /**
     * Copies all of the objects inside the specified map into this map.
     * @param other
     */
    putAll(other : Map<K, V>) : void;

    /**
     * Removes the object from the map that is identified by the key.
     * @param key
     */
    remove(key : K) : V;

    /**
     * Returns the size of the map.
     */
    size() : number;

    /**
     * Returns a collection of the values contained in this map.
     */
    values() : Collection<V>;
}

export = Map;
