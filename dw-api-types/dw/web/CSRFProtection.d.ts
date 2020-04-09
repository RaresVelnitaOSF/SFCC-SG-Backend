

declare class CSRFProtection {
    private constructor();

    /**
     * The system generated CSRF token name. Currently, this name is not user configurable. Must be used for validateRequest() to work
     */
    readonly tokenName  :  string

    /**
     * Constructs a new unique CSRF token for this session.
     */
    static generateToken() : string

    /**
     * Returns the system generated CSRF token name.
     */
    static getTokenName() : string

    /**
     * Verifies that a client request contains a valid CSRF token, and that the token has not expired.
     */
    static validateRequest() : boolean

}

export = CSRFProtection;