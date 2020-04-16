"use strict";

var guard = require("app_storefront_controllers/cartridge/scripts/guard");
var ISML = require("dw/template/ISML"); 

function displayWishlistModal() {
    ISML.renderTemplate("wishlistModal");
};

exports.WishlistModal = guard.ensure(["get"], displayWishlistModal);
