declare class ClickStreamEntry {
    private constructor();

    /**
     * The host.
     */
    readonly host  :  string

    /**
     * The locale sent from the user agent.
     */
    readonly locale  :  string

    /**
     * The path.
     */
    readonly path  :  string

    /**
     * The name of the called pipeline. In most cases the name can be derived from the path, but not in all cases. If with URL rewritting a special landing page is defined for a DNS name, than the system internally might use a specific pipeline associated with this landing page.
     */
    readonly pipelineName  :  string

    /**
     * The query string.
     */
    readonly queryString  :  string

    /**
     * The referer.
     */
    readonly referer  :  string

    /**
     * The remote address.
     */
    readonly remoteAddress  :  string

    /**
     * The entry's timestamp.
     */
    readonly timestamp  :  number

    /**
     * The full URL for this click. The URL is returned as relative URL.
     */
    readonly url  :  string

    /**
     * The user agent.
     */
    readonly userAgent  :  string

    /**
     * Returns the host.
     */
    getHost() : string

    /**
     * Returns the locale sent from the user agent.
     */
    getLocale() : string

    /**
     * Returns a specific parameter value from the stored query string.
     * @param name 
     */
    getParameter(name : string) : string

    /**
     * Returns the path.
     */
    getPath() : string

    /**
     * Returns the name of the called pipeline.
     */
    getPipelineName() : string

    /**
     * Returns the query string.
     */
    getQueryString() : string

    /**
     * Returns the referer.
     */
    getReferer() : string

    /**
     * Returns the remote address.
     */
    getRemoteAddress() : string

    /**
     * Returns the entry's timestamp.
     */
    getTimestamp() : Number

    /**
     * Returns the full URL for this click.
     */
    getUrl() : string

    /**
     * Returns the user agent.
     */
    getUserAgent() : string
}

export = ClickStreamEntry;