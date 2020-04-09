

/**
 * Represents a URL in Commerce Cloud Digital.
 */
declare class URL {
    private constructor();
    /**
     * Makes the URL absolute and ensures that the protocol of the request is used or http in a mail context.
     */
    abs() : URL;
    /**
     * Append a request parameter to this URL.
     * @param {string} name
     * @param {string} value
     */
    append(name : string, value : string) : URL;

    /**
     * Appends, if applicable, a CSRF protection token to this URL.
     */
    appendCSRFTokenBM() : URL;

    /**
     * Updates the URL with the specified host name Note: This method is not applicable for static content or image transformation URLs.
     * @param {string} host
     */
    host(host : string) : URL;

    /**
     * Makes the URL absolute and ensures that the protocol http is used.
     */
    http() : URL;

    /**
     * Makes the URL absolute and ensures that the protocol https is used.
     */
    https() : URL;

    /**
     * Makes the URL relative.
     */
    relative() : URL;

    /**
     * Remove a request parameter from this URL.
     * @param {string} name
     */
    remove(name : string) : URL;

    /**
     * Updates the URL with the site host name Note: This method is not applicable for static content or image transformation URLs.
     */
    siteHost() : URL;

    /**
     * Return String representation of the URL.
     */
    toString() : string;
}

export = URL;
