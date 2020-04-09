import PrintWriter = require('../io/PrintWriter')
import Cookie = require('../web/Cookie')
import URLRedirect = require('../web/URLRedirect')
import URL = require('../web/URL')

declare class Response {
    private constructor();
    static readonly ACCESS_CONTROL_ALLOW_CREDENTIALS  :  string
    static readonly ACCESS_CONTROL_ALLOW_HEADERS  :  string
    static readonly ACCESS_CONTROL_ALLOW_METHODS  :  string
    static readonly ACCESS_CONTROL_ALLOW_ORIGIN  :  string
    static readonly ACCESS_CONTROL_EXPOSE_HEADERS  :  string
    static readonly ALLOW  :  string
    static readonly CONTENT_DISPOSITION  :  string
    static readonly CONTENT_LANGUAGE  :  string
    static readonly CONTENT_LOCATION  :  string
    static readonly CONTENT_MD5  :  string
    static readonly CONTENT_TYPE  :  string
    static readonly LOCATION  :  string
    static readonly PLATFORM_FOR_PRIVACY_PREFERENCES_PROJECT  :  string
    static readonly REFRESH  :  string
    static readonly RETRY_AFTER  :  string
    static readonly VARY  :  string
    static readonly X_FRAME_OPTIONS  :  string
    static readonly X_FRAME_OPTIONS_DENY_VALUE  :  string
    static readonly X_FRAME_OPTIONS_SAMEORIGIN_VALUE  :  string

    readonly writer  :  PrintWriter

    /**
     * Adds the specified cookie to the outgoing response. This method can be called multiple times to set more than one cookie. If a cookie with the same cookie name, domain and path is set multiple times for the same response, only the last set cookie with this name is sent to the client. This method can be used to set, update or delete cookies at the client. If the cookie doesn't exist at the client, it is set initially. If a cookie with the same name, domain and path already exists at the client, it is updated. A cookie can be deleted at the client by submitting a cookie with the maxAge attribute set to 0 (see Cookie.setMaxAge() for more information).
     *
     * Example, how a cookie can be deleted at the client:

        ```
        var cookie : Cookie = new Cookie("SomeName", "Simple Value");

        cookie.setMaxAge(0);

        response.addHttpCookie(cookie);
        ```
     * @param cookie
     */
    addHttpCookie(cookie : Cookie) : void

    /**
     * Adds a response header with the given name and value. This method allows response headers to have multiple values.
     * @param name the name to use for the response header.
     * @param value the value to use.
     */
    addHttpHeader(name : string, value : string) : void

    /**
     * Checks whether the response message header has a field with the specified name.
     * @param name
     */
    containsHttpHeader(name : string) : boolean

    /**
     * Returns a print writer which can be used to print content directly to the response.
     */
    getWriter() : PrintWriter

    /**
     * Sends a temporary redirect response (HTTP status 302) to the client for the specified redirect location URL.
     * @param url
     * @param status - the status code for this redirect, must be 301, 302 or 307
     */
    redirect(url : URL, status? : number) : void

    /**
     * Sends a temporary redirect response (HTTP status 302) to the client for the specified redirect location URL. The target location must be a relative or an absolute URL.
     * @param location
     * @param status - the status code for this redirect, must be 301, 302 or 307
     */
    redirect(location : string, status? : number) : void

    /**
     * Sends a redirect response with the given status to the client for the specified redirect location URL.
     * @param redirect
     */
    redirect(redirect : URLRedirect) : void

    /**
     * Sets whether the output should be buffered or streamed directly to the client. By default, buffering is enabled. The mode can only be changed before anything has been written to the response. Switching buffering off and using streaming mode is recommended for sending large responses.
     * @param buffered  if true, buffering is used, if false the response will be streamed
     */
    setBuffered(buffered : boolean) : void

    /**
     * Sets the content type for this response. This method may only be called before any output is written to the response.
     * @param contentType the MIME type of the content, like "text/html", "application/json" etc.
     */
    setContentType(contentType : string) : void

    /**
     * Sets the cache expiration time for the response. The response will only be cached if caching was not disabled previously. By default, responses are not cached. This method can be called multiple times during request processing. If caching is enabled, the lowest expiration time, resulting from the invocations of the method becomes the cache expiration time. This is only used for HTTP requests. Streamed responses cannot be cached. This method is an alternative for setting the cache time using the <iscache> tag in ISML templates.
     * @param expires the expiration time in milliseconds since January 1, 1970, 00:00:00 GMT
     */
    setExpires(expires : number | Date) : void

    /**
     * Adds a response header with the given name and value. If one or more value(s) have already been set, the new value overwrites the previous one. The containsHttpHeader(String) method can be used to test for the presence of a header before setting its value.
     * @param name the name to use for the response header.
     * @param value the value to use.
     */
    setHttpHeader(name : string, value : string) : void

    /**
     * Sets the HTTP response code.
     * @param status
     */
    setStatus(status : number) : void

    /**
     * Marks the response as personalized with the given variant identifier. Commerce Cloud Digital identifies unique pages based on a combination of pricebook, promotion, sorting rule and A/B test segments, caches the different variants of the page, and then delivers the correct version to the user. If a page is personalized by means other than pricebook, promotion, sorting rule and A/B test, the page must not be cached, because the wrong variants of the page would be delivered to the user. For performance reasons, a page should only be marked as personalized if it really is. Otherwise, the performance can unnecessarily degrade.
     *
This method has the same effect as using `<iscache varyby="price_promotion" />` tag in an ISML template. Once the vary-by value was set, either using this method or by the <iscache> tag in a template, the entire response is treated as personalized.


     * @param varyBy the variation criteria, currently only "price_promotion" is supported, any other value has no effect
     */
    setVaryBy(varyBy : 'price_promotion') : void
}

export = Response
