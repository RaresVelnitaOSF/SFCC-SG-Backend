import Session = require('./system/Session');
import Response = require('./system/Response');
import Request = require('./system/Request');
import Customer = require('./customer/Customer')



interface EmptyFunction {
    (arg: any): arg is null | undefined | false;
}


// dw.web
import webClickStream = require('./web/ClickStream');
import webClickStreamEntry = require('./web/ClickStreamEntry');
import webCookie = require('./web/Cookie');
import webCookies = require('./web/Cookies');
import webCSRFProtection = require('./web/CSRFProtection');
import webFormAction = require('./web/FormAction');
import webForm = require('./web/Form');
import webFormElement = require('./web/FormElement');
import webFormElementValidationResult = require('./web/FormElementValidationResult');
import webFormField = require('./web/FormField');
import webFormFieldOption = require('./web/FormFieldOption');
import webFormFieldOptions = require('./web/FormFieldOptions');
import webFormGroup = require('./web/FormGroup');
import webForms = require('./web/Forms');
import webHttpParameter = require('./web/HttpParameter');
import webHttpParameterMap = require('./web/HttpParameterMap');
import webPageMetaData = require('./web/PageMetaData');
import webPageMetaTag = require('./web/PageMetaTag');
import webPagingModel = require('./web/PagingModel');
import webResource = require('./web/Resource');
import webURLAction = require('./web/URLAction');
import webURL = require('./web/URL');
import webURLParameter = require('./web/URLParameter');
import webURLRedirect = require('./web/URLRedirect');
import webURLRedirectMgr = require('./web/URLRedirectMgr');
import webURLUtils = require('./web/URLUtils');


// dw.util
import utilArrayList = require('./util/ArrayList');
import utilCalendar = require('./util/Calendar');
import utilCollection = require('./util/Collection');
import utilCurrency = require('./util/Currency');
import utilDecimal = require('./util/Decimal');
import utilFilteringCollection = require('./util/FilteringCollection');
import utilGeolocation = require('./util/Geolocation');
import utilHashMap = require('./util/HashMap');
import utilIterator = require('./util/Iterator');
import utilLinkedHashMap = require('./util/LinkedHashMap');
import utilLinkedHashSet = require('./util/LinkedHashSet');
import utilList = require('./util/List');
import utilLocale = require('./util/Locale');
import utilMap = require('./util/Map');
import utilSeekableIterator = require('./util/SeekableIterator');
import utilSet = require('./util/Set');
import utilHashSet = require('./util/HashSet');
import utilStringUtils = require('./util/StringUtils');
import utilTemplate = require('./util/Template');
import utilUUIDUtils = require('./util/UUIDUtils');
import utilBytes = require('./util/Bytes');

// dw.suggest
import suggestSuggestedPhrase = require('./suggest/SuggestedPhrase');

// dw.value
import valueEnumValue = require('./value/EnumValue');
import valueMimeEncodedText = require('./value/MimeEncodedText');
import valueMoney = require('./value/Money');
import valueQuantity = require('./value/Quantity');


// dw.catalog
import catalogCatalog = require('./catalog/Catalog');
import catalogCatalogMgr = require('./catalog/CatalogMgr');
import catalogCategoryAssignment = require('./catalog/CategoryAssignment');
import catalogCategory = require('./catalog/Category');
import catalogCategoryLink = require('./catalog/CategoryLink');
import catalogPriceBook = require('./catalog/PriceBook');
import catalogProductActiveData = require('./catalog/ProductActiveData');
import catalogProductAttributeModel = require('./catalog/ProductAttributeModel');
import catalogProductAvailabilityLevels = require('./catalog/ProductAvailabilityLevels');
import catalogProductAvailabilityModel = require('./catalog/ProductAvailabilityModel');
import catalogProduct = require('./catalog/Product');
import catalogProductInventoryList = require('./catalog/ProductInventoryList');
import catalogProductInventoryMgr = require('./catalog/ProductInventoryMgr');
import catalogProductInventoryRecord = require('./catalog/ProductInventoryRecord');
import catalogProductLink = require('./catalog/ProductLink');
import catalogProductMgr = require('./catalog/ProductMgr');
import catalogProductOption = require('./catalog/ProductOption');
import catalogProductOptionModel = require('./catalog/ProductOptionModel');
import catalogProductOptionValue = require('./catalog/ProductOptionValue');
import catalogProductPriceInfo = require('./catalog/ProductPriceInfo');
import catalogProductPriceModel = require('./catalog/ProductPriceModel');
import catalogProductPriceTable = require('./catalog/ProductPriceTable');
import catalogProductSearchHit = require('./catalog/ProductSearchHit');
import catalogProductSearchModel = require('./catalog/ProductSearchModel');
import catalogProductSearchRefinementDefinition = require('./catalog/ProductSearchRefinementDefinition');
import catalogProductSearchRefinements = require('./catalog/ProductSearchRefinements');
import catalogProductSearchRefinementValue = require('./catalog/ProductSearchRefinementValue');
import catalogProductVariationAttribute = require('./catalog/ProductVariationAttribute');
import catalogProductVariationAttributeValue = require('./catalog/ProductVariationAttributeValue');
import catalogProductVariationModel = require('./catalog/ProductVariationModel');
import catalogRecommendation = require('./catalog/Recommendation');
import catalogSearchModel = require('./catalog/SearchModel');
import catalogSearchRefinementDefinition = require('./catalog/SearchRefinementDefinition');
import catalogSearchRefinements = require('./catalog/SearchRefinements');
import catalogSearchRefinementValue = require('./catalog/SearchRefinementValue');
import catalogSortingOption = require('./catalog/SortingOption');
import catalogSortingRule = require('./catalog/SortingRule');
import catalogStore = require('./catalog/Store');
import catalogStoreGroup = require('./catalog/StoreGroup');
import catalogStoreMgr = require('./catalog/StoreMgr');
import catalogVariant = require('./catalog/Variant');
import catalogVariationGroup = require('./catalog/VariationGroup');

// dw.customer
import customerAddressBook = require('./customer/AddressBook');
import customerCredentials = require('./customer/Credentials');
import customerCustomerActiveData = require('./customer/CustomerActiveData');
import customerCustomerAddress = require('./customer/CustomerAddress');
import customerCustomer = require('./customer/Customer');
import customerCustomerGroup = require('./customer/CustomerGroup');
import customerCustomerList = require('./customer/CustomerList');
import customerCustomerMgr = require('./customer/CustomerMgr');
import customerCustomerPasswordConstraints = require('./customer/CustomerPasswordConstraints');
import customerCustomerPaymentInstrument = require('./customer/CustomerPaymentInstrument');
import customerEncryptedObject = require('./customer/EncryptedObject');
import customerOrderHistory = require('./customer/OrderHistory');
import customerProductList = require('./customer/ProductList');
import customerProductListItem = require('./customer/ProductListItem');
import customerProductListItemPurchase = require('./customer/ProductListItemPurchase');
import customerProductListMgr = require('./customer/ProductListMgr');
import customerProductListRegistrant = require('./customer/ProductListRegistrant');
import customerProfile = require('./customer/Profile');
import customerWallet = require('./customer/Wallet');

// dw.order
import orderAbstractItemCtnr = require('./order/AbstractItemCtnr');
import orderAbstractItem = require('./order/AbstractItem');
import orderAppeasement = require('./order/Appeasement');
import orderAppeasementItem = require('./order/AppeasementItem');
import orderBasket = require('./order/Basket');
import orderBasketMgr = require('./order/BasketMgr');
import orderBonusDiscountLineItem = require('./order/BonusDiscountLineItem');
import orderCouponLineItem = require('./order/CouponLineItem');
import orderGiftCertificate = require('./order/GiftCertificate');
import orderGiftCertificateLineItem = require('./order/GiftCertificateLineItem');
import orderGiftCertificateMgr = require('./order/GiftCertificateMgr');
import orderGiftCertificateStatusCodes = require('./order/GiftCertificateStatusCodes');
import orderInvoice = require('./order/Invoice');
import orderInvoiceItem = require('./order/InvoiceItem');
import orderLineItemCtnr = require('./order/LineItemCtnr');
import orderLineItem = require('./order/LineItem');
import orderOrderAddress = require('./order/OrderAddress');
import orderOrder = require('./order/Order');
import orderOrderItem = require('./order/OrderItem');
import orderOrderMgr = require('./order/OrderMgr');
import orderOrderPaymentInstrument = require('./order/OrderPaymentInstrument');
import orderPaymentCard = require('./order/PaymentCard');
import orderPaymentInstrument = require('./order/PaymentInstrument');
import orderPaymentMethod = require('./order/PaymentMethod');
import orderPaymentMgr = require('./order/PaymentMgr');
import orderPaymentProcessor = require('./order/PaymentProcessor');
import orderPaymentStatusCodes = require('./order/PaymentStatusCodes');
import orderPaymentTransaction = require('./order/PaymentTransaction');
import orderPriceAdjustment = require('./order/PriceAdjustment');
import orderProductLineItem = require('./order/ProductLineItem');
import orderProductShippingCost = require('./order/ProductShippingCost');
import orderProductShippingLineItem = require('./order/ProductShippingLineItem');
import orderProductShippingModel = require('./order/ProductShippingModel');
import orderReturnCase = require('./order/ReturnCase');
import orderReturnCaseItem = require('./order/ReturnCaseItem');
import orderReturn = require('./order/Return');
import orderReturnItem = require('./order/ReturnItem');
import orderShipment = require('./order/Shipment');
import orderShipmentShippingCost = require('./order/ShipmentShippingCost');
import orderShipmentShippingModel = require('./order/ShipmentShippingModel');
import orderShippingLineItem = require('./order/ShippingLineItem');
import orderShippingMethod = require('./order/ShippingMethod');
import orderShippingMgr = require('./order/ShippingMgr');
import orderShippingOrder = require('./order/ShippingOrder');
import orderShippingOrderItem = require('./order/ShippingOrderItem');
import orderSumItem = require('./order/SumItem');
import orderTaxGroup = require('./order/TaxGroup');
import orderTaxItem = require('./order/TaxItem');
import orderTrackingInfo = require('./order/TrackingInfo');
import orderTrackingRef = require('./order/TrackingRef');

