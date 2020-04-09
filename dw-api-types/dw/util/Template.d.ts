import MimeEncodedText = require('../value/MimeEncodedText');
import Map = require('../util/Map');

/**
 * Reads an ISML template from the file system and renders it into a MimeEncodedText object. Optional substitution values can be passed to the isml template via the render(Map) method
 */
declare class Template {
    /**
     * Creates a new template.
     * @param templateName
     */
    constructor(templateName : string)

    /**
     * Creates a new template with the locale being set to the given localeID.
     * @param templateName
     * @param localeID
     */
    constructor(templateName : string, localeID : string)

    /**
     * Renders the template specified at instantiation time, without any substitution parameters.
     */
    render() : MimeEncodedText

    /**
     * Renders the template specified at instantiation time with the given substitution parameters.
     * @param params
     */
    render(params : Map<string, any>) : MimeEncodedText

    /**
     * Sets an optional localeID which is used instead of the current requests localeID.
     * @param localeID
     */
    setLocale(localeID : string) : Template


}

export = Template;
