import PaymentInstrument = require('../order/PaymentInstrument');


declare class CustomerPaymentInstrument extends PaymentInstrument {
    bankAccountDriversLicense  :  string;
    bankAccountNumber  :  string;
    creditCardNumber  :  string;
    getBankAccountDriversLicense() : string;
    getBankAccountNumber() : string;
    getCreditCardNumber() : string;
}

export = CustomerPaymentInstrument;
