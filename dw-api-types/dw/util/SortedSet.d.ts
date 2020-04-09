import Set = require('./Set');
import Collection = require('./Collection');
declare class SortedSet<T> extends Set<T> {
    /**
     * Constructor to create a new SortedSet.
     */
    constrtuctor()

    /**
     * Constructor to create a new SortedSet.
     * @param comparator
     */
    constrtuctor(comparator : Object)

    /**
     * Constructor for a new SortedSet.
     * @param collection
     */
    constrtuctor(collection : Collection<T>);

    /**
     * Returns a shallow copy of this set.
     */
    clone() : SortedSet<T>;

    /**
     * Returns the first (lowest) element currently in this sorted set.
     */
    first() : T

    /**
     * Returns a view of the portion of this sorted set whose elements are strictly less than toElement.
     * @param key
     */
    headSet(key : T) : SortedSet<T>

    /**
     * Returns the last (highest) element currently in this sorted set.
     */
    last() : T

    /**
     * Returns a view of the portion of this sorted set whose elements range from fromElement, inclusive, to toElement, exclusive.
     * @param from
     * @param to
     */
    subSet(from : T, to : T) : SortedSet<T>

    /**
     * Returns a view of the portion of this sorted set whose elements are greater than or equal to fromElement.
     * @param key
     */
    tailSet(key : T) : SortedSet<T>

}

export = SortedSet;
