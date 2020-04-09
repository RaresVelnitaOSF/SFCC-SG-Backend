import Service = require('./Service');
import FTPClient = require('../net/FTPClient');


declare class FTPService<R, T> extends Service<R, T> {
    public readonly client : FTPClient;// | SFTPClient;

    /**
     * Returns the underlying client object.
     */
    getClient() : FTPClient;// | SFTPClient;

    /**
     * Sets a single operation to perform during the execute phase of the service.

     The given arguments make up a method name and arguments on the underlying getClient() object. This method will be invoked during execution, with the result passed into the callback's parseResponse method.

    This is required unless the callback defines an execute method.
     * @param name Method name.
     * @param args Method arguments
     * @param
     * */
    setOperation(name : string, ...args : any[]) : this


}

export = FTPService;
