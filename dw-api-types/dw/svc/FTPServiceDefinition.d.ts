import ServiceDefinition = require('./ServiceDefinition');

declare class FTPServiceDefinition extends ServiceDefinition {
    private constructor();

    /**
     * The status of whether the     isAutoDisconnectttt: any;
underlying FTP connection will be disconnected after the service call.
     */
    autoDisconnect  :  boolean

    /**
     * Returns the status of whether the underlying FTP connection will be disconnected after the service call.
     */
    isAutoDisconnect() : boolean

    /**
     *
     * @param b Sets the auto-disconnect flag.
     */
    setAutoDisconnect(b : boolean) : this

}

export = FTPServiceDefinition;
