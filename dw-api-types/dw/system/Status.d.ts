import List = require('../util/List');
import Map = require('../util/Map');
import StatusItem = require('./StatusItem');

/**
 * A Status is used for communicating an API status code back to a client. A status consists of multiple StatusItem. Most often a Status contains only one StatusItem. For convenience, a message with parameters is formatted using standard formatting patterns. If you want to display locale-specific messages in your application, you should use the Status.getCode() as key for a resource bundle.
 */
declare class Status {
    /**
     * The status code either of the first ERROR StatusItem or when there is no ERROR StatusITEM, the first StatusItem in the overall list. The status code is the unique identifier for the message and can be used by client programs to check for a specific status and to generate a localized message.
     */
    readonly code  :  string;

    /**
     * The details either of the first ERROR StatusItem or when there is no ERROR StatusItem, the first StatusItem in the overall list.
     */
    readonly details  :  Map<string, string>;

    /**
     * Checks if the status is an ERROR. The Status is an ERROR if one of the contained StatusItems is an ERROR.
     */
    readonly error  :  boolean;

    /**
     * status value to indicate an ERROR status
     */
    static ERROR  :  number;

    /**
     * All status items.
     */
    readonly items  :  List<StatusItem>;

    /**
     * The message either of the first ERROR StatusItem or when there is no ERROR StatusItem, the first StatusItem in the overall list. Note: Custom code and client programs must not use this message to identify a specific status. The getCode() must be used for that purpose. The actual message can change from release to release.
     */
    readonly message  :  string;
    /**
     * status value to indicate an OK status
     */
    static OK  :  number;

    /**
     * The parameters either of the first ERROR StatusItem or when there is no ERROR StatusItem, the first StatusItem in the overall list.
     */
    readonly parameters  :  List<string>;

    /**
     * The overall status. If all StatusItems are OK, the method returns OK. If one StatusItem is an ERROR it returns ERROR.
     */
    readonly status  :  number;

    /**
     * Creates a Status object with no StatusItems.
     */
    constructor();

    /**
     * Creates a Status with a single StatusItem.
     * @param status 
     */
    constructor(status : number);

    /**
     * Creates a Status with a single StatusItem.
     * @param status 
     * @param code 
     */
    constructor(status : number, code : string);

    /**
     * Creates a Status with a single StatusItem.
     * @param status 
     * @param code 
     * @param message 
     * @param parameters 
     */
    constructor(status : number, code : string, message : string, ...parameters : string[]);

    /**
     * Add detail information for the given key of the first ERROR StatusItem or when there is no ERROR StatusItem, the first StatusItem in the overall list.
     * @param key 
     * @param value 
     */
    addDetail(key : string, value : string) : void;

    /**
     * Adds an additional status item to this status instance.
     * @param item 
     */
    addItem(item : StatusItem) : void;

    /**
     * Returns the status code either of the first ERROR StatusItem or when there is no ERROR StatusITEM, the first StatusItem in the overall list.
     */
    getCode() : string;

    /**
     * Returns the detail value for the given key of the first ERROR StatusItem or when there is no ERROR StatusItem, the first StatusItem in the overall list.
     * @param key 
     */
    getDetail(key : string) : string;

    /**
     * Returns the details either of the first ERROR StatusItem or when there is no ERROR StatusItem, the first StatusItem in the overall list.
     */
    getDetails() :  Map<string, string>;

    /**
     * Returns all status items.
     */
    getItems() : List<StatusItem>;

    /**
     * Returns the message either of the first ERROR StatusItem or when there is no ERROR StatusItem, the first StatusItem in the overall list.
     */
    getMessage() : string;

    /**
     * Returns the parameters either of the first ERROR StatusItem or when there is no ERROR StatusItem, the first StatusItem in the overall list.
     */
    getParameters() : List<string>;

    /**
     * Returns the overall status.
     */
    getStatus() : number;

    /**
     * Checks if the status is an ERROR.
     */
    isError() : boolean;
}

export = Status;