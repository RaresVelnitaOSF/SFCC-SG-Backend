
/**
 * Represents a URLRedirect in Commerce Cloud Digital.
 */
declare class URLRedirect {
    /**
     * The URL which was calculated to be the redirect URL. The Location parameter can be directly used as value for an redirect location.
     */
    readonly location  :  string

    /**
     * The corresponding status code for the redirect location.
     */
    readonly status  :  number

    /**
     * Returns the URL which was calculated to be the redirect URL.
     */
    getLocation() : string

    /**
     * Returns the corresponding status code for the redirect location.
     */
    getStatus() : number

    protected constructor();
}

export = URLRedirect