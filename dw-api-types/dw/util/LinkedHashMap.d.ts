import Map = require('./Map');

declare class LinkedHashMap<K, V> extends Map<K, V> {
    clone() : LinkedHashMap<K, V>;
}

export = LinkedHashMap;