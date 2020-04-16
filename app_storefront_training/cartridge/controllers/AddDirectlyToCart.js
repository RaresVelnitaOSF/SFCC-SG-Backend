"use strict";

var guard = require("app_storefront_controllers/cartridge/scripts/guard");
var ISML = require("dw/template/ISML"); 
var request;

function addDirectlyToCart() {
    var productID = request.httpParameterMap.productID.stringValue;
    var response = require("app_storefront_controllers/cartridge/scripts/util/Response.js");

    var ProductMgr = require("dw/catalog/ProductMgr");
    var productAPI = ProductMgr.getProduct(productID);

    if (productAPI) {
        if (productAPI.getAvailabilityModel().inStock) {
            if (!productAPI.isMaster()){
                if (!productAPI.isProductSet()){
                    if (productAPI.isOnline()){
                        response.renderJSON({
                            success: true
                        });
                        return
                    } else {
                        response.renderJSON({
                            success: false,
                            errorMessage: 'Product is not Online'
                        });
                        return
                    }
                } else {
                    response.renderJSON({
                        success: false,
                        errorMessage: 'Product is Product set'
                    });
                    return
                }
            } else {
                response.renderJSON({
                    success: false,
                    errorMessage: 'Product is Master'
                });
                return
            }
        } else {
            response.renderJSON({
                success: false,
                errorMessage: 'Product is not in stock'
            });
            return;
        }
    } else {
        response.renderJSON({
            success: false,
            errorMessage: 'Product does not exist'
        });
        return;
    }
}

function getModal() {
    var message = request.httpParameterMap.message.stringValue;
    ISML.renderTemplate("search/searchDialog", {
        message: message
    }); 
};

exports.Start = guard.ensure(["get"], addDirectlyToCart);
exports.DisplayModal = guard.ensure(["get"], getModal);
