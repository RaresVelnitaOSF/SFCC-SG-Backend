

declare class ISML {
    private constructor();

    /**
     * Renders an ISML template and writes the output to the current response.
     * @param template 
     */
    static renderTemplate(template : string) : void

    /**
     * Renders an ISML template and writes the output to the current response.
     * @param template 
     * @param templateArgs 
     */
    static renderTemplate(template : string, templateArgs : object) : void
}

export = ISML;