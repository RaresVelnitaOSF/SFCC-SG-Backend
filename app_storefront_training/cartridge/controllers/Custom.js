"use strict";

var guard = require("app_storefront_controllers/cartridge/scripts/guard");
var ISML = require("dw/template/ISML"); 

function start() {
    var basketTotal = request.httpParameterMap.basketTotal.stringValue;
    var basketThresholdAmount = 200;
    
    if (basketTotal > 200){
        ISML.renderTemplate("customMessage", {
            basketThresholdAmount: basketThresholdAmount
        });      
    }
}

exports.Start = guard.ensure(["get"], start);
