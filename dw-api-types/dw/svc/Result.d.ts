
/**
 * Represents the result of a service call.
 */
declare class Result<T> {
    /**
     * Status indicating a successful service call.
     */
    static OK: string;
    /**
     * Status indicating a general service error.
     */
    static ERROR: string;
    /**
     * Status indicating the service is unavailable. This includes timeouts, rate limits, and remote server issues.
     */
    static SERVICE_UNAVAILABLE: string;
    /**
     * Constructs a new result instance.
     */
    constructor()
    /**
     * Returns the status of whether the service call was successful.
     */
    isOk(): boolean;
    /**
     * Returns the status. This is "OK" on success. Failure codes include "ERROR" and "SERVICE_UNAVAILABLE".
     */
    getStatus(): string;
    /**
     * Returns an error-specific code if applicable. For example, this is the HTTP response code for an
     * [HTTPService](https://info.demandware.com/DOC2/index.jsp?topic=%2Fcom.demandware.dochelp%2FDWAPI%2Fscriptapi%2Fhtml%2Fapi%2Fclass_dw_svc_HTTPService.html).
     */
    getError(): number;
    /**
     * Returns an error message on a non-OK status.
     */
    getErrorMessage(): string;
    /**
     * Returns an extra error message on failure (if any).
     */
    getMsg(): string;
    /**
     * Returns the actual object returned by the service when the status is OK.
     */
    getObject(): T;
    /**
     * Returns the status of whether the response is the result of a "mock" service call.
     */
    isMockResult(): boolean;
    /**
     * Returns a string representation of the result.
     */
    toString(): string;

    /**
     * An error-specific code if applicable. For example, this is the HTTP response code for an HTTPService.
     */
    readonly error  :  number

    /**
     * An error message on a non-OK status.
     */
    readonly errorMessage  :  string

    /**
     * The status of whether the response is the result of a "mock" service call.
     */
    readonly mockResult : boolean

    /**
     * An extra error message on failure (if any).
     */
    readonly msg : string

    /**
     * The actual object returned by the service when the status is OK.
     */
    readonly object  :  T

    /**
     * The status of whether the service call was successful.
     */
    readonly ok  :  boolean

    /**
     * The status. This is "OK" on success. Failure codes include "ERROR" and "SERVICE_UNAVAILABLE".
    If the status is "SERVICE_UNAVAILABLE", then the unavailableReason is guaranteed to be non-null.
     */
    readonly status  :  string

    /**
     * The reason the status is SERVICE_UNAVAILABLE.
     */
    readonly unavailableReason  :  string

}

export = Result;
