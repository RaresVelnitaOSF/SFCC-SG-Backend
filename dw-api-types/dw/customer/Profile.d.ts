import EncryptedObject = require('./EncryptedObject');
import AddressBook = require('./AddressBook');
import Credentials = require('./Credentials');
import EnumValue = require('../value/EnumValue');
import Wallet = require('./Wallet');
import Customer = require('./Customer')
import CustomAttributes = require('../object/CustomAttributes');


interface IProfileCustomAttributes extends CustomAttributes {
}


declare class Profile extends EncryptedObject<IProfileCustomAttributes> {
    readonly addressBook  :  AddressBook;
    birthday  :  Date;
    companyName  :  string;
    readonly credentials  :  Credentials;
    readonly customer  :  Customer;
    readonly customerNo  :  string;
    email  :  string;
    fax  :  string;
    readonly female  :  boolean;
    firstName  :  string;
    gender  :  EnumValue<number>;
    jobTitle  :  string;
    readonly lastLoginTime  :  Date;
    lastName  :  string;
    readonly lastVisitTime  :  Date;
    readonly male  :  boolean;
    readonly nextBirthday  :  Date;
    phoneBusiness  :  string;
    phoneHome  :  string;
    phoneMobile  :  string;
    preferredLocale  :  string;
    readonly previousLoginTime  :  Date;
    readonly previousVisitTime  :  Date;
    salutation  :  string;
    secondName  :  string;
    suffix  :  string;
    taxID  :  string;
    readonly taxIDMasked  :  string;
    taxIDType  :  EnumValue<string>;
    title  :  string;
    readonly wallet  :  Wallet;

    /**
     * Returns the customer's address book.
     */
    getAddressBook() : AddressBook;

    /**
     * Returns the customer's birthday as a date.
     */
    getBirthday() : Date;

    /**
     * Returns the customer's company name.
     */
    getCompanyName() : string;

    /**
     * Returns the customer's credentials.
     */
    getCredentials() : Credentials;

    /**
     * Returns the customer object related to this profile.
     */
    getCustomer() : Customer;

    /**
     * Returns the customer's number, which is a number used to identify the Customer.
     */
    getCustomerNo() : string;

    /**
     * Returns the customer's email address.
     */
    getEmail() : string;

    /**
     * Returns the fax number to use for the customer. The length is restricted to 32 characters.
     */
    getFax() : string;


    /**
     * Returns the customer's first name.
     */
    getFirstName() : string;

    /**
     * Returns the customer's gender.
     */
    getGender() : EnumValue<number>;

    /**
     * Returns the customer's job title.
     */
    getJobTitle() : string;

    /**
     * Returns the last login time of the customer.
     */
    getLastLoginTime() : Date;

    /**
     * eturns the customer's last name.
     */
    getLastName() : string;

    /**
     * Returns the last visit time of the customer.
     */
    getLastVisitTime() : Date;

    /**
     * Returns the upcoming customer's birthday as a date. If the customer already had birthday this year the method returns the birthday of the next year. Otherwise its birthday in this year. If the customer has not set a birthday this method returns null.
     */
    getNextBirthday() : Date | null;

    /**
     * Returns the business phone number to use for the customer.
     */
    getPhoneBusiness() : string;

    /**
     * Returns the phone number to use for the customer.
     */
    getPhoneHome() : string;

    /**
     * Returns the mobile phone number to use for the customer.
     */
    getPhoneMobile() : string;

    /**
     * Returns the customer's preferred locale.
     */
    getPreferredLocale() : string;

    /**
     * Returns the time the customer logged in prior to the current login.
     */
    getPreviousLoginTime() : Date;

    /**
     * Returns the time the customer visited the store prior to the current visit.
     */
    getPreviousVisitTime() : Date;

    /**
     * Returns the salutation to use for the customer.
     */
    getSalutation() : string;

    /**
     * Returns the customer's second name.
     */
    getSecondName() : string;

    /**
     * Returns the customer's suffix, such as "Jr." or "Sr.".
     */
    getSuffix() : string;

    /**
     * Returns the tax ID value. The value is returned either plain text if the current context allows plain text access, or if it's not allowed, the ID value will be returned masked. The following criteria must be met in order to have plain text access:
     *
        - the method call must happen in the context of a storefront request;
        - the current customer must be registered and authenticated;
        - it is the profile of the current customer;
        - and the current protocol is HTTPS.
     */
    getTaxID() : string;

    /**
     * Returns the masked value of the tax ID.
     */
    getTaxIDMasked() : string;

    /**
     * Returns the tax ID type.
     */
    getTaxIDType() : EnumValue<string>;

    /**
     * Returns the customer's title, such as "Mrs" or "Mr".
     */
    getTitle() : string;

    /**
     * Returns the wallet of this customer.
     */
    getWallet() : Wallet;

    /**
     * Indicates that the customer is female when set to true.
     */
    isFemale() : boolean;

    /**
     * Indicates that the customer is male when set to true.

     */
    isMale() : boolean;

    /**
     * Sets the customer's birthday as a date.
     * @param aValue
     */
    setBirthday(aValue : Date) : void;

    /**
     * Sets the customer's company name.
     * @param aValue
     */
    setCompanyName(aValue : string) : void;

    /**
     * Sets the customer's email address.
     * @param aValue
     */
    setEmail(aValue : string) : void;

    /**
     * Sets the fax number to use for the customer. The length is restricted to 32 characters.
     * @param number
     */
    setFax(number : string) : void;

    /**
     * Sets the customer's first name.
     * @param aValue
     */
    setFirstName(aValue : string) : void;

    /**
     * Sets the customer's gender
     * @param aValue
     */
    setGender(aValue : number) : void;

    /**
     * Sets the customer's job title.
     * @param aValue
     */
    setJobTitle(aValue : string) : void;

    /**
     * Sets the customer's last name.
     * @param aValue
     */
    setLastName(aValue : string) : void;

    /**
     * Sets the business phone number to use for the customer. The length is restricted to 32 characters.
     * @param number
     */
    setPhoneBusiness(number : string) : void;

    /**
     * Sets the phone number to use for the customer. The length is restricted to 32 characters.
     * @param number
     */
    setPhoneHome(number : string) : void;

    /**
     * Sets the mobile phone number to use for the customer. The length is restricted to 32 characters.
     * @param number
     */
    setPhoneMobile(number : string) : void;

    /**
     * Sets the customer's preferred locale.
     * @param aValue
     */
    setPreferredLocale(aValue : string) : void;

    /**
     * Sets the salutation to use for the customer.
     * @param salutation
     */
    setSalutation(salutation : string) : void;

    /**
     * Sets the customer's second name.
     * @param aValue
     */
    setSecondName(aValue : string) : void;

    /**
     * Sets the the customer's suffix.
     * @param aValue
     */
    setSuffix(aValue : string) : void;

    /**
     * Sets the tax ID value. The value can be set if the current context allows write access. The current context allows write access if the currently logged in user owns this profile and the connection is secured.
     * @param taxID
     */
    setTaxID(taxID : string) : void;

    /**
     * Sets the tax ID type.
     * @param taxIdType
     */
    setTaxIDType(taxIdType : string) : void;

    /**
     * Sets the customer's title.
     * @param aValue
     */
    setTitle(aValue : string) : void;

}

export = Profile;
