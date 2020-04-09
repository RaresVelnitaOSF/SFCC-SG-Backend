import CustomAttributes = require('../object/CustomAttributes')
import Geolocation = require('../util/Geolocation')
import Map = require('../util/Map')
import Cookies = require('../web/Cookies')
import HttpParameterMap = require('../web/HttpParameterMap')
import URL = require('../web/URL')
import PageMetaData = require('../web/PageMetaData')
import Session = require('./Session')
import Form = require('../web/Form')
import FormAction = require('../web/FormAction')


declare class Request {


    readonly clientId: string | null

    readonly custom: CustomAttributes
    readonly geolocation: Geolocation | null
    readonly httpCookies: Cookies | null
    readonly httpHeaders: Map<string, string>
    readonly httpHost: string | null
    readonly httpLocale: string | null
    readonly httpMethod: string
    /**
     * Returns the parameter map that contains the HTTP parameters for the current request.
     */
    readonly httpParameterMap: HttpParameterMap
    readonly httpParameters: Map<string, Array<string>>
    readonly httpPath: string
    readonly httpProtocol: string | null
    readonly httpQueryString: string | null
    readonly httpReferer: string | null
    readonly httpRemoteAddress: string | null
    readonly httpRequest: boolean
    readonly httpSecure: boolean
    readonly httpURL: URL
    readonly httpUserAgent: string | null
    readonly includeRequest: boolean
    readonly locale: string
    readonly pageMetaData: PageMetaData
    readonly requestID: string
    readonly session: Session
    readonly triggeredForm: Form
    readonly triggeredFormAction: FormAction
    readonly ocapiVersion: string | null

    /**
     * Returns the client id of the current OCAPI request. If this is not an OCAPI request 'null' is returned. For client ids owned by Commerce Cloud Digital an alias is returned.
     */
    getClientId(): string | null

    /**
     * Returns all of the custom attributes associated with the request. The attributes are stored for the life time of the request.
     */
    getCustom(): CustomAttributes

    /**
     * Returns the physical location for the current request, if available. The location is calculated based on the IP address of the request. Note, if the geolocation tracking feature is not enabled, this method always returns null.
     */
    getGeolocation(): Geolocation | null

    /**
     * Returns the Cookies object, which can be used to read cookies sent by the client. Use the method Response.addHttpCookie() to add a cookie to the outgoing response.
     */
    getHttpCookies(): Cookies | null

    /**
     * Returns a Map containing all HTTP header values.
     */
    getHttpHeaders(): Map<string, string>

    /**
     * Returns the host name or null if there is no host name.
     */
    getHttpHost(): string | null

    /**
     * Returns the locale or null if there is no associated locale.
     */
    getHttpLocale(): string | null
    /**
     * Returns the name of the HTTP method with which this request was made, for example, GET, POST, or PUT.
     */
    getHttpMethod(): string

    /**
     * Returns the parameter map that contains the HTTP parameters for the current request.
     */
    getHttpParameterMap(): HttpParameterMap

    /**
     * Returns a Map containing the raw HTTP parameters sent to the server. The Map contains name/value pairs. Each name is a String and each value is a String array.
     */
    getHttpParameters(): Map<string, Array<string>>

    /**
     * Returns the path.
     */
    getHttpPath(): string

    /**
     * Returns the HTTP protocol used for this request. Possible values are "http" or "https". If the current activity is not related to an HTTP request, for example, when the request is part of a job, this method returns null.
     */
    getHttpProtocol(): string | null

    /**
     * Returns the query string or null if there is no query string.
     */
    getHttpQueryString(): string | null

    /**
     * Returns the referer or null if there is no referer.
     */
    getHttpReferer(): string | null

    /**
     * Returns the remote address or null if no remote address is found.
     */
    getHttpRemoteAddress(): string | null

    /**
     * Returns the complete URL of the request which was received at the server. This URL does not include SEO optimizations.
     */
    getHttpURL(): URL

    /**
     * Returns the HTTP user agent or null if there is no user agent.
     */
    getHttpUserAgent(): string | null

    /**
     * Returns the locale of the current request. This locale is set by the system based on the information in the URL. It may be different from the locale returned by getHttpLocale(), which is the preferred locale sent by the user agent.
     */
    getLocale(): string

    /**
     * Returns the OCAPI version of the current request. If this is not an OCAPI request, 'null' is returned.
     */
    getOcapiVersion(): string | null

    /**
     * Returns the page meta data that are associated with the current request.
     */
    getPageMetaData(): PageMetaData

    /**
     * Returns the unique identifier of the current request. The unique id is helpful for debugging purpose, e.g. relate debug messages to a particular request.
     */
    getRequestID(): string

    /**
     * Returns the session associated with this request.
     */
    getSession(): Session

    /**
     * Returns the form that was submitted by the client if the request represents a form submission.
     */
    getTriggeredForm(): Form | null

    /**
     * Returns the form action that was triggered by the client if the request represents a form submission.
     */
    getTriggeredFormAction(): FormAction | null

    /**
     * Identifies if this request is an HTTP request. The method returns true, if the current processing is related to a HTTP request. For example during a job execution this flag is false.
     */
    isHttpRequest(): boolean

    /**
     * Returns whether the HTTP communication is secure, which basically means that the communication happens via https. If the current activity is not related to an HTTP request the method returns false.
     */
    isHttpSecure(): boolean

    /**
     * Returns true if the request represents a request for a remote include, false if it is a top-level request.
     */
    isIncludeRequest(): boolean

    /**
     * Sets the physical location for the current request and remembers the new value for the duration of the user session. So any subsequent calls to getGeolocation() will return this value
     * @param geoLocation the geolocation object to use
     */
    setGeolocation(geoLocation: Geolocation): void

    /**
     * ets the given locale for the request. The locale is only set if it is valid, if it is active and if it is allowed for the current site.
     * @param localeID the locale ID to be set, like 'en_US'
     */
    setLocale(localeID: string): boolean

}

export = Request
