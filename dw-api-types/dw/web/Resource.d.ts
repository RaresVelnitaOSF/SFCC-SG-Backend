
declare class Resource {
    private constructor();

    /**
     * Returns the message from the default properties resource bundle (base name "message") corresponding to the specified key and the request locale.
     * @param key 
     */
    static msg(key : string) : string;

    /**
     * Returns the message from the default properties resource bundle (base name "message") corresponding to the specified key and the request locale.
     * @param key 
     * @param defaultMessage 
     */
    static msg(key : string, defaultMessage : string) : string;

    /**
     * Returns the message from the specified properties resource bundle.
     * @param key 
     * @param bundleName 
     * @param defaultMessage 
     */
    static msg(key : string, bundleName : string, defaultMessage : string | null) : string;

    /**
     * Returns the message from the specified properties resource bundle, with the provided arguments substituted for the message argument placeholders (specified using the Java MessageFormat approach).
     * @param key 
     * @param bundleName 
     * @param defaultMessage 
     * @param args 
     */
    static msgf(key : string, bundleName : string, defaultMessage : string | null, ...args : Object[]) : string;
}

export = Resource



