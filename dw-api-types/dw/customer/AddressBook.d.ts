import List = require('../util/List');
import CustomerAddress = require('./CustomerAddress');

declare class AddressBook {
    addresses: List<CustomerAddress>;
    preferredAddress: CustomerAddress | null;

    createAddress(name : string) : CustomerAddress;
    getAddress(id : string) : CustomerAddress | null;
    getAddresses() : List<CustomerAddress>;
    getPreferredAddress() : CustomerAddress | null;
    removeAddress(address : CustomerAddress) : void;
    setPreferredAddress(anAddress : CustomerAddress) : void;
}

export = AddressBook;
