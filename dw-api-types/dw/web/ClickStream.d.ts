import ClickStreamEntry = require('./ClickStreamEntry');
import List = require('../util/List');

declare class ClickStream {
    clicks  :  List<ClickStreamEntry>;
    first  :  ClickStreamEntry;
    last  :  ClickStreamEntry;
    partial  :  boolean;

    getClicks() : List<ClickStreamEntry>;
    getFirst() : ClickStreamEntry;
    getLast() : ClickStreamEntry;
    isPartial() : boolean;
}

export = ClickStream;
