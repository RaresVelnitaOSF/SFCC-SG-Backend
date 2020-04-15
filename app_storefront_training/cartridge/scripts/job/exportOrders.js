"use strict";

var Order = require("dw/order/Order");
var OrderMgr = require("dw/order/OrderMgr");

/**
* @param {order} order - Order instance retrieved with OrderMgr
* @returns {object} Order Object populated with required details 
*/
function getOrderDetails(order) {
    var orderDetails = {
        orderNumber : order.currentOrderNo,
        customerName : order.customerName,
        customerNumber : order.customerNo,
        customerEmail : order.customerEmail,
        orderDate : order.getCreationDate(),
        orderTotalPrice : order.getTotalGrossPrice(),
        orderIDsOfProductsBought: getProductIDs(order)
    };
    // set the Orders Status as exported
    var Transaction = require("dw/system/Transaction");
        
    Transaction.wrap(function () {
        order.setExportStatus(order.EXPORT_STATUS_EXPORTED);
    });
    return orderDetails;
}

/**
* @param {order} order - Order instance retrieved with OrderMgr
* @returns {array} Array of Product IDs  
*/

function getProductIDs(order) {
    var productArray = order.getAllProductLineItems().iterator().asList();
    var productIDs = [];
    for (var i = 0; i < productArray.length; i++) {
        var productID = productArray[i].productID;
        productIDs.push(productID);
    }
    return productIDs;
}


function execute(parameters) {  
    // get Folder destination from Job Parameters 
    var folderDestination = parameters.folderDestination;

    // Get all orders that are completed and that are not exported. Create a list and close the SeekableIterator
    var notExportedOrders = OrderMgr.searchOrders("exportStatus={0} AND status={1}", null, Order.EXPORT_STATUS_READY, Order.ORDER_STATUS_NEW);
    var listOfOrders = notExportedOrders.asList();
    notExportedOrders.close();

    /* take all orders that are not exported and write an XML for each of them containing: order number, customer name, customer number - if available, customer email,
    * date created, total amount, list of payment methods, list of ids of products bought. */

    var File = require("dw/io/File");
    var FileWriter = require("dw/io/FileWriter");
    var XMLStreamWriter = require("dw/io/XMLStreamWriter");
   
    var file = new File("/IMPEX/src/"+folderDestination+"/orders.xml");
    var fileWriter = new FileWriter(file, "UTF-8");
    var xsw = new XMLStreamWriter(fileWriter);

    // write No orders to export, for user to see
    if (listOfOrders.length == 0) {
        xsw.writeStartDocument();
        xsw.writeStartElement("orders");
        xsw.writeCharacters("No orders that are not exported available");
        xsw.writeEndElement();
        xsw.writeEndDocument();
        xsw.close();
        fileWriter.close();
    } else {
        var XMLContent = [];

        for (var i = 0; i < listOfOrders.length; i++) {
            var orderAPI = listOfOrders[i];
            var orderWithDetasils = getOrderDetails(orderAPI);
            XMLContent.push(orderWithDetasils);
        }
    
        xsw.writeStartDocument();
        xsw.writeStartElement("orders");
        xsw.writeAttribute("xmlns", "http://www.demandware.com/xml/impex/order/2006-10-31");
        for (var i = 0; i < XMLContent.length; i++) {
            var order = XMLContent[i];
            xsw.writeStartElement("order");
            xsw.writeAttribute("order-no", order.orderNumber);
            xsw.writeStartElement("order-date");
            xsw.writeCharacters(order.orderDate);
            xsw.writeEndElement();
    
            xsw.writeStartElement("customer");
            xsw.writeStartElement("customer-no");
            xsw.writeCharacters(order.customerNumber);
            xsw.writeEndElement();
            xsw.writeStartElement("customer-name");
            xsw.writeCharacters(order.customerName);
            xsw.writeEndElement();
            xsw.writeStartElement("customer-email");
            xsw.writeCharacters(order.customerEmail);
            xsw.writeEndElement();
            xsw.writeEndElement();
    
            xsw.writeStartElement("product-lineitems");
            for (var j = 0; j < order.orderIDsOfProductsBought.length; j++) {
                var productID = order.orderIDsOfProductsBought[j];
                xsw.writeStartElement("product-lineitem");
                xsw.writeStartElement("product-id");
                xsw.writeCharacters(productID);
                xsw.writeEndElement();
                xsw.writeEndElement();
            }
            xsw.writeEndElement();
    
            xsw.writeStartElement("payments");
            xsw.writeStartElement("payment");
            xsw.writeStartElement("amount");
            xsw.writeCharacters(order.orderTotalPrice);
            xsw.writeEndElement();
            xsw.writeEndElement();
            xsw.writeEndElement();  
            xsw.writeEndElement();
        }
        xsw.writeEndElement();
        xsw.writeEndDocument();
        xsw.close();
        fileWriter.close();
    }
}  
  
exports.execute = execute;  
