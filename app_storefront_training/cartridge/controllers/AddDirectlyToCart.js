"use strict";

var guard = require("app_storefront_controllers/cartridge/scripts/guard");
var ISML = require("dw/template/ISML"); 
var request;

function addDirectlyToCart() {
    var productID = request.httpParameterMap.productID.stringValue;
    var response = require("app_storefront_controllers/cartridge/scripts/util/Response.js");

    var ProductMgr = require("dw/catalog/ProductMgr");
    var productAPI = ProductMgr.getProduct(productID);

    if (!productAPI) {
        response.renderJSON({
            success: false,
            errorMessage: 'Product does not exist'
        });
        return;
    };
    if (!productAPI.getAvailabilityModel().inStock) {
        response.renderJSON({
            success: false,
            errorMessage: 'Product is not in stock'
        });
        return;
    };
    if (productAPI.isMaster()){
        response.renderJSON({
            success: false,
            errorMessage: 'Product is Master'
        });
        return
    };
    if (productAPI.isProductSet()){
        response.renderJSON({
            success: false,
            errorMessage: 'Product is Product set'
        });
        return
    };
    if (!productAPI.isOnline()){
        response.renderJSON({
            success: false,
            errorMessage: 'Product is not Online'
        });
        return
    };
    response.renderJSON({
        success: true
    });
    return
}

function getModal() {
    var message = request.httpParameterMap.message.stringValue;
    ISML.renderTemplate("search/searchDialog", {
        message: message
    }); 
};

exports.Start = guard.ensure(["get"], addDirectlyToCart);
exports.DisplayModal = guard.ensure(["get"], getModal);
