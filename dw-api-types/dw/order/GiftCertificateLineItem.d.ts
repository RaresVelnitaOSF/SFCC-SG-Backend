import LineItem = require('./LineItem');
import ProductListItem = require('../customer/ProductListItem');
import Shipment = require('./Shipment');

declare class GiftCertificateLineItem extends LineItem {
    /**
     * The ID of the gift certificate that this line item was used to create. If this line item has not been used to create a Gift Certificate, this method returns null.
     */
    giftCertificateID  :  string | null

    /**
     * The message to include in the email of the person receiving the gift certificate line item.
     */
    message  :  string

    /**
     * The associated ProductListItem.
     */
    productListItem  :  ProductListItem

    /**
     * The email address of the person receiving the gift certificate line item.
     */
    recipientEmail  :  string

    /**
     * The name of the person receiving the gift certificate line item.
     */
    recipientName  :  string

    /**
     * The name of the person or organization that sent the gift certificate line item or null if undefined.
     */
    senderName  :  string | null

    /**
     * The associated Shipment.
     */
    shipment  :  Shipment

    private constructor();

    /**
     * Returns the ID of the gift certificate that this line item was used to create.
     */
    getGiftCertificateID() : string

    /**
     * Returns the message to include in the email of the person receiving the gift certificate line item.
     */
    getMessage() : string

    /**
     * Returns the associated ProductListItem.
     */
    getProductListItem() : ProductListItem

    /**
     * Returns the email address of the person receiving the gift certificate line item.
     */
    getRecipientEmail() : string

    /**
     * Returns the name of the person receiving the gift certificate line item.
     */
    getRecipientName() : string

    /**
     * Returns the name of the person or organization that sent the gift certificate line item or null if undefined.
     */
    getSenderName() : string | null

    /**
     * Returns the associated Shipment.
     */
    getShipment() : Shipment

    /**
     * Sets the ID of the gift certificate associated with this line item.
     * @param id  the ID of the gift certificate associated with this line item.
     */
    setGiftCertificateID(id : string) : void

    /**
     * Sets the message to include in the email of the person receiving the gift certificate line item.
     * @param message  the message to include in the email of the person receiving the gift certificate line item.
     */
    setMessage(message : string) : void

    /**
     * Sets the associated ProductListItem.
     * @param productListItem  the product list item to be associated
     */
    setProductListItem(productListItem : ProductListItem) : void

    /**
     * Sets the email address of the person receiving the gift certificate line item.
     * @param recipientEmail  the email address of the person receiving the gift certificate line item.
     */
    setRecipientEmail(recipientEmail : string) : void

    /**
     * Sets the name of the person receiving the gift certificate line item.
     * @param recipient the name of the person receiving the gift certificate line item.
     */
    setRecipientName(recipient : string) : void

    /**
     * Sets the name of the person or organization that sent the gift certificate line item.
     * @param sender  the name of the person or organization that sent the gift certificate line item
     */
    setSenderName(sender : string) : void

    /**
     * Associates the gift certificate line item with the specified shipment.
     * @param shipment The new shipment of the gift certificate line item
     */
    setShipment(shipment : Shipment) : void

}

export = GiftCertificateLineItem;