// dw.object
import objectActiveData = require('./object/ActiveData');
import objectCustomAttributes = require('./object/CustomAttributes');
import objectCustomObject = require('./object/CustomObject');
import objectCustomObjectMgr = require('./object/CustomObjectMgr');
import objectExtensible = require('./object/Extensible');
import objectExtensibleObject = require('./object/ExtensibleObject');
import objectNote = require('./object/Note');
import objectObjectAttributeDefinition = require('./object/ObjectAttributeDefinition');
import objectObjectAttributeGroup = require('./object/ObjectAttributeGroup');
import objectObjectAttributeValueDefinition = require('./object/ObjectAttributeValueDefinition');
import objectObjectTypeDefinition = require('./object/ObjectTypeDefinition');
import objectPersistentObject = require('./object/PersistentObject');
import objectSystemObjectMgr = require('./object/SystemObjectMgr');

// dw.content
import contentContent = require('./content/Content');
import contentContentMgr = require('./content/ContentMgr');
import contentContentSearchModel = require('./content/ContentSearchModel');
import contentContentSearchRefinementDefinition = require('./content/ContentSearchRefinementDefinition');
import contentContentSearchRefinements = require('./content/ContentSearchRefinements');
import contentContentSearchRefinementValue = require('./content/ContentSearchRefinementValue');
import contentFolder = require('./content/Folder');
import contentLibrary = require('./content/Library');
import contentMarkupText = require('./content/MarkupText');
import contentMediaFile = require('./content/MediaFile');


// dw.campaign
import campaignABTest = require('./campaign/ABTest');
import campaignABTestSegment = require('./campaign/ABTestSegment');
import campaignAmountDiscount = require('./campaign/AmountDiscount');
import campaignCampaign = require('./campaign/Campaign');
import campaignCoupon = require('./campaign/Coupon');
import campaignDiscount = require('./campaign/Discount');
import campaignPromotion = require('./campaign/Promotion');
import campaignSourceCodeGroup = require('./campaign/SourceCodeGroup');
import campaignSourceCodeInfo = require('./campaign/SourceCodeInfo');

// dw.system
import systemHookMgr = require('./system/HookMgr');
import systemLog = require('./system/Log');
import systemLogger = require('./system/Logger');
import systemLogNDC = require('./system/LogNDC');
import systemOrganizationPreferences = require('./system/OrganizationPreferences');
import systemPipelet = require('./system/Pipelet');
import systemPipelineDictionary = require('./system/PipelineDictionary');
import systemRequest = require('./system/Request');
import systemResponse = require('./system/Response');
import systemSession = require('./system/Session');
import systemSite = require('./system/Site');
import systemSitePreferences = require('./system/SitePreferences');
import systemSystem = require('./system/System');
import systemStatus = require('./system/Status');
import systemStatusItem = require('./system/StatusItem');
import systemTransaction = require('./system/Transaction');


// dw.svc
import svcResult = require('./svc/Result');
import svcServiceCallback = require('./svc/ServiceCallback');
import svcServiceConfig = require('./svc/ServiceConfig');
import svcServiceCredential = require('./svc/ServiceCredential');
import svcServiceDefinition = require('./svc/ServiceDefinition');
import svcService = require('./svc/Service');
import svcServiceProfile = require('./svc/ServiceProfile');
import svcServiceRegistry = require('./svc/ServiceRegistry');
import svcFTPService = require('./svc/FTPService');
import svcFTPServiceDefinition = require('./svc/FTPServiceDefinition');
import svcHTTPService = require('./svc/HTTPService');
import svcLocalServiceRegistry = require('./svc/LocalServiceRegistry');

// dw.io
import ioCSVStreamReader = require('./io/CSVStreamReader');
import ioCSVStreamWriter = require('./io/CSVStreamWriter');
import ioFile = require('./io/File');
import ioFileReader = require('./io/FileReader');
import ioFileWriter = require('./io/FileWriter');
import ioInputStream = require('./io/InputStream');
import ioOutputStream = require('./io/OutputStream');
import ioPrintWriter = require('./io/PrintWriter');
import ioRandomAccessFileReader = require('./io/RandomAccessFileReader');
import ioReader = require('./io/Reader');
import ioStringWriter = require('./io/StringWriter');
import ioWriter = require('./io/Writer');
import ioXMLIndentingStreamWriter = require('./io/XMLIndentingStreamWriter');
import ioXMLStreamConstants = require('./io/XMLStreamConstants');
import ioXMLStreamReader = require('./io/XMLStreamReader');
import ioXMLStreamWriter = require('./io/XMLStreamWriter');

// dw.net

import netFTPFileInfo = require('./net/FTPFileInfo');
import netFTPClient = require('./net/FTPClient');
import netHTTPClient = require('./net/HTTPClient');


