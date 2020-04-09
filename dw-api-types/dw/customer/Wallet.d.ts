import CustomerPaymentInstrument = require('./CustomerPaymentInstrument');
import Collection = require('../util/Collection');

declare class Wallet {
    paymentInstruments: Collection<CustomerPaymentInstrument>;

    createPaymentInstrument(paymentMethodId: string): CustomerPaymentInstrument;
    getPaymentInstruments(): Collection<CustomerPaymentInstrument>;
    getPaymentInstruments(paymentMethodID: string): Collection<CustomerPaymentInstrument>;
    removePaymentInstrument(instrument: CustomerPaymentInstrument): void;
}

export = Wallet;
