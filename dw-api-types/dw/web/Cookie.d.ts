declare class Cookie {
    /**
     * Default name for cookies with empty strings.
     */
    static EMPTYNAME: string

    /**
     * The comment associated with the cookie.
     */
    comment  :  string

    /**
     * The domain associated with the cookie.
     */
    domain  :  string

    /**
     * The maximum age of the cookie, specified in seconds. By default, -1 indicating the cookie will persist until client shutdown.
     */
    maxAge  :  number

    /**
     * The cookie's name.
     */
    readonly name  :  string

    /**
     * The path for the cookie.
     */
    path  :  string

    /**
     * Identifies if the cookie is secure.
     */
    secure  :  boolean

    /**
     * The cookie's value.
     */
    value  :  string

    /**
     * The version for the cookie. 0 means original Netscape cookie and 1 means RFC 2109 compliant cookie.
     */
    version  :  number

    constructor(name : string, value : string)

    /**
     * Returns the comment associated with the cookie.
     */
    getComment() : string

    /**
     * Returns the domain associated with the cookie.
     */
    getDomain() : string

    /**
     * Returns the maximum age of the cookie, specified in seconds. By default, -1 indicating the cookie will persist until client shutdown.
     */
    getMaxAge() : number

    /**
     * Returns the cookie's name.
     */
    getName() : string

    /**
     * Returns the path for the cookie.
     */
    getPath() : string

    /**
     * Identifies if the cookie is secure.
     */
    getSecure() : boolean

    /**
     * Returns the cookie's value.
     */
    getValue() : string

    /**
     * Returns the version for the cookie. 0 means original Netscape cookie and 1 means RFC 2109 compliant cookie.
     */
    getVersion() : number

    /**
     * Sets the comment associated with the cookie. Setting a comment automatically changes the cookie to be a RFC 2109 (set-cookie2) compliant cookie, because comments are only supported with RFC cookies and not with Netscapes original cookie.
     * @param comment the comment associated with the cookie.
     */
    setComment(comment : string) : void

    /**
     * Sets the domain associated with the cookie.
     * @param domain the domain associated with the cookie.
     */
    setDomain(domain : string) : void
    /**
     * Sets the maximum age of the cookie in seconds. A positive value indicates that the cookie will expire after that many seconds have passed. Note that the value is the maximum age when the cookie will expire, not the cookie's current age. A negative value means that the cookie is not stored persistently and will be deleted when the client exits. A zero value causes the cookie to be deleted.
     * @param age an integer specifying the maximum age of the cookie in seconds; if negative, means the cookie is not stored; if zero, deletes the cookie
     */
    setMaxAge(age : number) : void

    /**
     * Sets the path for the cookie.
     * @param path  the path for the cookie.
     */
    setPath(path : string) : void

    /**
     * Sets the secure state for the cookie.
     * @param secure sets secure state for the cookie.
     */
    setSecure(secure : boolean) : void

    /**
     * Sets the cookie's value.
     * @param value the value to set in the cookie.
     */
    setValue(value : string) : void

    /**
     * Sets the version for the cookie. 0 means original Netscape cookie and 1 means RFC 2109 compliant cookie. The default is 0.
     * @param version the version for the cookie.
     */
    setVersion(version : number) : void
}

export = Cookie
