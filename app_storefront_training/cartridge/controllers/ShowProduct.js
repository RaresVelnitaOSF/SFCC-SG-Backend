'use strict';

var ISML = require('dw/template/ISML');
var guard = require('app_storefront_controllers/cartridge/scripts/guard'); 
var ProductMgr = require('dw/catalog/ProductMgr');
var Resources = require('dw/web/Resource');

function start() { 
    var pid = request.httpParameterMap.pid.stringValue;
    var product = ProductMgr.getProduct(pid);
    
    if (product != null) {
        ISML.renderTemplate('productfound', {
            myProduct:product
        }); 
    } else {
        var errorMsg= Resources.msgf('productnotfoundMsg', 'myBundle', null, pid);
        ISML.renderTemplate('productnotfound', {
            Parameter:pid, message:errorMsg
        });
    }
}

exports.Start = guard.ensure(['get'], start);
