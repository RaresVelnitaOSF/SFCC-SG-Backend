import URL = require('./URL');



declare class URLParameter {
    /**
     * Constructs the parameter using the specified name and value and endocded in the form "name=value".
     */
    constructor(aName : string, aValue : string);
    /**
     * Constructs the parameter using the specified name and value.
     */
    constructor(aName : string, aValue : string, encodeName : boolean);

}

export = URLParameter;