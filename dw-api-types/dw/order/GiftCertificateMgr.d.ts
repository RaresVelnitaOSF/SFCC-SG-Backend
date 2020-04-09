import OrderPaymentInstrument = require('./OrderPaymentInstrument');
import GiftCertificate = require('./GiftCertificate');
import Status = require('../system/Status');

declare class GiftCertificateMgr {
    private constructor();

    /**
     * Creates a Gift Certificate.
     * @param amount 
     * @param code 
     */
    static createGiftCertificate(amount : number, code : string) : GiftCertificate

    /**
     * Creates a Gift Certificate.
     * @param amount 
     */
    static createGiftCertificate(amount : number) : GiftCertificate

    /**
     * Returns the Gift Certificate identified by the specified gift certificate code.
     * @param giftCertificateCode 
     */
    static getGiftCertificate(giftCertificateCode : string) : GiftCertificate

    /**
     * Returns the Gift Certificate identified by the specified gift certificate code.
     * @param giftCertificateCode 
     */
    static getGiftCertificateByCode(giftCertificateCode : string) : GiftCertificate

    /**
     * Returns the Gift Certificate identified by the specified merchant ID.
     * @param merchantID 
     */
    static getGiftCertificateByMerchantID(merchantID : string) : GiftCertificate

    /**
     * Redeems an amount from a Gift Certificate.
     * @param paymentInstrument 
     */
    static redeemGiftCertificate(paymentInstrument : OrderPaymentInstrument) : Status

}

export = GiftCertificateMgr;