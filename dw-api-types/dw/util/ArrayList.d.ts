import List = require('./List');
import Collection = require('./Collection');
import Iterator = require('./Iterator');

/**
 * The ArrayList class is a container for a list of objects.
 */
declare class ArrayList<T> extends List<T> {
    constructor();
    constructor(collection : Collection<T>);
    constructor(iterator : Iterator<T>);
    constructor(...values : T[]);

    /**
     * Returns a shallow copy of this array list.
     */
     clone() : ArrayList<T>
}

export = ArrayList;

