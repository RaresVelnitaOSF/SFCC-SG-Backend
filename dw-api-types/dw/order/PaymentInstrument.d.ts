import EncryptedObject = require('../customer/EncryptedObject');
import CertificateRef = require('../crypto/CertificateRef');

import CustomAttributes = require('../object/CustomAttributes');

interface IPaymentInstrumentCustomAttributes extends CustomAttributes {}

declare class PaymentInstrument extends EncryptedObject<IPaymentInstrumentCustomAttributes> {
    static ENCRYPTION_ALGORITHM_RSA  :  string;
    static METHOD_BANK_TRANSFER  :  string;
    static METHOD_BML  :  string;
    static METHOD_CREDIT_CARD  :  string;
    static METHOD_GIFT_CERTIFICATE  :  string;

    bankAccountDriversLicense  :  string;
    bankAccountDriversLicenseStateCode  :  string;
    bankAccountHolder  :  string;
    bankAccountNumber  :  string;
    bankAccountNumberLastDigits  :  string;
    bankRoutingnumber  :  string;
    creditCardExpirationMonth  :  number;
    creditCardExpirationYear  :  number;
    creditCardExpired  :  boolean;
    creditCardHolder  :  string;
    creditCardIssueNumber  :  string;
    creditCardnumber  :  string;
    creditCardnumberLastDigits  :  string;
    creditCardToken  :  string;
    creditCardType  :  string;
    creditCardValidFromMonth  :  number;
    creditCardValidFromYear  :  number;
    giftCertificateCode  :  string;
    maskedBankAccountDriversLicense  :  string;
    maskedBankAccountNumber  :  string;
    maskedCreditCardNumber  :  string;
    maskedGiftCertificateCode  :  string;
    paymentMethod  :  string;
    permanentlyMasked  :  boolean;

    getBankAccountDriversLicense() : string;
    getBankAccountDriversLicenseLastDigits() : string;
    getBankAccountDriversLicenseLastDigits(count : number) : string;
    getBankAccountDriversLicenseStateCode() : string;
    getBankAccountHolder() : string;
    getBankAccountnumberLastDigits() : string;
    getBankAccountnumberLastDigits(count : number) : string;
    getBankRoutingnumber() : string;
    getCreditCardExpirationMonth() : number;
    getCreditCardExpirationYear() : number;
    getCreditCardHolder() : string;
    getCreditCardIssueNumber() : string;
    getCreditCardnumber() : string;
    getCreditCardnumberLastDigits() : string;
    getCreditCardnumberLastDigits(count : number) : string;
    getCreditCardToken() : string;
    getCreditCardType() : string;
    getCreditCardValidFromMonth() : number;
    getCreditCardValidFromYear() : number;
    getEncryptedBankAccountDriversLicense(algorithm : string, publicKey : string) : string;
    getEncryptedBankAccountnumber(algorithm : string, publicKey : string) : string;
    getEncryptedCreditCardnumber(algorithm : string, publicKey : CertificateRef) : string;
    getGiftCertificateCode() : string;
    getMaskedBankAccountDriversLicense() : string;
    getMaskedBankAccountDriversLicense(ignore : number) : string;
    getMaskedBankAccountnumber() : string;
    getMaskedBankAccountnumber(ignore : number) : string;
    getMaskedCreditCardNumber() : string;
    getMaskedCreditCardNumber(ignore : number) : string;
    getMaskedGiftCertificateCode() : string;
    getMaskedGiftCertificateCode(ignore : number) : string;
    getPaymentMethod() : string;
    isCreditCardExpired() : Boolean;
    isPermanentlyMasked() : Boolean;

    setBankAccountDriversLicense(license : string) : void;
    setBankAccountDriversLicenseStateCode(stateCode : string) : void;
    setBankAccountHolder(holder : string) : void;
    setBankAccountNumber(accountnumber : string) : void;
    setBankRoutingNumber(routingnumber : string) : void;
    setCreditCardExpirationMonth(aValue : number) : void;
    setCreditCardExpirationYear(aValue : number) : void;
    setCreditCardHolder(aValue : string) : void;
    setCreditCardIssueNumber(aValue : string) : void;
    setCreditCardNumber(aValue : string) : void;
    setCreditCardToken(token : string) : void;
    setCreditCardType(aValue : string) : void;
    setCreditCardValidFromMonth(aValue : number) : void;
    setCreditCardValidFromYear(aValue : number) : void;
    setGiftCertificateCode(giftCertificateCode : string) : void;

}

export = PaymentInstrument;
