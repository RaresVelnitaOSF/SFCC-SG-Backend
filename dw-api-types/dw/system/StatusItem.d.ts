import List = require('../util/List');
import Map = require('../util/Map');

/**
 * A StatusItem holds all the status information. Multi StatusItems are bundled together into a Status.
 */
declare class  StatusItem {
    /**
     * The status code is the unique identifier for the message and can be used by client programs to check for a specific status and to generate a localized message.
     */
    code  :  string;

    /**
     * The optional details for this StatusItem.
     */
    
    readonly details  :  Map<string, string>;

    /**
     * Returns whether this Status Item represents and error.
     */
    readonly error  :  boolean;

    /**
     * The default human readable message for this Status. Note: Custom code and client programs must not use this message to identify a specific status. The getCode() must be used for that purpose. The actual message can change from release to release.
     */
    message  :  string;

    /**
     * The parameters to construct a custom message.
     */
    parameters  :  List<string>;

    /**
     * The status.
     */
    status  :  number;

    /**
     * Constructs a new OK StatusItem.
     */
    constructor();

    /**
     * Constructs a new StatusItem with the given status.
     * @param status 
     */
    constructor(status : number);

    /**
     * Constructs a new StatusItem with the given status and code.
     * @param status 
     * @param code 
     */
    constructor(status : number, code : string);

    /**
     * Constructs a new StatusItem with the given values.
     * @param status 
     * @param code 
     * @param message 
     * @param parameters 
     */
    constructor(status : number, code : string, message : string, ...parameters : string[]);

    /**
     * Add an additional detail to this StatusItem.
     * @param key 
     * @param value 
     */
    addDetail(key : string, value : Object) : void;

    /**
     * The status code is the unique identifier for the message and can be used by client programs to check for a specific status and to generate a localized message.
     */
    getCode() : string;

    /**
     * Returns the optional details for this StatusItem.
     */
    getDetails() : Map<string, string>;

    /**
     * Returns the default human readable message for this Status.
     */
    getMessage() : string;

    /**
     * Returns the parameters to construct a custom message.
     */
    getParameters() : List<string>;

    /**
     * Returns the status.
     */
    getStatus() : number;

    /**
     * Returns whether this Status Item represents and error.
     */
    isError() : boolean;

    /**
     * Method to set the status code.
     * @param code 
     */
    setCode(code : string) : void;

    /**
     * Sets the default human readable message for this Status.
     * @param message 
     */
    setMessage(message : string) : void;

    /**
     * Sets the parameters for a custom message.
     * @param parameters 
     */
    setParameters(...parameters : string[]) : void;

    /**
     * Set the status
     * @param status 
     */
    setStatus(status : number) : void;
}

export = StatusItem;