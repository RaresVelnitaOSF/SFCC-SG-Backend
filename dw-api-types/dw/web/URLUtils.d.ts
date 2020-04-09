import URL = require('./URL');
import URLAction = require('./URLAction');
import URLParameter = require('./URLParameter')


interface ITransform {
    scaleWidth?: number;
    scaleHeight?: number;
    scaleMode?: 'cut' | 'fit';

    imageX?: number;
    imageY?: number;
    imageURI?: string;

    cropX?: number;
    cropY?: number;
    cropWidth?: number;
    cropHeight?: number;

    format?: 'png' | 'jpg' | 'gif';
}



interface IURLUtilsContextCatalog {
    kind: 'IURLUtilsContextCatalog';
}
interface IURLUtilsContextLibrary {
    kind: 'IURLUtilsContextLibrary';
}
interface IURLUtilsContextSite {
    kind: 'IURLUtilsContextSite';
}

type IURLUtilsContext = IURLUtilsContextCatalog | IURLUtilsContextLibrary | IURLUtilsContextSite;

declare class URLUtils {
    private constructor();
    /**
     * ID for a catalog context. See staticURL() method.
     */
    static CONTEXT_CATALOG  :  IURLUtilsContextCatalog;
    /**
     * ID for a library context. See staticURL() method.
     */
    static CONTEXT_LIBRARY  :  IURLUtilsContextLibrary;
    /**
     * ID for a site context (= assigned cartridges). See staticURL() method.
     */
    static CONTEXT_SITE  :  IURLUtilsContextSite;

    /**
     * Return an absolute URL with protocol and host from the current request.
     */

    static abs(action : URLAction, ...params : URLParameter[]) : URL;
    /**
     * Return an absolute URL with protocol and host from current request.
     */
    static abs(action : string, ...namesAndParams : string[]) : URL;

    /**
     * Similar to absStatic( string, string, string ) this method returns a static URL for a resource in the current site.
     */
    static absImage(context : IURLUtilsContext, contextID : string | null, relPath : string, transform : ITransform) : URL;

    /**
     * Similar to absStatic( string ) this method returns a static URL for a resource in the current site.
     */
    static absImage(relPath : string, transform :ITransform) : URL;

    /**
     * Returns the absolute URL to the static location of the specified contex
     */
    static absStatic(context : IURLUtilsContext, contextID : string | null, relPath : string) : URL

    /**
     * The method returns a static URL for a resource in the current site.
     */
    static absStatic(relPath : string) : URL;

    /**
     * Return a URL, which can be used in combination with an Interaction Continue Node, to continue the user interface flow.
     */
    static continueURL() : URL;

    /**
     * Generates a hostname-only url if an alias is set, or an url to the Home-Show pipeline in the default format using the protocol of the incoming request.
     */
    static home() : URL;

    /**
     * Return an absolute URL with HTTP protocol.
     */
    static http(action : URLAction, ...params : URLParameter[]) : URL;

    /**
     * Return an absolute URL with HTTP protocol.
     */
    static http(action : string, ...namesAndParams : string[]) : URL;

    /**
     * Return a URL, which can be used in combination with an Interaction Continue Node, to continue the user interface flow.
     */
     static httpContinue() : URL;

    /**
     * Generates a hostname-only url if an alias is set, or an url to the Home-Show pipeline in the default format using the HTTP protocol.
     */
    static httpHome() : URL;

    /**
     * Similar to httpStatic( string, string, string ) this method returns a static URL for a resource in the current site.
     */
    static httpImage(context : IURLUtilsContext, contextID : string | null, relPath : string, transform : ITransform) : URL

    /**
     * Similar to httpStatic( string, string, string ) this method returns a static URL for a resource in the current site.
     */
    static httpImage(host : string, context : IURLUtilsContext, contextID : string | null, relPath : string, transform : ITransform) : URL

    /**
     * Similar to httpStatic( string ) this method returns a static URL for a resource in the current site.
     */
    static httpImage(relPath : string, transform : ITransform) : URL

