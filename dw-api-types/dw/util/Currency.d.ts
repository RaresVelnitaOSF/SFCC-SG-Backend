
declare class Currency {
    currencyCode  :  string;
    defaultFractionDigits  :  number;
    name  :  string;
    symbol  :  string;

    static getCurrency(currencyCode : string) : Currency;
    getCurrencyCode() : string;
    getDefaultFractionDigits() : number;
    getName() : string;
    getSymbol() : string;
    tostring() : string;
}

export = Currency;