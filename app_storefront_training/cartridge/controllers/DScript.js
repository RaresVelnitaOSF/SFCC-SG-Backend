"use strict";

var guard = require("app_storefront_controllers/cartridge/scripts/guard");
var ISML = require("dw/template/ISML"); 
var CustomerMgr = require("dw/customer/CustomerMgr");

function start() { 
    var customerCount = CustomerMgr.getRegisteredCustomerCount();
    ISML.renderTemplate(
        "dscript.isml", {
            customerCount : customerCount
        }
    );
}

exports.Start = guard.ensure(["get"], start); 