    static httpImage(host : string, relPath : string, transform : ITransform) : URL;
    static https(action : URLAction, ...params : URLParameter[]) : URL;
    static https(action : string, ...namesAndParams : string[]) : URL;
    static httpsContinue() : URL;
    static httpsHome() : URL;
    static httpsImage(context : IURLUtilsContext, contextID : string | null, relPath : string, transform : ITransform) : URL;
    static httpsImage(host : string, context : IURLUtilsContext, contextID : string | null, relPath : string, transform :ITransform) : URL
    static httpsImage(relPath : string, transform : ITransform) : URL;
    static httpsImage(host : string, relPath : string, transform : ITransform) : URL;
    static httpsStatic(context : IURLUtilsContext, contextID : string | null, relPath : string) : URL;
    static httpsStatic(host : string, context : IURLUtilsContext, contextID : string | null, relPath : string) : URL;

    static httpsStatic(relPath : string) : URL;
    static httpsStatic(host : string, relPath : string) : URL;
    static httpStatic(context : IURLUtilsContext, contextID : string | null, relPath : string) : URL;
    static httpStatic(host : string, context : IURLUtilsContext, contextID : string | null, relPath : string) : URL;
    static httpStatic(relPath : string) : URL;
    static httpStatic(host : string, relPath : string) : URL;
    static imageURL(context : IURLUtilsContext, contextID : string | null, relPath : string, transform : ITransform) : URL;
    static imageURL(relPath : string, transform : ITransform) : URL;
    static sessionRedirect(host : string, url : URL) : URL;
    static sessionRedirectHttpOnly(host : string, url : URL) : URL;

    /**
     * Returns the relative URL to the static location of the specified context. The context can be either a specific catalog (URLUtils.CONTEXT_CATALOG), a content library (URLUtils.CONTEXT_LIBRARY) or a site (URLUtils.CONTEXT_SITE). Respectively either a URL to images in a catalog, a library or a site are created.
     *
     * The contextID parameter is optional and can be used with context either CONTEXT_CATALOG or CONTEXT_LIBRARY, where it specifies the ID of a specific catalog or a shared library respectively. If defined, the static URL for the specified catalog/shared library is returned. If not defined, the static URL for the current site catalog/site library is returned (or null if no site catalog/site library is defined).
     * For context CONTEXT_SITE, the contextID parameter is ignored and the static URL for the current site is returned.
     *
     * Parameter relPath can be defined to specify the relative path within the context-specific path.
     *
     * The method returns an relative URL with the same protocol as the current request.
     * 
     * @param context  Either CONTEXT_CATALOG, CONTEXT_LIBRARY or CONTEXT_SITE
     * @param contextID  Optional context id, currently only used to specify a catalog id or a shared library id
     * @param relPath  Relative path within the catalog or library or site
     */
    static staticURL(context : IURLUtilsContext, contextID : string | null, relPath : string) : URL;

    /**
     * The method returns a static URL for a resource in the current site. Site resources are actually located in the cartridges associated with the site. This resources are typically logos, button images, CSS files and JavaScript files. The method will transform the given relative path to include cache related information, which enables better cache control. The created URL is a relative URL.
     * 
     * _Note_: This method replaces the original mechanisms of using the webroot() method to construct a URL. The new method is better integrated into the overall cache management.
     * @param relPath the relative path of the file
     */
    static staticURL(relPath : string) : URL;

    /**
     *  Return a relative URL.
     * @param action URL action
     * @param params URL parameters
     */
    static url(action : URLAction, ...params : URLParameter[]) : URL;

    /**
     * Return a relative URL.
     * @param action the pipeline, which should be invoked, e.g.: 'Pipeline-StartNode'
     * @param namesAndParams  namesAndParams - several strings with name=value pairs , e.g.: 'pid', 'value1', 'cgid', value2'. 
     */
    static url(action : string, ...namesAndParams : string[]) : URL;

    /**
     * Return an absolute URL with HTTP protocol.
     */
    static http(action : string, ...namesAndParams : string[]) : URL
}

export = URLUtils;