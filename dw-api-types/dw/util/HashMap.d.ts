
import Map = require('./Map')

declare class HashMap<K, V> extends Map<K, V> {
    clone() : HashMap<K, V>
    constructor()
}

export = HashMap
