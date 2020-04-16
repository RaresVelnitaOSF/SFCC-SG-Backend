"use strict";

var guard = require("app_storefront_controllers/cartridge/scripts/guard");
var ISML = require("dw/template/ISML"); 
var request;

function start() {
    var parameterMap = request.httpParameterMap.param.stringValue;

    if (parameterMap) {
        ISML.renderTemplate("notEmpty", {
            result: parameterMap
        });      
    } else {
        ISML.renderTemplate("empty");
    }
}

exports.Start = guard.ensure(["get"], start);
