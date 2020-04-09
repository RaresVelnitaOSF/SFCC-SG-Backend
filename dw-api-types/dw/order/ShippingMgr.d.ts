import ShippingMethod = require('./ShippingMethod');
import Collection = require('../util/Collection');
import LineItemCtnr = require('./LineItemCtnr');
import Money = require('../value/Money');
import Product = require('../catalog/Product');
import Shipment = require('./Shipment')
import ProductShippingModel = require('./ProductShippingModel');
import ShipmentShippingModel = require('./ShipmentShippingModel');


/**
 * Provides methods to access the shipping information.
 */
declare class ShippingMgr {
    private constructor();

    /**
     * The active shipping methods of the current site applicable to the session currency and current customer group.
     */
    readonly allShippingMethods  :  Collection<ShippingMethod>

    /**
     * The default shipping method of the current site applicable to the session currency. Does an additional check if there is a base method and if their currencies are the same. Returns NULL if the two currencies are different.
     */
    readonly defaultShippingMethod  :  ShippingMethod


    /**
     * Applies product and shipment-level shipping cost to the specified line item container.
     * @param lineItemCtnr 
     */
    static applyShippingCost(lineItemCtnr : LineItemCtnr<any>) : void

    /**
     * Returns the active shipping methods of the current site applicable to the session currency and current customer group.
     */
    static getAllShippingMethods() : Collection<ShippingMethod>

    /**
     * Returns the default shipping method of the current site applicable to the session currency.
     */
    static getDefaultShippingMethod() : ShippingMethod

    /**
     * Returns the shipping model for the specified product.
     * @param product 
     */
    static getProductShippingModel(product : Product) : ProductShippingModel

    /**
     * Returns the shipping model for the specified shipment.
     * @param shipment 
     */
    static getShipmentShippingModel(shipment : Shipment) : ShipmentShippingModel

    /**
     * Returns the shipping cost amount for the specified shipping method and the specified order value.
     * @param shippingMethod 
     * @param orderValue 
     */
    static getShippingCost(shippingMethod : ShippingMethod, orderValue : Money) : Money

}

export =  ShippingMgr;