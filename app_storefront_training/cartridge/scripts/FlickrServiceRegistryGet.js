"use strict";

/**
 * Function responsible for getting an dw.svc.ServiceRegistry instance using the ID of the Service that was created in BM
 * @param serviceID{String}: ID of the webservice that was configured in BM
 * @param serviceCallback{Dictionary}: Dictionary containing the mandatory methods for the service (createRequest and parse)
 * @returns
 */
function get(serviceID, serviceCallback) {
    var LocalServiceRegistry = require("dw/svc/LocalServiceRegistry");
    var service;
    //If the service was not configured and callback was sent
    if (serviceCallback) {
        service = LocalServiceRegistry.createService(serviceID, serviceCallback);
    }

    return service;
}

exports.Get = get;