declare global {

    const empty: EmptyFunction;
    /**
     * The current session.
     */
    const session: Session;
    /**
     * The current response.
     */
    const response: Response;
    /**
     * The current request.
     */
    const request: Request;
    /**
     * The current customer or null if this request is not associated with any customer.
     */
    const customer: Customer;
    const PIPELET_ERROR: number;
    const PIPELET_NEXT: number;
    const module: typeof Module;
    const webreferences: any;
    const NaN: number;
    const Infinity: number;

    /**
     * Converts A string to an integer.
    * @param s A string to convert into a number.
    * @param radix A value between 2 and 36 that specifies the base of the number in numString.
    * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.
    * All other strings are considered decimal.
    */
    function parseInt(s: string, radix?: number): number;

    /**
     * Converts a string to a floating-point number.
    * @param string A string that contains a floating-point number.
    */
    function parseFloat(string: string): number;

    /**
     * Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).
    * @param number A numeric value.
    */
    function isNaN(number: number): boolean;

    /**
     * Determines whether a supplied number is finite.
    * @param number Any numeric value.
    */
    function isFinite(number: number): boolean;

    /**
     * Gets the unencoded version of an encoded Uniform Resource Identifier (URI).
    * @param encodedURI A value representing an encoded URI.
    */
    function decodeURI(encodedURI: string): string;

    /**
     * Gets the unencoded version of an encoded component of a Uniform Resource Identifier (URI).
    * @param encodedURIComponent A value representing an encoded URI component.
    */
    function decodeURIComponent(encodedURIComponent: string): string;

    /**
     * Encodes a text string as a valid Uniform Resource Identifier (URI)
    * @param uri A value representing an encoded URI.
    */
    function encodeURI(uri: string): string;

    /**
     * Encodes a text string as a valid component of a Uniform Resource Identifier (URI).
    * @param uriComponent A value representing an encoded URI component.
    */
    function encodeURIComponent(uriComponent: string): string;


    // Type definitions for Demandware
    module dw {
        module svc {
            export const Result: typeof svcResult;
            // export const ServiceCallback : svcServiceCallback;
            export const ServiceConfig: typeof svcServiceConfig;
            export const ServiceCredential: typeof svcServiceCredential;
            export const ServiceDefinition: typeof svcServiceDefinition;
            export const Service: typeof svcService;
            export const ServiceProfile: typeof svcServiceProfile;
            export const ServiceRegistry: typeof svcServiceRegistry;
            export const FTPService: typeof svcFTPService;
            export const FTPServiceDefinition: typeof svcFTPServiceDefinition;
            export const HTTPService: typeof svcHTTPService;
            export const LocalServiceRegistry: typeof svcLocalServiceRegistry;
        }
        module net {
            export const FTPFileInfo: typeof netFTPFileInfo;
            export const FTPClient: typeof netFTPClient;
            export const HTTPClient: typeof netHTTPClient;
        }
        module system {
            export const HookMgr: typeof systemHookMgr;
            export const Log: typeof systemLog;
            export const Logger: typeof systemLogger;
            export const LogNDC: typeof systemLogNDC;
            export const OrganizationPreferences: typeof systemOrganizationPreferences;
            export const Pipelet: typeof systemPipelet;
            export const PipelineDictionary: typeof systemPipelineDictionary;
            export const Request: typeof systemRequest;
            export const Response: typeof systemResponse;
            export const Session: typeof systemSession;
            export const Site: typeof systemSite;
            export const SitePreferences: typeof systemSitePreferences;
            export const System: typeof systemSystem;
            export const Status: typeof systemStatus;
            export const StatusItem: typeof systemStatusItem;
            export const Transaction: typeof systemTransaction;
        }
        module campaign {
            export const ABTest: typeof campaignABTest;
            export const ABTestSegment: typeof campaignABTestSegment;
            export const AmountDiscount: typeof campaignAmountDiscount;
            export const Campaign: typeof campaignCampaign;
            export const Coupon: typeof campaignCoupon;
            export const Discount: typeof campaignDiscount;
            export const Promotion: typeof campaignPromotion;
            export const SourceCodeGroup: typeof campaignSourceCodeGroup;
            export const SourceCodeInfo: typeof campaignSourceCodeInfo;
        }
        module content {
            export const Content: typeof contentContent;
            export const ContentMgr: typeof contentContentMgr;
            export const ContentSearchModel: typeof contentContentSearchModel;
            export const ContentSearchRefinementDefinition: typeof contentContentSearchRefinementDefinition;
            export const ContentSearchRefinements: typeof contentContentSearchRefinements;
            export const ContentSearchRefinementValue: typeof contentContentSearchRefinementValue;
            export const Folder: typeof contentFolder;
            export const Library: typeof contentLibrary;
            export const MarkupText: typeof contentMarkupText;
            export const MediaFile: typeof contentMediaFile;
        }
        module io {
            export const CSVStreamReader: typeof ioCSVStreamReader;
            export const CSVStreamWriter: typeof ioCSVStreamWriter;
            export const File: typeof ioFile;
            export const FileReader: typeof ioFileReader;
            export const FileWriter: typeof ioFileWriter;
            export const InputStream: typeof ioInputStream;
            export const OutputStream: typeof ioOutputStream;
            export const PrintWriter: typeof ioPrintWriter;
            export const RandomAccessFileReader: typeof ioRandomAccessFileReader;
            export const Reader: typeof ioReader;
            export const StringWriter: typeof ioStringWriter;
            export const Writer: typeof ioWriter;
            export const XMLIndentingStreamWriter: typeof ioXMLIndentingStreamWriter;
            export const XMLStreamConstants: typeof ioXMLStreamConstants;
            export const XMLStreamReader: typeof ioXMLStreamReader;
            export const XMLStreamWriter: typeof ioXMLStreamWriter;
        }

        module object {
            export const ActiveData: typeof objectActiveData;
            export const CustomAttributes: typeof objectCustomAttributes;
            export const CustomObject: typeof objectCustomObject;
            export const CustomObjectMgr: typeof objectCustomObjectMgr;
            export const Extensible: typeof objectExtensible;
            export const ExtensibleObject: typeof objectExtensibleObject;
            export const Note: typeof objectNote;
            export const ObjectAttributeDefinition: typeof objectObjectAttributeDefinition;
            export const ObjectAttributeGroup: typeof objectObjectAttributeGroup;
            export const ObjectAttributeValueDefinition: typeof objectObjectAttributeValueDefinition;
            export const ObjectTypeDefinition: typeof objectObjectTypeDefinition;
            export const PersistentObject: typeof objectPersistentObject;
            export const SystemObjectMgr: typeof objectSystemObjectMgr;
        }

        module order {
            export const AbstractItemCtnr: typeof orderAbstractItemCtnr;
            export const AbstractItem: typeof orderAbstractItem;
            export const Appeasement: typeof orderAppeasement;
            export const AppeasementItem: typeof orderAppeasementItem;
            export const Basket: typeof orderBasket;
            export const BasketMgr: typeof orderBasketMgr;
            export const BonusDiscountLineItem: typeof orderBonusDiscountLineItem;
            export const CouponLineItem: typeof orderCouponLineItem;
            export const GiftCertificate: typeof orderGiftCertificate;
            export const GiftCertificateLineItem: typeof orderGiftCertificateLineItem;
            export const GiftCertificateMgr: typeof orderGiftCertificateMgr;
            export const GiftCertificateStatusCodes: typeof orderGiftCertificateStatusCodes;
            export const Invoice: typeof orderInvoice;
            export const InvoiceItem: typeof orderInvoiceItem;
            export const LineItemCtnr: typeof orderLineItemCtnr;
            export const LineItem: typeof orderLineItem;
            export const OrderAddress: typeof orderOrderAddress;
            export const Order: typeof orderOrder;
            export const OrderItem: typeof orderOrderItem;
            export const OrderMgr: typeof orderOrderMgr;
            export const OrderPaymentInstrument: typeof orderOrderPaymentInstrument;
            export const PaymentCard: typeof orderPaymentCard;
            export const PaymentInstrument: typeof orderPaymentInstrument;
            export const PaymentMethod: typeof orderPaymentMethod;
            export const PaymentMgr: typeof orderPaymentMgr;
            export const PaymentProcessor: typeof orderPaymentProcessor;
            export const PaymentStatusCodes: typeof orderPaymentStatusCodes;
            export const PaymentTransaction: typeof orderPaymentTransaction;
            export const PriceAdjustment: typeof orderPriceAdjustment;
            export const ProductLineItem: typeof orderProductLineItem;
            export const ProductShippingCost: typeof orderProductShippingCost;
            export const ProductShippingLineItem: typeof orderProductShippingLineItem;
            export const ProductShippingModel: typeof orderProductShippingModel;
            export const ReturnCase: typeof orderReturnCase;
            export const ReturnCaseItem: typeof orderReturnCaseItem;
            export const Return: typeof orderReturn;
            export const ReturnItem: typeof orderReturnItem;
            export const Shipment: typeof orderShipment;
            export const ShipmentShippingCost: typeof orderShipmentShippingCost;
            export const ShipmentShippingModel: typeof orderShipmentShippingModel;
            export const ShippingLineItem: typeof orderShippingLineItem;
            export const ShippingMethod: typeof orderShippingMethod;
            export const ShippingMgr: typeof orderShippingMgr;
            export const ShippingOrder: typeof orderShippingOrder;
            export const ShippingOrderItem: typeof orderShippingOrderItem;
            export const SumItem: typeof orderSumItem;
            export const TaxGroup: typeof orderTaxGroup;
            export const TaxItem: typeof orderTaxItem;
            export const TrackingInfo: typeof orderTrackingInfo;
            export const TrackingRef: typeof orderTrackingRef;
        }
        module customer {
            export const AddressBook: typeof customerAddressBook;
            export const Credentials: typeof customerCredentials;
            export const CustomerActiveData: typeof customerCustomerActiveData;
            export const CustomerAddress: typeof customerCustomerAddress;
            export const Customer: typeof customerCustomer;
            export const CustomerGroup: typeof customerCustomerGroup;
            export const CustomerList: typeof customerCustomerList;
            export const CustomerMgr: typeof customerCustomerMgr;
            export const CustomerPasswordConstraints: typeof customerCustomerPasswordConstraints;
            export const CustomerPaymentInstrument: typeof customerCustomerPaymentInstrument;
            export const EncryptedObject: typeof customerEncryptedObject;
            export const OrderHistory: typeof customerOrderHistory;
            export const ProductList: typeof customerProductList;
            export const ProductListItem: typeof customerProductListItem;
            export const ProductListItemPurchase: typeof customerProductListItemPurchase;
            export const ProductListMgr: typeof customerProductListMgr;
            export const ProductListRegistrant: typeof customerProductListRegistrant;
            export const Profile: typeof customerProfile;
            export const Wallet: typeof customerWallet;
        }
        module catalog {
            export const Catalog: typeof catalogCatalog;
            export const CatalogMgr: typeof catalogCatalogMgr;
            export const CategoryAssignment: typeof catalogCategoryAssignment;
            export const Category: typeof catalogCategory;
            export const CategoryLink: typeof catalogCategoryLink;
            export const PriceBook: typeof catalogPriceBook;
            export const ProductActiveData: typeof catalogProductActiveData;
            export const ProductAttributeModel: typeof catalogProductAttributeModel;
            export const ProductAvailabilityLevels: typeof catalogProductAvailabilityLevels;
            export const ProductAvailabilityModel: typeof catalogProductAvailabilityModel;
            export const Product: typeof catalogProduct;
            export const ProductInventoryList: typeof catalogProductInventoryList;
            export const ProductInventoryMgr: typeof catalogProductInventoryMgr;
            export const ProductInventoryRecord: typeof catalogProductInventoryRecord;
            export const ProductLink: typeof catalogProductLink;
            export const ProductMgr: typeof catalogProductMgr;
            export const ProductOption: typeof catalogProductOption;
            export const ProductOptionModel: typeof catalogProductOptionModel;
            export const ProductOptionValue: typeof catalogProductOptionValue;
            export const ProductPriceInfo: typeof catalogProductPriceInfo;
            export const ProductPriceModel: typeof catalogProductPriceModel;
            export const ProductPriceTable: typeof catalogProductPriceTable;
            export const ProductSearchHit: typeof catalogProductSearchHit;
            export const ProductSearchModel: typeof catalogProductSearchModel;
            export const ProductSearchRefinementDefinition: typeof catalogProductSearchRefinementDefinition;
            export const ProductSearchRefinements: typeof catalogProductSearchRefinements;
            export const ProductSearchRefinementValue: typeof catalogProductSearchRefinementValue;
            export const ProductVariationAttribute: typeof catalogProductVariationAttribute;
            export const ProductVariationAttributeValue: typeof catalogProductVariationAttributeValue;
            export const ProductVariationModel: typeof catalogProductVariationModel;
            export const Recommendation: typeof catalogRecommendation;
            export const SearchModel: typeof catalogSearchModel;
            export const SearchRefinementDefinition: typeof catalogSearchRefinementDefinition;
            export const SearchRefinements: typeof catalogSearchRefinements;
            export const SearchRefinementValue: typeof catalogSearchRefinementValue;
            export const SortingOption: typeof catalogSortingOption;
            export const SortingRule: typeof catalogSortingRule;
            export const Store: typeof catalogStore;
            export const StoreGroup: typeof catalogStoreGroup;
            export const StoreMgr: typeof catalogStoreMgr;
            export const Variant: typeof catalogVariant;
            export const VariationGroup: typeof catalogVariationGroup;
        }
        module suggest {
            export const SuggestedPhrase: typeof suggestSuggestedPhrase
        }
        module value {
            export const EnumValue: typeof valueEnumValue;
            export const MimeEncodedText: typeof valueMimeEncodedText;
            export const Money: typeof valueMoney;
            export const Quantity: typeof valueQuantity;
        }
        module web {
            export const ClickStream: typeof webClickStream;
            export const ClickStreamEntry: typeof webClickStreamEntry;
            export const Cookie: typeof webCookie;
            export const Cookies: typeof webCookies;
            export const CSRFProtection: typeof webCSRFProtection;
            export const FormAction: typeof webFormAction;
            export const Form: typeof webForm;
            export const FormElement: typeof webFormElement;
            export const FormElementValidationResult: typeof webFormElementValidationResult;
            export const FormField: typeof webFormField;
            export const FormFieldOption: typeof webFormFieldOption;
            export const FormFieldOptions: typeof webFormFieldOptions;
            export const FormGroup: typeof webFormGroup;
            export const Forms: typeof webForms;
            export const HttpParameter: typeof webHttpParameter;
            export const HttpParameterMap: typeof webHttpParameterMap;
            export const PageMetaData: typeof webPageMetaData;
            export const PageMetaTag: typeof webPageMetaTag;
            export const PagingModel: typeof webPagingModel;
            export const Resource: typeof webResource;
            export const URLAction: typeof webURLAction;
            export const URL: typeof webURL;
            export const URLParameter: typeof webURLParameter;
            export const URLRedirect: typeof webURLRedirect;
            export const URLRedirectMgr: typeof webURLRedirectMgr;
            export const URLUtils: typeof webURLUtils;
        }
        module util {
            export const ArrayList: typeof utilArrayList;
            export const Calendar: typeof utilCalendar;
            export const Collection: typeof utilCollection;
            export const Currency: typeof utilCurrency;
            export const Decimal: typeof utilDecimal;
            export const FilteringCollection: typeof utilFilteringCollection;
            export const Geolocation: typeof utilGeolocation;
            export const HashMap: typeof utilHashMap;
            export const Iterator: typeof utilIterator;
            export const LinkedHashMap: typeof utilLinkedHashMap;
            export const LinkedHashSet: typeof utilLinkedHashSet;
            export const List: typeof utilList;
            export const Locale: typeof utilLocale;
            export const Map: typeof utilMap;
            export const SeekableIterator: typeof utilSeekableIterator;
            export const Set: typeof utilSet;
            export const StringUtils: typeof utilStringUtils;
            export const Template: typeof utilTemplate;
            export const UUIDUtils: typeof utilUUIDUtils;
            export const Bytes: typeof utilBytes;
            export const HashSet: typeof utilHashSet;
        }
    }


    /**
     * CommonJS modules are JavaScript [require(String)](https://info.demandware.com/DOC2/index.jsp?topic=%2Fcom.demandware.dochelp%2FDWAPI%2Fscriptapi%2Fhtml%2Fapi%2Fclass_TopLevel_global.html&anchor=TopLevel_global_require_String_DetailAnchor)
     * function. This function returns a module object, which wraps the script code from the file. Within a module
     * implementation, the module object can be accessed via the [module](https://info.demandware.com/DOC2/index.jsp?topic=%2Fcom.demandware.dochelp%2FDWAPI%2Fscriptapi%2Fhtml%2Fapi%2Fclass_TopLevel_global.html&anchor=TopLevel_global_module_DetailAnchor) variable.
     *
     * A module has a unique absolute id. The same module may be resolved by [require(String)](https://info.demandware.com/DOC2/index.jsp?topic=%2Fcom.demandware.dochelp%2FDWAPI%2Fscriptapi%2Fhtml%2Fapi%2Fclass_TopLevel_global.html&anchor=TopLevel_global_require_String_DetailAnchor)
     * for different path arguments, like relative paths (starting with "./" or "../"), or absolute paths. See the
     * documentation of require for more details about the lookup procedure.
     *
     *
     * Every module object has an [module.exports](https://info.demandware.com/DOC2/index.jsp?topic=%2Fcom.demandware.dochelp%2FDWAPI%2Fscriptapi%2Fhtml%2Fapi%2Fclass_TopLevel_Module.html&anchor=TopLevel_Module_exports_DetailAnchor) property which can be used by the module implementation to expose its
     * public functions or properties. Only functions and properties that are explicitly exported are accessible from other
     * modules, all others are private and not visible. For convenience, the global [exports](https://info.demandware.com/DOC2/index.jsp?topic=%2Fcom.demandware.dochelp%2FDWAPI%2Fscriptapi%2Fhtml%2Fapi%2Fclass_TopLevel_global.html&anchor=TopLevel_global_exports_DetailAnchor) variable
     * is by default also initialized with the [module.exports](https://info.demandware.com/DOC2/index.jsp?topic=%2Fcom.demandware.dochelp%2FDWAPI%2Fscriptapi%2Fhtml%2Fapi%2Fclass_TopLevel_Module.html&anchor=TopLevel_Module_exports_DetailAnchor) property of the current module.
     *
     * In the most simple case, module elements can be exposed by adding them to the exports object, like:
     *
     * ```
     * // Greeting.js
     * exports.sayHello = function() {
     *     return 'Hello World!';
     * };
     * ```
     *
     * This is equivalent to:
     *
     * ```
     * // Greeting.js
     * module.exports.sayHello = function() {
     *     return 'Hello World!';
     * };
     * ```
     *
     * With the above implementation, a caller (for example another module in the same directory) could call the module
     * function like this:
     *
     * ```
     * var message = require('./Greeting').sayHello();
     * ```
     *
     * It is also possible to replace the whole module exports object with a completely different value, for example with a
     * function:
     *
     * ```
     * // Greeting.js
     * module.exports = function sayHello() {
     *     return 'Hi!';
     * }
     * ```
     *
     * Now the result of require would be a function, which can be invoked directly like:
     *
     * ```
     * var message = require('./Greeting')();
     * ```
     *
     * This construction can be used for exporting constructor functions, so that a module becomes something like a class:
     *
     * ```
     * // Greeting.js
     * function Greeting() {
     *     this.message = 'Hi!';
     * }
     *
     * Greeting.prototype.getMessage = function() {
     *     return this.message;
     * }
     *
     * module.exports = Greeting;
     * ```
     *
     * which would be used like:
     *
     * ```
     * var Greeting = require('./Greeting');
     * var m = new Greeting().getMessage();
     * ```
     */
    class Module {
        /**
         * The absolute, normalized id of the module, which uniquely identifies it. A call to the
         * <a href="https://info.demandware.com/DOC2/index.jsp?topic=%2Fcom.demandware.dochelp%2FDWAPI%2Fscriptapi%2Fhtml%2Fapi%2Fclass_TopLevel_global.html&anchor=TopLevel_global_require_String_DetailAnchor">global.require(String)</a> function with this id would resolve this module.
         */
        id: string;
        /**
         * The name of the cartridge which contains the module.
         */
        cartridge: string;
        /**
         * The exports of the module.
         */
        exports: any;
        /**
         * The module (if exists) that is overridden by this module. The super module would have the same path as the
         * current module but its code location would be checked later in the lookup sequence. This property is useful to
         * reuse functionality implemented in overridden modules.
         */
        superModule: Module;
    }
    const exports: any;


    /**
     * The require() function supports loading of modules in JavaScript. The function works similar to the require() function
     * in CommonJS. The general module loading works the same way, but the exact path lookup is slightly different
     * and better fits into Demandware concepts. Here are the details for the lookup:
     *
     * * If the module name starts with "./" or "../" then load it relative to the current module. The module can be a file or a directory. A file
     * extension is acknowledged, but not required. If it's a directory a 'package.json' or a 'main' file is expected.
     * If the 'package.json' does not contain a main entry, then default to main file in the directory.
     * Access to parent files can't go beyond the cartridges directory. Access to other cartridges is explicitly allowed.
     * * If the module name starts with "~/" it's a path relative to the current cartridge.
     * * If the module name starts with "&#42;/" try to find the module in all cartridges that are assigned to the current site.
     * * A module with the name "dw" or which starts with "dw/" references Demandware built-in functions and classes. For example `var u = require( 'dw/util' );` loads the classes in the util package, which can be then used like `var h = new u.HashMap();`
     *
     * * A module, which doesn't start with "./" or "../" is resolved as top level module.
     *    * The module name is used to find a folder in the top cartridge directory, typically a cartridge itself, but it can also be a simple folder.</li>
     *    * If nothing is found, the module name is used to look into a special folder called "modules" in the top cartridge directory. That folder
     * can be used by a developer to manage different modules. For example a developer could drop a module like "less.js" just into that folder.</li>
     *
     * If the require function is used to reference a file then an optional file extension is used to determine the content of the file. Currently
     * supported are the extensions ordered by priority:
     *
     * * `js` - JavaScript file
     * * `ds` - Demandware Script file
     * * `json` - JSON file
     *
     */
    function require(path: string): any;

    /**
     * Converts A string to an integer.
     * @param s A string to convert into a number.
     * @param radix A value between 2 and 36 that specifies the base of the number in numString.
     * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.
     * All other strings are considered decimal.
     */
    function parseInt(s: string, radix?: number): number;

    /**
     * Parses a String into an float Number.
     */
    function parseFloat(s: string): number;
    /**
     * Unescapes characters in a URI component.
     */
    function decodeURI(uri: string): string;
    /**
     * Unescapes characters in a URI component.
     */
    function decodeURIComponent(uriComponent: string): string;
    /**
     * Escapes characters in a URI.
     */
    function encodeURI(uri: string): string;

    /**
     * Encodes a String.
     */
    function escape(s: string): string;
    /**
     * Execute JavaScript code from a String.
     * @deprecated The eval() function is deprecated, because it's potential security risk for server side code injection.
     */
    //function eval(code: string): any;
    /**
     * Returns true if the specified Number is finite.
     */
    function isFinite(number_: number): boolean;
    /**
     * Test the specified value to determine if it
     * is not a Number.
     */
    function isNaN(object: any): boolean;
    /**
     * Determines whether the specified string is a valid name for an
     * XML element or attribute.
     */
    function isXMLName(name: string): boolean;
    /**
     * Decode an escaped String.
     */
    function unescape(string_: string): string;
    /**
     * An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.
     */


    interface PropertyDescriptor {
        configurable?: boolean;
        enumerable?: boolean;
        value?: any;
        writable?: boolean;
        get?(): any;
        set?(v: any): void;
    }

    interface PropertyDescriptorMap {
        [s: string]: PropertyDescriptor;
    }

    interface Object {
        /** The initial value of Object.prototype.constructor is the standard built-in Object constructor. */
        constructor: Function;

        /** Returns a string representation of an object. */
        toString(): string;

        /** Returns a date converted to a string using the current locale. */
        toLocaleString(): string;

        /** Returns the primitive value of the specified object. */
        valueOf(): Object;

        /**
         * Determines whether an object has a property with the specified name.
        * @param v A property name.
        */
        hasOwnProperty(v: string): boolean;

        /**
         * Determines whether an object exists in another object's prototype chain.
        * @param v Another object whose prototype chain is to be checked.
        */
        isPrototypeOf(v: Object): boolean;

        /**
         * Determines whether a specified property is enumerable.
        * @param v A property name.
        */
        propertyIsEnumerable(v: string): boolean;
    }

    interface ObjectConstructor {
        new(value?: any): Object;
        (): any;
        (value: any): any;

        /** A reference to the prototype for a class of objects. */
        readonly prototype: Object;

        /**
         * Returns the prototype of an object.
        * @param o The object that references the prototype.
        */
        getPrototypeOf(o: any): any;

        /**
         * Gets the own property descriptor of the specified object.
        * An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.
        * @param o Object that contains the property.
        * @param p Name of the property.
        */
        getOwnPropertyDescriptor(o: any, p: string): PropertyDescriptor;

        /**
         * Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
        * on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.
        * @param o Object that contains the own properties.
        */
        getOwnPropertyNames(o: any): string[];

        /**
         * Creates an object that has the specified prototype or that has null prototype.
        * @param o Object to use as a prototype. May be null.
        */
        create(o: object | null): any;

        /**
         * Creates an object that has the specified prototype, and that optionally contains specified properties.
        * @param o Object to use as a prototype. May be null
        * @param properties JavaScript object that contains one or more property descriptors.
        */
        create(o: object | null, properties: PropertyDescriptorMap & ThisType<any>): any;

        /**
         * Adds a property to an object, or modifies attributes of an existing property.
        * @param o Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.
        * @param p The property name.
        * @param attributes Descriptor for the property. It can be for a data property or an accessor property.
        */
        defineProperty(o: any, p: string, attributes: PropertyDescriptor & ThisType<any>): any;

        /**
         * Adds one or more properties to an object, and/or modifies attributes of existing properties.
        * @param o Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object.
        * @param properties JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.
        */
        defineProperties(o: any, properties: PropertyDescriptorMap & ThisType<any>): any;



        /**
         * Returns the names of the enumerable properties and methods of an object.
        * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
        */
        keys(o: any): string[];
    }

    /**
     * Provides functionality common to all JavaScript objects.
    */
    const Object: ObjectConstructor;

    /**
     * Creates a new function.
    */
    interface Function {
        /**
         * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
        * @param thisArg The object to be used as the this object.
        * @param argArray A set of arguments to be passed to the function.
        */
        apply(this: Function, thisArg: any, argArray?: any): any;

        /**
         * Calls a method of an object, substituting another object for the current object.
        * @param thisArg The object to be used as the current object.
        * @param argArray A list of arguments to be passed to the method.
        */
        call(this: Function, thisArg: any, ...argArray: any[]): any;

        /**
         * For a given function, creates a bound function that has the same body as the original function.
        * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
        * @param thisArg An object to which the this keyword can refer inside the new function.
        * @param argArray A list of arguments to be passed to the new function.
        */
        bind(this: Function, thisArg: any, ...argArray: any[]): any;

        /** Returns a string representation of a function. */
        toString(): string;

        prototype: any;
        readonly length: number;

    }

    interface FunctionConstructor {
        /**
         * Creates a new function.
        * @param args A list of arguments the function accepts.
        */
        new(...args: string[]): Function;
        (...args: string[]): Function;
        readonly prototype: Function;
    }

    const Function: FunctionConstructor;

    interface IArguments {
        [index: number]: any;
        length: number;
        callee: Function;
    }

    interface String {
        /** Returns a string representation of a string. */
        toString(): string;

        /**
         * Returns the character at the specified index.
        * @param pos The zero-based index of the desired character.
        */
        charAt(pos: number): string;

        /**
         * Returns the Unicode value of the character at the specified location.
        * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.
        */
        charCodeAt(index: number): number;

        /**
         * Returns a string that contains the concatenation of two or more strings.
        * @param strings The strings to append to the end of the string.
        */
        concat(...strings: string[]): string;

        /**
         * Returns the position of the first occurrence of a substring.
        * @param searchString The substring to search for in the string
        * @param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
        */
        indexOf(searchString: string, position?: number): number;

        /**
         * Returns the last occurrence of a substring in the string.
        * @param searchString The substring to search for.
        * @param position The index at which to begin searching. If omitted, the search begins at the end of the string.
        */
        lastIndexOf(searchString: string, position?: number): number;

        /**
         * Determines whether two strings are equivalent in the current locale.
        * @param that String to compare to target string
        */
        localeCompare(that: string): number;

        /**
         * Matches a string with a regular expression, and returns an array containing the results of that search.
        * @param regexp A variable name or string literal containing the regular expression pattern and flags.
        */
        match(regexp: string | RegExp): RegExpMatchArray | null;

        /**
         * Replaces text in a string, using a regular expression or search string.
        * @param searchValue A string to search for.
        * @param replaceValue A string containing the text to replace for every successful match of searchValue in this string.
        */
        replace(searchValue: string | RegExp, replaceValue: string): string;

        /**
         * Replaces text in a string, using a regular expression or search string.
        * @param searchValue A string to search for.
        * @param replacer A function that returns the replacement text.
        */
        replace(searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string;

        /**
         * Finds the first substring match in a regular expression search.
        * @param regexp The regular expression pattern and applicable flags.
        */
        search(regexp: string | RegExp): number;

        /**
         * Returns a section of a string.
        * @param start The index to the beginning of the specified portion of stringObj.
        * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
        * If this value is not specified, the substring continues to the end of stringObj.
        */
        slice(start?: number, end?: number): string;

        /**
         * Split a string into substrings using the specified separator and return them as an array.
        * @param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
        * @param limit A value used to limit the number of elements returned in the array.
        */
        split(separator: string | RegExp, limit?: number): string[];

        /**
         * Returns the substring at the specified location within a String object.
        * @param start The zero-based index number indicating the beginning of the substring.
        * @param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
        * If end is omitted, the characters from start through the end of the original string are returned.
        */
        substring(start: number, end?: number): string;

        /** Converts all the alphabetic characters in a string to lowercase. */
        toLowerCase(): string;

        /** Converts all alphabetic characters to lowercase, taking into account the host environment's current locale. */
        toLocaleLowerCase(): string;

        /** Converts all the alphabetic characters in a string to uppercase. */
        toUpperCase(): string;

        /** Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale. */
        toLocaleUpperCase(): string;

        /** Removes the leading and trailing white space and line terminator characters from a string. */
        trim(): string;

        /** Returns the length of a String object. */
        readonly length: number;

        // IE extensions
        /**
         * Gets a substring beginning at the specified location and having the specified length.
        * @param from The starting position of the desired substring. The index of the first character in the string is zero.
        * @param length The number of characters to include in the returned substring.
        */
        substr(from: number, length?: number): string;

        /** Returns the primitive value of the specified object. */
        valueOf(): string;

        readonly [index: number]: string;

        /**
         * Returns `true` if this string is equal to the string representation of the passed objects.
         */
        equals(str: string): boolean;
    }

    interface StringConstructor {
        new(value?: any): string;
        (value?: any): string;
        readonly prototype: string;
        fromCharCode(...codes: number[]): string;
    }

    /**
     * Allows manipulation and formatting of text strings and determination and location of substrings within strings.
    */
    const String: StringConstructor;

    interface Boolean {
        /** Returns the primitive value of the specified object. */
        valueOf(): boolean;
    }

    interface BooleanConstructor {
        new(value?: any): Boolean;
        (value?: any): boolean;
        readonly prototype: Boolean;
    }

    const Boolean: BooleanConstructor;

    interface Number {
        /**
         * Returns a string representation of an object.
        * @param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.
        */
        toString(radix?: number): string;

        /**
         * Returns a string representing a number in fixed-point notation.
        * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
        */
        toFixed(fractionDigits?: number): string;

        /**
         * Returns a string containing a number represented in exponential notation.
        * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
        */
        toExponential(fractionDigits?: number): string;

        /**
         * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
        * @param precision Number of significant digits. Must be in the range 1 - 21, inclusive.
        */
        toPrecision(precision?: number): string;

        /** Returns the primitive value of the specified object. */
        valueOf(): number;
    }

    interface NumberConstructor {
        new(value?: any): Number;
        (value?: any): number;
        readonly prototype: Number;

        /** The largest number that can be represented in JavaScript. Equal to approximately 1.79E+308. */
        readonly MAX_VALUE: number;

        /** The closest number to zero that can be represented in JavaScript. Equal to approximately 5.00E-324. */
        readonly MIN_VALUE: number;

        /**
         * A value that is not a number.
        * In equality comparisons, NaN does not equal any value, including itself. To test whether a value is equivalent to NaN, use the isNaN function.
        */
        readonly NaN: number;

        /**
         * A value that is less than the largest negative number that can be represented in JavaScript.
        * JavaScript displays NEGATIVE_INFINITY values as -infinity.
        */
        readonly NEGATIVE_INFINITY: number;

        /**
         * A value greater than the largest number that can be represented in JavaScript.
        * JavaScript displays POSITIVE_INFINITY values as infinity.
        */
        readonly POSITIVE_INFINITY: number;
    }

    /** An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers. */
    const Number: NumberConstructor;

    interface Math {
        /** The mathematical constant e. This is Euler's number, the base of natural logarithms. */
        readonly E: number;
        /** The natural logarithm of 10. */
        readonly LN10: number;
        /** The natural logarithm of 2. */
        readonly LN2: number;
        /** The base-2 logarithm of e. */
        readonly LOG2E: number;
        /** The base-10 logarithm of e. */
        readonly LOG10E: number;
        /** Pi. This is the ratio of the circumference of a circle to its diameter. */
        readonly PI: number;
        /** The square root of 0.5, or, equivalently, one divided by the square root of 2. */
        readonly SQRT1_2: number;
        /** The square root of 2. */
        readonly SQRT2: number;
        /**
         * Returns the absolute value of a number (the value without regard to whether it is positive or negative).
        * For example, the absolute value of -5 is the same as the absolute value of 5.
        * @param x A numeric expression for which the absolute value is needed.
        */
        abs(x: number): number;
        /**
         * Returns the arc cosine (or inverse cosine) of a number.
        * @param x A numeric expression.
        */
        acos(x: number): number;
        /**
         * Returns the arcsine of a number.
        * @param x A numeric expression.
        */
        asin(x: number): number;
        /**
         * Returns the arctangent of a number.
        * @param x A numeric expression for which the arctangent is needed.
        */
        atan(x: number): number;
        /**
         * Returns the angle (in radians) from the X axis to a point.
        * @param y A numeric expression representing the cartesian y-coordinate.
        * @param x A numeric expression representing the cartesian x-coordinate.
        */
        atan2(y: number, x: number): number;
        /**
         * Returns the smallest number greater than or equal to its numeric argument.
        * @param x A numeric expression.
        */
        ceil(x: number): number;
        /**
         * Returns the cosine of a number.
        * @param x A numeric expression that contains an angle measured in radians.
        */
        cos(x: number): number;
        /**
         * Returns e (the base of natural logarithms) raised to a power.
        * @param x A numeric expression representing the power of e.
        */
        exp(x: number): number;
        /**
         * Returns the greatest number less than or equal to its numeric argument.
        * @param x A numeric expression.
        */
        floor(x: number): number;
        /**
         * Returns the natural logarithm (base e) of a number.
        * @param x A numeric expression.
        */
        log(x: number): number;
        /**
         * Returns the larger of a set of supplied numeric expressions.
        * @param values Numeric expressions to be evaluated.
        */
        max(...values: Array<number>): number;
        /**
         * Returns the smaller of a set of supplied numeric expressions.
        * @param values Numeric expressions to be evaluated.
        */
        min(...values: number[]): number;
        /**
         * Returns the value of a base expression taken to a specified power.
        * @param x The base value of the expression.
        * @param y The exponent value of the expression.
        */
        pow(x: number, y: number): number;
        /** Returns a pseudorandom number between 0 and 1. */
        random(): number;
        /**
         * Returns a supplied numeric expression rounded to the nearest number.
        * @param x The value to be rounded to the nearest number.
        */
        round(x: number): number;
        /**
         * Returns the sine of a number.
        * @param x A numeric expression that contains an angle measured in radians.
        */
        sin(x: number): number;
        /**
         * Returns the square root of a number.
        * @param x A numeric expression.
        */
        sqrt(x: number): number;
        /**
         * Returns the tangent of a number.
        * @param x A numeric expression that contains an angle measured in radians.
        */
        tan(x: number): number;
    }
    /** An intrinsic object that provides basic mathematics functionality and constants. */
    const Math: Math;

    /** Enables basic storage and retrieval of dates and times. */
    interface Date {
        /** Returns a string representation of a date. The format of the string depends on the locale. */
        toString(): string;
        /** Returns a date as a string value. */
        toDateString(): string;
        /** Returns a time as a string value. */
        toTimeString(): string;
        /** Returns a value as a string value appropriate to the host environment's current locale. */
        toLocaleString(): string;
        /** Returns a date as a string value appropriate to the host environment's current locale. */
        toLocaleDateString(): string;
        /** Returns a time as a string value appropriate to the host environment's current locale. */
        toLocaleTimeString(): string;
        /** Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC. */
        valueOf(): number;
        /** Gets the time value in milliseconds. */
        getTime(): number;
        /** Gets the year, using local time. */
        getFullYear(): number;
        /** Gets the year using Universal Coordinated Time (UTC). */
        getUTCFullYear(): number;
        /** Gets the month, using local time. */
        getMonth(): number;
        /** Gets the month of a Date object using Universal Coordinated Time (UTC). */
        getUTCMonth(): number;
        /** Gets the day-of-the-month, using local time. */
        getDate(): number;
        /** Gets the day-of-the-month, using Universal Coordinated Time (UTC). */
        getUTCDate(): number;
        /** Gets the day of the week, using local time. */
        getDay(): number;
        /** Gets the day of the week using Universal Coordinated Time (UTC). */
        getUTCDay(): number;
        /** Gets the hours in a date, using local time. */
        getHours(): number;
        /** Gets the hours value in a Date object using Universal Coordinated Time (UTC). */
        getUTCHours(): number;
        /** Gets the minutes of a Date object, using local time. */
        getMinutes(): number;
        /** Gets the minutes of a Date object using Universal Coordinated Time (UTC). */
        getUTCMinutes(): number;
        /** Gets the seconds of a Date object, using local time. */
        getSeconds(): number;
        /** Gets the seconds of a Date object using Universal Coordinated Time (UTC). */
        getUTCSeconds(): number;
        /** Gets the milliseconds of a Date, using local time. */
        getMilliseconds(): number;
        /** Gets the milliseconds of a Date object using Universal Coordinated Time (UTC). */
        getUTCMilliseconds(): number;
        /** Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC). */
        getTimezoneOffset(): number;
        /**
         * Sets the date and time value in the Date object.
        * @param time A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT.
        */
        setTime(time: number): number;
        /**
         * Sets the milliseconds value in the Date object using local time.
        * @param ms A numeric value equal to the millisecond value.
        */
        setMilliseconds(ms: number): number;
        /**
         * Sets the milliseconds value in the Date object using Universal Coordinated Time (UTC).
        * @param ms A numeric value equal to the millisecond value.
        */
        setUTCMilliseconds(ms: number): number;

        /**
         * Sets the seconds value in the Date object using local time.
        * @param sec A numeric value equal to the seconds value.
        * @param ms A numeric value equal to the milliseconds value.
        */
        setSeconds(sec: number, ms?: number): number;
        /**
         * Sets the seconds value in the Date object using Universal Coordinated Time (UTC).
        * @param sec A numeric value equal to the seconds value.
        * @param ms A numeric value equal to the milliseconds value.
        */
        setUTCSeconds(sec: number, ms?: number): number;
        /**
         * Sets the minutes value in the Date object using local time.
        * @param min A numeric value equal to the minutes value.
        * @param sec A numeric value equal to the seconds value.
        * @param ms A numeric value equal to the milliseconds value.
        */
        setMinutes(min: number, sec?: number, ms?: number): number;
        /**
         * Sets the minutes value in the Date object using Universal Coordinated Time (UTC).
        * @param min A numeric value equal to the minutes value.
        * @param sec A numeric value equal to the seconds value.
        * @param ms A numeric value equal to the milliseconds value.
        */
        setUTCMinutes(min: number, sec?: number, ms?: number): number;
        /**
         * Sets the hour value in the Date object using local time.
        * @param hours A numeric value equal to the hours value.
        * @param min A numeric value equal to the minutes value.
        * @param sec A numeric value equal to the seconds value.
        * @param ms A numeric value equal to the milliseconds value.
        */
        setHours(hours: number, min?: number, sec?: number, ms?: number): number;
        /**
         * Sets the hours value in the Date object using Universal Coordinated Time (UTC).
        * @param hours A numeric value equal to the hours value.
        * @param min A numeric value equal to the minutes value.
        * @param sec A numeric value equal to the seconds value.
        * @param ms A numeric value equal to the milliseconds value.
        */
        setUTCHours(hours: number, min?: number, sec?: number, ms?: number): number;
        /**
         * Sets the numeric day-of-the-month value of the Date object using local time.
        * @param date A numeric value equal to the day of the month.
        */
        setDate(date: number): number;
        /**
         * Sets the numeric day of the month in the Date object using Universal Coordinated Time (UTC).
        * @param date A numeric value equal to the day of the month.
        */
        setUTCDate(date: number): number;
        /**
         * Sets the month value in the Date object using local time.
        * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
        * @param date A numeric value representing the day of the month. If this value is not supplied, the value from a call to the getDate method is used.
        */
        setMonth(month: number, date?: number): number;
        /**
         * Sets the month value in the Date object using Universal Coordinated Time (UTC).
        * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
        * @param date A numeric value representing the day of the month. If it is not supplied, the value from a call to the getUTCDate method is used.
        */
        setUTCMonth(month: number, date?: number): number;
        /**
         * Sets the year of the Date object using local time.
        * @param year A numeric value for the year.
        * @param month A zero-based numeric value for the month (0 for January, 11 for December). Must be specified if numDate is specified.
        * @param date A numeric value equal for the day of the month.
        */
        setFullYear(year: number, month?: number, date?: number): number;
        /**
         * Sets the year value in the Date object using Universal Coordinated Time (UTC).
        * @param year A numeric value equal to the year.
        * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. Must be supplied if numDate is supplied.
        * @param date A numeric value equal to the day of the month.
        */
        setUTCFullYear(year: number, month?: number, date?: number): number;
        /** Returns a date converted to a string using Universal Coordinated Time (UTC). */
        toUTCString(): string;
        /** Returns a date as a string value in ISO format. */
        toISOString(): string;
        /** Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization. */
        toJSON(key?: any): string;
    }

    interface DateConstructor {
        new(): Date;
        new(value: number): Date;
        new(value: string): Date;
        new(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date;
        (): string;
        readonly prototype: Date;
        /**
         * Parses a string containing a date, and returns the number of milliseconds between that date and midnight, January 1, 1970.
        * @param s A date string
        */
        parse(s: string): number;
        /**
         * Returns the number of milliseconds between midnight, January 1, 1970 Universal Coordinated Time (UTC) (or GMT) and the specified date.
        * @param year The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.
        * @param month The month as an number between 0 and 11 (January to December).
        * @param date The date as an number between 1 and 31.
        * @param hours Must be supplied if minutes is supplied. An number from 0 to 23 (midnight to 11pm) that specifies the hour.
        * @param minutes Must be supplied if seconds is supplied. An number from 0 to 59 that specifies the minutes.
        * @param seconds Must be supplied if milliseconds is supplied. An number from 0 to 59 that specifies the seconds.
        * @param ms An number from 0 to 999 that specifies the milliseconds.
        */
        UTC(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): number;
        now(): number;
    }

    const Date: DateConstructor;

    interface RegExpMatchArray extends Array<string> {
        index?: number;
        input?: string;
    }

    interface RegExpExecArray extends Array<string> {
        index: number;
        input: string;
    }

    interface RegExp {
        /**
         * Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.
        * @param string The String object or string literal on which to perform the search.
        */
        exec(string: string): RegExpExecArray | null;

        /**
         * Returns a Boolean value that indicates whether or not a pattern exists in a searched string.
        * @param string String on which to perform the search.
        */
        test(string: string): boolean;

        /** Returns a copy of the text of the regular expression pattern. Read-only. The regExp argument is a Regular expression object. It can be a variable name or a literal. */
        readonly source: string;

        /** Returns a Boolean value indicating the state of the global flag (g) used with a regular expression. Default is false. Read-only. */
        readonly global: boolean;

        /** Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only. */
        readonly ignoreCase: boolean;

        /** Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only. */
        readonly multiline: boolean;

        lastIndex: number;

        // Non-standard extensions
        compile(): this;
    }

    interface RegExpConstructor {
        new(pattern: RegExp | string): RegExp;
        new(pattern: string, flags?: string): RegExp;
        (pattern: RegExp | string): RegExp;
        (pattern: string, flags?: string): RegExp;
        readonly prototype: RegExp;

        // Non-standard extensions
        $1: string;
        $2: string;
        $3: string;
        $4: string;
        $5: string;
        $6: string;
        $7: string;
        $8: string;
        $9: string;
        lastMatch: string;
    }

    const RegExp: RegExpConstructor;

    interface Error {
        name: string;
        message: string;
        stack?: string;
    }

    interface ErrorConstructor {
        new(message?: string): Error;
        (message?: string): Error;
        readonly prototype: Error;
    }

    const Error: ErrorConstructor;

    interface EvalError extends Error {
    }

    interface EvalErrorConstructor {
        new(message?: string): EvalError;
        (message?: string): EvalError;
        readonly prototype: EvalError;
    }

    const EvalError: EvalErrorConstructor;

    interface RangeError extends Error {
    }

    interface RangeErrorConstructor {
        new(message?: string): RangeError;
        (message?: string): RangeError;
        readonly prototype: RangeError;
    }

    const RangeError: RangeErrorConstructor;

    interface ReferenceError extends Error {
    }

    interface ReferenceErrorConstructor {
        new(message?: string): ReferenceError;
        (message?: string): ReferenceError;
        readonly prototype: ReferenceError;
    }

    const ReferenceError: ReferenceErrorConstructor;

    interface SyntaxError extends Error {
    }

    interface SyntaxErrorConstructor {
        new(message?: string): SyntaxError;
        (message?: string): SyntaxError;
        readonly prototype: SyntaxError;
    }

    const SyntaxError: SyntaxErrorConstructor;

    interface TypeError extends Error {
    }

    interface TypeErrorConstructor {
        new(message?: string): TypeError;
        (message?: string): TypeError;
        readonly prototype: TypeError;
    }

    const TypeError: TypeErrorConstructor;

    interface URIError extends Error {
    }

    interface URIErrorConstructor {
        new(message?: string): URIError;
        (message?: string): URIError;
        readonly prototype: URIError;
    }

    const URIError: URIErrorConstructor;

    interface JSON {
        /**
         * Converts a JavaScript Object Notation (JSON) string into an object.
        * @param text A valid JSON string.
        * @param reviver A function that transforms the results. This function is called for each member of the object.
        * If a member contains nested objects, the nested objects are transformed before the parent object is.
        */
        parse(text: string, reviver?: (key: any, value: any) => any): any;
        /**
         * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
        * @param value A JavaScript value, usually an object or array, to be converted.
        * @param replacer A function that transforms the results.
        * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
        */
        stringify(value: any, replacer?: (key: string, value: any) => any, space?: string | number): string;
        /**
         * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
        * @param value A JavaScript value, usually an object or array, to be converted.
        * @param replacer An array of strings and numbers that acts as a approved list for selecting the object properties that will be stringified.
        * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
        */
        stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string;
    }

    /**
     * An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.
    */
    const JSON: JSON;


    interface Array<T> {
        /**
         * Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.
        */
        length: number;
        /**
         * Returns a string representation of an array.
        */
        toString(): string;
        toLocaleString(): string;
        /**
         * Appends new elements to an array, and returns the new length of the array.
        * @param items New elements of the Array.
        */
        push(...items: T[]): number;
        /**
         * Removes the last element from an array and returns it.
        */
        pop(): T | undefined;
        /**
         * Combines two or more arrays.
        * @param items Additional items to add to the end of array1.
        */
        concat(...items: T[][]): T[];
        /**
         * Combines two or more arrays.
        * @param items Additional items to add to the end of array1.
        */
        concat(...items: (T | T[])[]): T[];
        /**
         * Adds all the elements of an array separated by the specified separator string.
        * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
        */
        join(separator?: string): string;
        /**
         * Reverses the elements in an Array.
        */
        reverse(): T[];
        /**
         * Removes the first element from an array and returns it.
        */
        shift(): T | undefined;
        /**
         * Returns a section of an array.
        * @param start The beginning of the specified portion of the array.
        * @param end The end of the specified portion of the array.
        */
        slice(start?: number, end?: number): T[];
        /**
         * Sorts an array.
        * @param compareFn The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order.
        */
        sort(compareFn?: (a: T, b: T) => number): this;
        /**
         * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
        * @param start The zero-based location in the array from which to start removing elements.
        * @param deleteCount The number of elements to remove.
        */
        splice(start: number, deleteCount?: number): T[];
        /**
         * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
        * @param start The zero-based location in the array from which to start removing elements.
        * @param deleteCount The number of elements to remove.
        * @param items Elements to insert into the array in place of the deleted elements.
        */
        splice(start: number, deleteCount: number, ...items: T[]): T[];
        /**
         * Inserts new elements at the start of an array.
        * @param items  Elements to insert at the start of the Array.
        */
        unshift(...items: T[]): number;
        /**
         * Returns the index of the first occurrence of a value in an array.
        * @param searchElement The value to locate in the array.
        * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
        */
        indexOf(searchElement: T, fromIndex?: number): number;
        /**
         * Returns the index of the last occurrence of a specified value in an array.
        * @param searchElement The value to locate in the array.
        * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
        */
        lastIndexOf(searchElement: T, fromIndex?: number): number;
        /**
         * Determines whether all the members of an array satisfy the specified test.
        * @param callbackfn A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array.
        * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
        */
        every(callbackfn: (this: void, value: T, index: number, array: T[]) => boolean): boolean;
        every(callbackfn: (this: void, value: T, index: number, array: T[]) => boolean, thisArg: undefined): boolean;
        every<Z>(callbackfn: (this: Z, value: T, index: number, array: T[]) => boolean, thisArg: Z): boolean;
        /**
         * Determines whether the specified callback function returns true for any element of an array.
        * @param callbackfn A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array.
        * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
        */
        some(callbackfn: (this: void, value: T, index: number, array: T[]) => boolean): boolean;
        some(callbackfn: (this: void, value: T, index: number, array: T[]) => boolean, thisArg: undefined): boolean;
        some<Z>(callbackfn: (this: Z, value: T, index: number, array: T[]) => boolean, thisArg: Z): boolean;
        /**
         * Performs the specified action for each element in an array.
        * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
        * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
        */
        forEach(callbackfn: (this: void, value: T, index: number, array: T[]) => void): void;
        forEach(callbackfn: (this: void, value: T, index: number, array: T[]) => void, thisArg: undefined): void;
        forEach<Z>(callbackfn: (this: Z, value: T, index: number, array: T[]) => void, thisArg: Z): void;
        /**
         * Calls a defined callback function on each element of an array, and returns an array that contains the results.
        * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
        * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
        */
        map<U>(this: [T, T, T, T, T], callbackfn: (this: void, value: T, index: number, array: T[]) => U): [U, U, U, U, U];
        map<U>(this: [T, T, T, T, T], callbackfn: (this: void, value: T, index: number, array: T[]) => U, thisArg: undefined): [U, U, U, U, U];
        map<Z, U>(this: [T, T, T, T, T], callbackfn: (this: Z, value: T, index: number, array: T[]) => U, thisArg: Z): [U, U, U, U, U];
        /**
         * Calls a defined callback function on each element of an array, and returns an array that contains the results.
        * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
        * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
        */
        map<U>(this: [T, T, T, T], callbackfn: (this: void, value: T, index: number, array: T[]) => U): [U, U, U, U];
        map<U>(this: [T, T, T, T], callbackfn: (this: void, value: T, index: number, array: T[]) => U, thisArg: undefined): [U, U, U, U];
        map<Z, U>(this: [T, T, T, T], callbackfn: (this: Z, value: T, index: number, array: T[]) => U, thisArg: Z): [U, U, U, U];
        /**
         * Calls a defined callback function on each element of an array, and returns an array that contains the results.
        * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
        * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
        */
        map<U>(this: [T, T, T], callbackfn: (this: void, value: T, index: number, array: T[]) => U): [U, U, U];
        map<U>(this: [T, T, T], callbackfn: (this: void, value: T, index: number, array: T[]) => U, thisArg: undefined): [U, U, U];
        map<Z, U>(this: [T, T, T], callbackfn: (this: Z, value: T, index: number, array: T[]) => U, thisArg: Z): [U, U, U];
        /**
         * Calls a defined callback function on each element of an array, and returns an array that contains the results.
        * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
        * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
        */
        map<U>(this: [T, T], callbackfn: (this: void, value: T, index: number, array: T[]) => U): [U, U];
        map<U>(this: [T, T], callbackfn: (this: void, value: T, index: number, array: T[]) => U, thisArg: undefined): [U, U];
        map<Z, U>(this: [T, T], callbackfn: (this: Z, value: T, index: number, array: T[]) => U, thisArg: Z): [U, U];
        /**
         * Calls a defined callback function on each element of an array, and returns an array that contains the results.
        * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
        * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
        */
        map<U>(callbackfn: (this: void, value: T, index: number, array: T[]) => U): U[];
        map<U>(callbackfn: (this: void, value: T, index: number, array: T[]) => U, thisArg: undefined): U[];
        map<Z, U>(callbackfn: (this: Z, value: T, index: number, array: T[]) => U, thisArg: Z): U[];
        /**
         * Returns the elements of an array that meet the condition specified in a callback function.
        * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
        * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
        */
        filter(callbackfn: (this: void, value: T, index: number, array: T[]) => any): T[];
        filter(callbackfn: (this: void, value: T, index: number, array: T[]) => any, thisArg: undefined): T[];
        filter<Z>(callbackfn: (this: Z, value: T, index: number, array: T[]) => any, thisArg: Z): T[];
        /**
         * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
        * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
        * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
        */
        reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): T;
        /**
         * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
        * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
        * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
        */
        reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
        /**
         * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
        * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
        * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
        */
        reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): T;
        /**
         * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
        * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
        * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
        */
        reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;

        [n: number]: T;
    }

    interface ArrayConstructor {
        new(arrayLength?: number): any[];
        new <T>(arrayLength: number): T[];
        new <T>(...items: T[]): T[];
        (arrayLength?: number): any[];
        <T>(arrayLength: number): T[];
        <T>(...items: T[]): T[];
        isArray(arg: any): arg is Array<any>;
        readonly prototype: Array<any>;
    }

    const Array: ArrayConstructor;

    /**
     * Marker for contextual 'this' type
     */
    interface ThisType<T> { }

    /**
     * An XMLList object is an ordered collection of properties. A XMLList object represents a XML document, an XML fragment, or an arbitrary collection of XML objects. An individual XML object is the same thing as an XMLList containing only that XML object. All operations available for the XML object are also available for an XMLList object that contains exactly one XML object.
     */
    class XMLList {
        constructor(arg: any)

        /**
         * Returns the attribute associated with this XMLList object that is identified by the specified name.
         * @param attributeName
         */
        attribute(attributeName: string): XMLList

        /**
         * Returns an XMList of the attributes in this XMLList Object.
         */
        attributes(): XMLList

        /**
         * Returns the children of the XMLList object based on the specified property name.
         * @param propertyName
         */
        child(propertyName: object): XMLList

        /**
         * Returns an XMLList containing the children of this XMLList object, maintaing the sequence in which they appear.
         */
        children(): XMLList

        /**
         * Returns the properties of the XMLList object that contain comments.
         */
        comments(): XMLList

        /**
         * Returns true if this XMLList object contains the specified XML object, false otherwise.
         * @param value
         */
        contains(value: XML): boolean

        /**
         * Returns a deep copy of the this XMLList object.
         */
        copy(): XMLList

        /**
         * Calls the descendants() method of each XML object in this XMLList object and returns an XMLList containing the results concatenated in order.
         */
        descendants(): XMLList

        /**
         * Calls the descendants(name) method of each XML object in this XMLList object and returns an XMLList containing the results concatenated in order.
         * @param name
         */
        descendants(name: string): XMLList

        /**
         * Calls the elements() method in each XML object in this XMLList object and returns an XMLList containing the results concatenated in order.
         */
        elements(): XMLList

        /**
         * Calls the elements(name) method in each of the XML objects in this XMLList object and returns an XMLList containing the results concatenated in order.
         * @param name
         */
        elements(name: object): XMLList

        /**
         * Returns a Boolean value indicating whether this XMLList object contains complex content.
         */
        hasComplexContent(): boolean

        /**
         * Returns a Boolean value indicating whether this object has the property specified by prop.
         * @param prop
         */
        hasOwnProperty(prop: string): boolean

        /**
         * Returns the number of children in this XMLList object.
         */
        hasSimpleContent(): boolean

        /**
         * Puts all text nodes in this XMLList, all the XML objects it contains and the descendents of all the XML objects it contains into a normal form by merging adjacent text nodes and eliminating empty text nodes.
         */
        normalize(): XMLList

        /**
         * Returns the parent of the XMLList object or null if the XMLList object does not have a parent.
         */
        parent(): object | null

        /**
         * Calls the processingInstructions() method of each XML object in this XMLList object and returns an XMList containing the results in order.
         */
        processingInstructions(): XMLList

        /**
         * Calls the processingInstructions(name) method of each XML object in this XMLList object and returns an XMList containing the results in order.
         * @param name
         */
        processingInstructions(name: string): XMLList

        /**
         * Returns a Boolean indicating whether the specified property will be included in the set of properties iterated over when this XML object is used in a for..in statement.
         * @param property
         */
        propertyIsEnumerable(property: string): boolean

        /**
         * Calls the text() method of each XML object contained in this XMLList object and returns an XMLList containing the results concatenated in order.
         */
        text(): XMLList

        /**
         * Returns the String representation of this XMLList object.
         */
        toString(): string

        /**
         * Returns an XML-encoded String representation of the XMLList object by calling the toXMLString method on each property contained within this XMLList object.
         */
        toXMLString(): string

        /**
         * Returns this XMLList object.
         */
        valueOf(): XMLList

    }
    /**
     * The XML object contains functions and properties for working with XML instances. The XML object implements the powerful XML-handling standards defined in the ECMA-357 specification (known as "E4X").
Use the toXMLString() method to return a string representation of the XML object regardless of whether the XML object has simple content or complex content.
     */
    class XML {
        /**
         * The ignoreComments property determines whether or not XML comments are ignored when XML objects parse the source XML data.
         */
        static ignoreComments: boolean

        /**
         * The ignoreProcessingInstructions property determines whether or not XML processing instructions are ignored when XML objects parse the source XML data.
         */
        static ignoreProcessingInstructions: boolean

        /**
         * The ignoreWhitespace property determines whether or not white space characters at the beginning and end of text nodes are ignored during parsing.
         */
        static ignoreWhitespace: boolean

        /**
         * The prettyIndent property determines the amount of indentation applied by the toString() and toXMLString() methods when the XML.prettyPrinting property is set to true.
         */
        static prettyIndent: number

        /**
         * The prettyPrinting property determines whether the toString() and toXMLString() methods normalize white space characters between some tags.
         */
        static prettyPrinting: boolean

        constructor(value?: any)

        /**
         * Adds a namespace to the set of in-scope namespaces for the XML object.
         * @param ns
         */
        addNamespace(ns: Object): XML

        /**
         * Appends the specified child to the end of the object's properties.
         * @param child
         */
        appendChild(child: Object): XML

        /**
         * Returns the attribute associated with this XML object that is identified by the specified name.
         * @param attributeName
         */
        attribute(attributeName: string): XMLList

        /**
         * Returns an XMList of the attributes in this XML Object.
         */
        attributes(): XMLList

        /**
         * Returns the children of the XML object based on the specified property name.
         * @param propertyName
         */
        child(propertyName: object): XMLList

        /**
         * Identifies the zero-based index of this XML object within the context of its parent, or -1 if this object has no parent.
         */
        childIndex(): number

        /**
         * Returns an XMLList containing the children of this XML object, maintaing the sequence in which they appear.
         */
        children(): XMLList

        /**
         * Returns the properties of the XML object that contain comments.
         */
        comments(): XMLList

        /**
         * Returns true if this XML object contains the specified XML object, false otherwise.
         * @param value
         */
        contains(value: XML): boolean

        /**
         * Returns a copy of the this XML object including duplicate copies of the entire tree of nodes.
         */
        copy(): XML

        /**
         * Returns a new Object with the following properties set to the default values: ignoreComments, ignoreProcessingInstructions, ignoreWhitespace, prettyIndent, and prettyPrinting.
         */
        static defaultSettings(): Object

        /**
         * Returns all descendents of the XML object.
         */
        descendants(): XMLList

        /**
         * Returns all descendents of the XML object that have the specified name parameter.
         * @param name
         */
        descendants(name: string): XMLList

        /**
         * Returns a list of all of the elements of the XML object.
         */
        elements(): XMLList

        /**
         * Returns a list of the elements of the XML object using the specified name to constrain the list.
         * @param name
         */
        elements(name: Object): XMLList

        /**
         * Returns a Boolean value indicating whether this XML object contains complex content.
         */
        hasComplexContent(): boolean

        /**
         * Returns a Boolean value indicating whether this object has the property specified by prop.
         * @param prop
         */
        hasOwnProperty(prop: string): boolean

        /**
         * Returns a Boolean value indicating whether this XML object contains simple content.
         */
        hasSimpleContent(): boolean

        /**
         * Returns an Array of Namespace objects representing the namespaces in scope for this XML object in the context of its parent.
         */
        inScopeNamespaces(): Array<Namespace>

        /**
         * Inserts the specified child2 after the specified child1 in this XML object and returns this XML object.
         * @param child1
         * @param child2
         */
        insertChildAfter(child1: Object, child2: Object): XML

        /**
         * Inserts the specified child2 before the specified child1 in this XML object and returns this XML object.
         * @param child1
         * @param child2
         */
        insertChildBefore(child1: Object, child2: Object): XML

        /**
         * Returns a value of 1 for XML objects.
         */
        length(): number
        /**
         * Returns the local name portion of the qualified name of the XML object.
         */
        localName(): Object
        /**
         *         Returns the qualified name for the XML object.
         */
        name(): Object

        /**
         * Returns the namespace associated with the qualified name of this XML object.
         */
        namespace(): Object

        /**
         * Returns the namespace that matches the specified prefix and that is in scope for the XML object.
         * @param prefix
         */
        namespace(prefix: string): Object

        /**
         * Returns an Array of namespace declarations associated with the XML Obnject in the context of its parent.
         */
        namespaceDeclarations(): Array<Namespace>

        /**
         * Returns the type of the XML object, such as text, comment, processing-instruction, or attribute.
         */
        nodeKind(): string

        /**
         * Merges adjacent text nodes and eliminates and eliminates empty text nodes for this XML object and all its descendents.
         */
        normalize(): XML

        /**
         * Returns the parent of the XML object or null if the XML object does not have a parent.
         */
        parent(): Object

        /**
         * Inserts the specified child into this XML object prior to its existing XML properties and then returns this XML object.
         * @param value
         */
        prependChild(value: Object): XML

        /**
         * Returns an XMLList containing all the children of this XML object that are processing-instructions.
         */
        processingInstructions(): XMLList

        /**
         * Returns an XMLList containing all the children of this XML object that are processing-instructions with the specified name.
         * @param name
         */
        processingInstructions(name: string): XMLList

        /**
         * Returns a Boolean indicating whether the specified property will be included in the set of properties iterated over when this XML object is used in a for..in statement.
         * @param property
         */
        propertyIsEnumerable(property: string): boolean

        /**
         * Removes the specified namespace from the in scope namespaces of this object and all its descendents, then returns a copy of this XML object.
         * @param ns
         */
        removeNamespace(ns: Namespace): XML

        /**
         * Replaces the XML properties of this XML object specified by propertyName with value and returns this updated XML object.
         * @param propertyName
         * @param value
         */
        replace(propertyName: string, value: Object): XML

        /**
         * Replaces the XML properties of this XML object with a new set of XML properties from value.
         * @param value
         */
        setChildren(value: Object): XML

        /**
         * Replaces the local name of this XML object with a string constructed from the specified name.
         * @param name
         */
        setLocalName(name: string): void

        /**
         * Replaces the name of this XML object with a QName or AttributeName constructed from the specified name.
         * @param name
         */
        setName(name: string): void

        /**
         * Replaces the namespace associated with the name of this XML object with the specified namespace.
         * @param ns
         */
        setNamespace(ns: Namespace): void

        /**
         * Restores the default settings for the following XML properties:
         *
        - XML.ignoreComments = true
        - XML.ignoreProcessingInstructions = true
        - XML.ignoreWhitespace = true
        - XML.prettyIndent = 2
        - XML.prettyPrinting = true
         */
        static setSettings(): void

        /**
         * Updates the collection of global XML properties: ignoreComments, ignoreProcessingInstructions, ignoreWhitespace, prettyPrinting, prettyIndent, and prettyPrinting.
         * @param settings
         */
        static setSettings(settings: Object): void

        /**
         * Returns the collection of global XML properties: ignoreComments, ignoreProcessingInstructions, ignoreWhitespace, prettyPrinting, prettyIndent, and prettyPrinting.
         */
        static settings(): Object

        /**
         * Returns returns an XMLList containing all XML properties of this XML object that represent XML text nodes.
         */
        text(): XMLList

        /**
         * Returns the String representation of the XML object.
         */
        toString(): string

        /**
         * Returns a XML-encoded String representation of the XML object, including tag and attributed delimiters.
         */
        toXMLString(): string

        /**
         * Returns this XML object.
         */
        valueOf(): XML

    }

    /**
     * Namespace objects represent XML namespaces and provide an association between a namespace prefix and a Unique Resource Identifier (URI). The prefix is either the undefined value or a string value that may be used to reference the namespace within the lexical representation of an XML value. When an XML object containing a namespace with an undefined prefix is encoded as XML by the method toXMLString(), the implementation will automatically generate a prefix. The URI is a string value used to uniquely identify the namespace.
     */
    class Namespace {
        /**
         * The prefix of the Namespace object.
         */
        readonly prefix: string

        /**
         * The Uniform Resource Identifier (URI) of the Namespace object.
         */
        uri: string

        /**
         * Constructs a simple namespace where the uri and prefix properties are set to an empty string.
         */
        constructor();

        /**
         * Constructs a Namespace object and assigns values to the uri and prefix properties based on the type of uriValue.
         */
        constructor(uriValue: string);

        /**
         * Constructs a Namespace object and assigns values to the uri and prefix properties.
         * @param prefixValue
         * @param uriValue
         */
        constructor(prefixValue: string, uriValue: string)

        /**
         * Returns the prefix of the Namespace object.
         */
        getPrefix(): string

        /**
         * Returns the Uniform Resource Identifier (URI) of the Namespace object.
         */
        getUri(): string

        /**
         * Returns a string representation of this Namespace object.
         */
        toString(): string


    }
}
