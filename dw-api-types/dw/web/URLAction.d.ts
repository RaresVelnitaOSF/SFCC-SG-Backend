


declare class URLAction {
    private URLActionID : number;
    /**
     * Constructs an action for the current site and locale.
     */
    constructor(action : string);
    /**
     * Constructs an action for the specified site and the current locale.
     */
    constructor(action : string, siteName : string);
    /**
     * Constructs an action for the specified site and locale.
     */
    constructor(action : string, siteName : string, locale : string);
    /**
     * Constructs an URL action for the specified site, locale and hostname.
     */
    constructor(action : string, siteName : string, locale : string, hostName : string);

}

export = URLAction;