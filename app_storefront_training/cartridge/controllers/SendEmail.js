"use strict";

var guard = require("app_storefront_controllers/cartridge/scripts/guard");
var ISML = require("dw/template/ISML");

var request;


function sendWishlistEmail() {
    var productID = request.httpParameterMap.productID.stringValue;
    var Resources = require("dw/web/Resource");
    var ProductMgr = require("dw/catalog/ProductMgr");
    var EmailModel = require("app_storefront_controllers/cartridge/scripts/models/EmailModel");
    var customerEmail = request.httpParameterMap.customerEmail.stringValue;

    var site = require("dw/system/Site");
    var sender = site.getCurrent().getCustomPreferenceValue("customerServiceEmail");

    var apiProduct = ProductMgr.getProduct(productID);


    EmailModel.sendMail({
        from: sender,
        template: 'mail/product',
        recipient: customerEmail,
        subject: Resources.msg('wishlist.email.subject', 'messages', null),
        context: {
            Product: apiProduct
        }
    });
}

exports.SendWishlistEmail = guard.ensure(["get"], sendWishlistEmail);
