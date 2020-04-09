import ExtensibleObject = require('../object/ExtensibleObject');
import EnumValue = require('../value/EnumValue');
import OrderAddress = require('../order/OrderAddress');
import CustomAttributes = require('../object/CustomAttributes');

declare global {
    module ICustomAttributes {
        interface CustomerAddress extends CustomAttributes{
        }
    }
}

declare class CustomerAddress extends ExtensibleObject<ICustomAttributes.CustomerAddress> {
    address1  :  string;
    address2  :  string;
    city  :  string;
    companyName  :  string;
    countryCode  :  EnumValue<string>;
    firstName  :  string;
    fullName  :  string;
    ID  :  string;
    jobTitle  :  string;
    lastName  :  string;
    phone  :  string;
    postalCode  :  string;
    postBox  :  string;
    salutation  :  string;
    secondName  :  string;
    stateCode  :  string;
    suffix  :  string;
    suite  :  string;
    title :  string;

    getAddress1() : string;
    getAddress2() : string;
    getCity() : string;
    getCompanyName() : string;
    getCountryCode() : EnumValue<string>;
    getFirstName() : string;
    getFullName() : string;
    getID() : string;
    getJobTitle() : string;
    getLastName() : string;
    getPhone() : string;
    getPostalCode() : string;
    getPostBox() : string;
    getSalutation() : string;
    getSecondName() : string;
    getStateCode() : string;
    getSuffix() : string;
    getSuite() : string;
    getTitle() : string;
    isEquivalentAddress(address : CustomerAddress | OrderAddress) : boolean;

    setAddress1(value : string) : void;
    setAddress2(value : string) : void;
    setCity(city : string) : void;
    setCompanyName(companyName : string) : void;
    setCountryCode(countryCode : string) : void;
    setFirstName(firstName : string) : void;
    setID(value : string) : void;
    setJobTitle(jobTitle : string) : void;
    setLastName(lastName : string) : void;
    setPhone(phonenumber : string) : void;
    setPostalCode(postalCode : string) : void;
    setPostBox(postBox : string) : void;
    setSalutation(value : string) : void;
    setSecondName(secondName : string) : void;
    setStateCode(state : string) : void;
    setSuffix(suffix : string) : void;
    setSuite(value : string) : void;
    setTitle(title : string) : void;
}
export = CustomerAddress;
