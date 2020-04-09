import Collection = require('./Collection');
import Set = require('../util/Set');
/**
 * The class LinkedHashSet implements a hash set with a guaranteed iteration order. The elements are iterated in the order they have been added to the HashSet.
 */
declare class LinkedHashSet<T> extends Set<T>{
    /**
     * Constructs a new LinkHashSet.
     */
    constructor()

    /**
     * Constructor for a new LinkedHashSet.
     * @param collection
     */
    constructor(collection : Collection<T>)

    /**
     * Returns a shallow copy of this set.
     */
    clone() : LinkedHashSet<T>
}

export = LinkedHashSet;
