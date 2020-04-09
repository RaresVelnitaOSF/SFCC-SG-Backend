import Service = require('./Service');
import ServiceCallback = require('./ServiceCallback');


/**
 * The LocalServiceRegistry is responsible for managing Service instances.
Typical usage involves several steps:

The service is defined in the Business Manager and configured with necessary credentials.
An instance of the service is created and configured in a script:
```
 var myFTPService = LocalServiceRegistry.createService("MyFTPService", {
     mockExec : function(svc:FTPService, params) {
         return [
             { "name": "file1", "timestamp": new Date(2011, 02, 21)},
             { "name": "file2", "timestamp": new Date(2012, 02, 21)},
             { "name": "file3", "timestamp": new Date(2013, 02, 21)}
         ];
     },
     createRequest: function(svc:FTPService, params) {
         svc.setOperation("list", "/");
     },
     parseResponse : function(svc:FTPService, listOutput) {
         var x : Array = [];
         var resp : Array = listOutput;
         for(var i = 0; i < resp.length; i++) {
             var f = resp[i];
             x.push( { "name": f['name'], "timestamp": f['timestamp'] } );
         }
         return x;
     }
 });
 ```
The service is called in order to perform the operation:
```
 var result : Result = myFTPService.call();
 if(result.status == 'OK') {
     // The result.object is the object returned by the 'after' callback.
 } else {
     // Handle the error. See result.error for more information.
 }
```

Unlike `ServiceRegistry`, the configured service is local to the current script call, so this deals directly with `Service` instances rather than the intermediate `ServiceDefinition`. This means that a cartridge-level initialization script is no longer needed.

See `ServiceCallback` for all the callback options, and individual Service classes for customization specific to a service type.
 */
declare class LocalServiceRegistry {
    protected constructor();

    /**
     * Constructs and configures a service with a callback.
     * @param serviceId Unique Service ID.
     * @param configObj Configuration callback. See `ServiceCallback` for a description of available callback methods.
     */
    //RESP, REQ, RESULT, SERVICE extends Service<REQ, RESULT>
    static createService<T, L, Q extends Service<T, L>>(serviceId : string, configObj : ServiceCallback<Q>) : Q
}

export = LocalServiceRegistry;
