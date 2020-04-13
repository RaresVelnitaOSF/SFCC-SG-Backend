"use strict";

var guard = require("app_storefront_controllers/cartridge/scripts/guard");
var ISML = require("dw/template/ISML"); 
var request;

function start() {
    var categoryID = request.httpParameterMap.cgid.stringValue;

    if (categoryID) {
        var ProductSearchModel = require("dw/catalog/ProductSearchModel");
        var CatalogMgr = require("dw/catalog/CatalogMgr");
    
        var sortingRule = CatalogMgr.getSortingRule("price-low-to-high");
    
        var productSearchModel = new ProductSearchModel;
        productSearchModel.setCategoryID(categoryID);
        productSearchModel.setSortingRule(sortingRule);
    
        productSearchModel.search();
    
        var productsFound = productSearchModel.getProductSearchHits().asList(0, 4);
        
        ISML.renderTemplate(
            "productRecommendations", {
                productsFound : productsFound
            }
        );
    }
}

exports.Start = guard.ensure(["get"], start);
