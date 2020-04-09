import Collection = require('./Collection');


declare class List<T> extends Collection<T> {
    /**
     * Convenience variable, for an empty and immutable list.
     */
    static EMPTY_LIST : List<any>;

    protected constructor();


    /**
     * Adds the specified object into the list at the specified index.
     * @param index 
     * @param value 
     */
    addAt(index : number, value : T) : void;

    /**
     * Creates and returns a new List that is the result of concatenating this list with each of the specified values.
     * @param values 
     */
    concat(...values : T[]) : List<T>;

    /**
     * Replaces all of the elements in the list with the given object.
     * @param obj 
     */
    fill(obj : T) : void;

    /**
     * Returns the object at the specified index.
     * @param index 
     */
    get(index : number) : T;

    /**
     * Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element.
     * @param value 
     */
    indexOf(value : T) : number;

    /**
     * Converts all elements of the list to a string by calling the toString() method and then concatenates them together, with a comma between elements.
     */
    join(separator? : string) : string;

    /**
     * Returns the index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element.
     * @param value 
     */
    lastIndexOf(value : T) : number;

    /**
     * Removes and returns the last element from the list.
     */
    pop() : T;

    /**
     * Appends the specified values to the end of the list in order.
     * @param values 
     */
    push(...values : T[]) : number;

    /**
     * Removes the object at the specified index.
     * @param index 
     */
    removeAt(index : number) : T;

    /**
     * Replaces all occurrences of oldValue with newValue.
     * @param oldValue 
     * @param newValue 
     */
    replaceAll(oldValue : T, newValue : T) : boolean;

    /**
     * Reverses the order of the elements in the list.
     */
    reverse() : void;

    /**
     * Rotates the elements in the list by the specified distance.
     * @param distance 
     */
    rotate(distance : number) : void;

    /**
     * Replaces the object at the specified index in this list with the specified object.
     * @param index 
     * @param value 
     */
    set(index : number, value : T) : T;

    /**
     * Removes and returns the first element of the list.
     */
    shift() : T;

    /**
     * Randomly permutes the elements in the list.
     */
    shuffle() : void;

    /**
     * Returns the size of this list.
     */
    size() : number;

    /**
     * Returns a slice, or sublist, of this list.
     * @param from 
     */
    slice(from : number, to? : number) : List<T>;

    /**
     * Sorts the elements of the list based on their natural order.
     */
    sort(comparator? : Object) : void;

    /**
     * Returns a list containing the elements in this list identified by the specified arguments.
     * @param from 
     * @param to 
     */
    subList(from : number, to : number) : List<T>;

    /**
     * Swaps the elements at the specified positions in the list.
     * @param i 
     * @param j 
     */
    swap(i : number, j : number) : void;

    /**
     * Inserts values at the beginning of the list.
     * @param values 
     */
    unshift(...values : T[]) : number

}

export = List;
