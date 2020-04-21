"use strict";

function execute(parameters) {   
    var brandName = parameters.brand;
    // use ProductSearchModel with refinement for Brand attribute to search for products
    var ProductSearchModel = require("dw/catalog/ProductSearchModel");
    var productSearch = new ProductSearchModel;

    productSearch.setRefinementValues("brand", brandName);
    productSearch.search();

    var searchHitsList = productSearch.getProductSearchHits().asList();

    var productIDS = [];
    for (var i=0;i<searchHitsList.length;i++) {
        var productID = searchHitsList[i].productID;
        productIDS.push(productID);
    }

    // write XML file to assign the products to a catalog (storefront-catalog-m-en)
    var File = require("dw/io/File");
    var FileWriter = require("dw/io/FileWriter");
    var XMLStreamWriter = require("dw/io/XMLStreamWriter");

    var file = new File("/IMPEX/src/brands.xml");
    var fileWriter = new FileWriter(file, "UTF-8");
    var xsw = new XMLStreamWriter(fileWriter);

    xsw.writeStartDocument();
    xsw.writeStartElement("catalog");
    xsw.writeAttribute("xmlns", "http://www.demandware.com/xml/impex/catalog/2006-10-31");
    xsw.writeAttribute("catalog-id", "storefront-catalog-en");
    for (var i = 0; i < productIDS.length; i++) {
        xsw.writeStartElement("category-assignment");
        xsw.writeAttribute("category-id", "sortedByBrandJob");
        xsw.writeAttribute("product-id", productIDS[i]);
        xsw.writeEndElement();
    }
    xsw.writeEndElement();
    xsw.writeEndDocument();
    xsw.close();
    fileWriter.close();
}  
  
exports.execute = execute;  
