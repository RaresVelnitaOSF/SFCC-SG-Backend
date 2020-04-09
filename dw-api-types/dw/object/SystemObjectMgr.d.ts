import ObjectTypeDefinition = require('./ObjectTypeDefinition');
import SeekableIterator = require('../util/SeekableIterator');
import Profile = require('../customer/Profile');
import Store = require('../catalog/Store');
import SourceCodeGroup = require('../campaign/SourceCodeGroup');
import Order = require('../order/Order');
import ProductList = require('../customer/ProductList');
import GiftCertificate = require('../order/GiftCertificate');
import Map = require('../util/Map');

// todo - implement

/**
 * Manager class which provides methods for querying for system objects with meta data using the Commerce Cloud Digital query language. See individual API methods for details on the query language.

Note: Other manager classes such as CustomerMgr, ProductMgr, etc provide more specific and fine-grained querying methods that can not be achieved using the general query language.

To search for custom objects, use CustomObjectMgr. Note: this class allows access to sensitive information through operations that retrieve the Profile and Order objects. Pay attention to appropriate legal and regulatory requirements related to this data.
 */
declare class SystemObjectMgr {
    /**
     * Returns the object type definition for the given system object type.
     * @param type
     */
    static describe(type : string) : ObjectTypeDefinition;

    /**
     * Returns all system objects of a specific type. The following system object types are supported:

    1. GiftCertificate
    2. Order
    3. Profile
    4. SourceCodeGroup
    5. Store
    6. ProductList

    The method throws an exception in case of another system type.

    It is strongly recommended to call close() on the returned SeekableIterator if not all of its elements are being retrieved. This will ensure the proper cleanup of system resources.
     * @param type - The name of the system object type. If a matching type definition cannot be found for the given type a MetaDataException will be thrown.
     */
    static getAllSystemObjects(type : 'Profile') : SeekableIterator<Profile>
    static getAllSystemObjects(type : 'Store') : SeekableIterator<Store>
    static getAllSystemObjects(type : 'SourceCodeGroup') : SeekableIterator<SourceCodeGroup>
    static getAllSystemObjects(type : 'Order') : SeekableIterator<Order>
    static getAllSystemObjects(type : 'ProductList') : SeekableIterator<ProductList>
    static getAllSystemObjects(type : 'GiftCertificate') : SeekableIterator<GiftCertificate>


    /**
     * Searches for a single system object instance.
     */
    static querySystemObject(type : 'Profile', queryString : string, ...args : Object[]) : Profile | null;
    static querySystemObject(type : 'Store', queryString : string, ...args : Object[]) : Store | null;
    static querySystemObject(type : 'SourceCodeGroup', queryString : string, ...args : Object[]) : SourceCodeGroup | null;
    static querySystemObject(type : 'Order', queryString : string, ...args : Object[]) : Order | null;
    static querySystemObject(type : 'ProductList', queryString : string, ...args : Object[]) : ProductList | null;
    static querySystemObject(type : 'GiftCertificate', queryString : string, ...args : Object[]) : GiftCertificate | null;

    /**
     * Searches for system object instances.
    */ 
    static querySystemObjects(type : 'Profile', queryString : string, sortString : string | null, ...args : Object[]) : SeekableIterator<Profile>
    static querySystemObjects(type : 'Store', queryString : string, sortString : string | null, ...args : Object[]) : SeekableIterator<Store>
    static querySystemObjects(type : 'SourceCodeGroup', queryString : string, sortString : string | null, ...args : Object[]) : SeekableIterator<SourceCodeGroup>
    static querySystemObjects(type : 'Order', queryString : string, sortString : string | null, ...args : Object[]) : SeekableIterator<Order>
    static querySystemObjects(type : 'ProductList', queryString : string, sortString : string | null, ...args : Object[]) : SeekableIterator<ProductList>
    static querySystemObjects(type : 'GiftCertificate', queryString : string, sortString : string | null, ...args : Object[]) : SeekableIterator<GiftCertificate>

    /**
     * Searches for system object instances.
     */
    static querySystemObjects(type : 'Profile', queryAttributes : Map<string, Object>, sortString : string | null) : SeekableIterator<Profile>
    static querySystemObjects(type : 'Store', queryAttributes : Map<string, Object>, sortString : string | null) : SeekableIterator<Store>
    static querySystemObjects(type : 'SourceCodeGroup', queryAttributes : Map<string, Object>, sortString : string | null) : SeekableIterator<SourceCodeGroup>
    static querySystemObjects(type : 'Order', queryAttributes : Map<string, Object>, sortString : string | null) : SeekableIterator<Order>
    static querySystemObjects(type : 'ProductList', queryAttributes : Map<string, Object>, sortString : string | null) : SeekableIterator<ProductList>
    static querySystemObjects(type : 'GiftCertificate', queryAttributes : Map<string, Object>, sortString : string | null) : SeekableIterator<GiftCertificate>

}
export = SystemObjectMgr;
