import List = require('./List');


declare class Iterator<T> {
    /**
     * Convert the iterator into a list. After this conversion the iterator is empty and hasNext() will always return false. Note: This method should be used with care. For example a large database result is pulled into memory completely with this method and can cause an OutOfMemory situation.
     */
    asList() : List<T>;

    /**
     * Converts a sub-sequence within the iterator into a list. Note: This method should be used with care. For example a large database result is pulled into memory completely with this method and can cause an OutOfMemory situation.
     * @param start - the number of elements to iterate before adding elements to the sublist. Negative values are treated as 0.
     * @param size - the maximum number of elements to add to the sublist. Nonpositive values always result in empty list.
     */
    asList(start : number, size : number) : List<T>;
    /**
     * Indicates if there are more elements.
     */
    hasNext() : boolean;
    /**
     * Returns the next element from the Iterator.
     */
    next() : T;
}


export = Iterator;
