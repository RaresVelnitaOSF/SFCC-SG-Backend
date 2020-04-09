import ExtensibleObject = require('../object/ExtensibleObject')
import ProductActiveData = require('./ProductActiveData')
import Collection = require('../util/Collection')
import Category = require('./Category')
import CategoryAssignment = require('./CategoryAssignment')
import ProductLink = require('./ProductLink')
import ProductAttributeModel = require('./ProductAttributeModel')
import ProductAvailabilityModel = require('./ProductAvailabilityModel')
import MarkupText = require('../content/MarkupText')
import Quantity = require('../value/Quantity')
import ProductOptionModel = require('./ProductOptionModel')
import Recommendation = require('./Recommendation')
import ProductPriceModel = require('./ProductPriceModel')
import Variant = require('./Variant')
import VariationGroup =  require('./VariationGroup')
import ProductVariationModel = require('./ProductVariationModel')
import Catalog = require('./Catalog')
import ProductInventoryList = require('./ProductInventoryList')
import MediaFile = require('../content/MediaFile')
import List = require('../util/List')
import CustomAttributes = require('../object/CustomAttributes');

declare global {
    module ICustomAttributes {
        interface Product extends CustomAttributes{
        }
    }
}

declare class Product extends ExtensibleObject<ICustomAttributes.Product> {
    activeData  :  ProductActiveData
    allCategories  :  Collection<Category>
    allCategoryAssignments: Collection<CategoryAssignment>
    allIncomingProductLinks  :  Collection<ProductLink>
    allProductLinks: Collection<ProductLink>
    assignedToSiteCatalog  :  boolean
    attributeModel  :  ProductAttributeModel
    availabilityModel  :  ProductAvailabilityModel
    brand  :  string
    bundle  :  boolean
    bundled  :  boolean
    bundledProducts  :  Collection<Product>
    bundles  :  Collection<Product>
    categories  :  Collection<Category>
    categorized  :  boolean
    categoryAssignments  :  Collection<CategoryAssignment>
    classificationCategory  :  Category
    EAN  :  string
    facebookEnabled  :  boolean
    ID  :  string
    incomingProductLinks  :  Collection<ProductLink>
    longDescription  :  MarkupText
    manufacturerName  :  string
    manufacturerSKU  :  string
    master  :  boolean
    minOrderQuantity  :  Quantity
    name  :  string
    online  :  boolean
    onlineCategories  :  Collection<Category>
    onlineFlag  :  boolean
    onlineFrom  :  Date
    onlineTo  :  Date
    optionModel  :  ProductOptionModel
    optionProduct  :  boolean
    orderableRecommendations  :  Collection<Recommendation>
    pageDescription  :  string
    pageKeywords  :  string
    pageTitle  :  string
    pageURL  :  string
    pinterestEnabled  :  boolean
    priceModel  :  ProductPriceModel
    primaryCategory  :  Category
    primaryCategoryAssignment  :  CategoryAssignment
    product  :  boolean
    productLinks  :  Collection<ProductLink>
    productSet  :  boolean
    productSetProduct  :  boolean
    productSetProducts  :  Collection<Product>
    recommendations  :  Collection<Recommendation>
    searchable  :  boolean
    searchableFlag  :  boolean
    searchPlacement  :  number
    searchRank  :  number
    shortDescription  :  MarkupText
    siteMapChangeFrequency  :  string
    siteMapPriority  :  number
    stepQuantity  :  Quantity
    storeReceiptName  :  string
    storeTaxClass  :  string
    taxClassID  :  string
    template  :  string
    unit  :  string
    UPC  :  string
    variant  :  boolean
    variants  :  Collection<Variant>
    variationGroup  :  boolean
    variationGroups  :  Collection<VariationGroup>
    variationModel  :  ProductVariationModel

    /**
     * Returns the active data for this product, for the current site.
     */
    getActiveData() : ProductActiveData

    /**
     * Returns a collection of all categories to which this product is assigned.
     */
    getAllCategories() : Collection<Category>

    /**
     * Returns all category assignments for this product in any catalog.
     */
    getAllCategoryAssignments() : Collection<CategoryAssignment>

    /**
     * Returns all incoming ProductLinks.
     */
    getAllIncomingProductLinks() : Collection<ProductLink>

    /**
     * Returns all incoming ProductLinks of a specific type.
     * @param type the type of ProductLinks to use.
     */
    getAllIncomingProductLinks(type : number) : Collection<ProductLink>

    /**
     * Returns all outgoing ProductLinks.
     */
    getAllProductLinks() : Collection<ProductLink>

    /**
     * Returns all outgoing ProductLinks of a specific type.
     * @param type the type of ProductLinks to fetch.
     */
    getAllProductLinks(type : number) : Collection<ProductLink>

    /**
     * Returns the outgoing recommendations for this product which belong to the specified catalog. The recommendations are sorted by their explicitly set order.
     * @param catalog the catalog containing the recommendations.
     */
    getAllRecommendations(catalog : Catalog) : Collection<Recommendation>

    /**
     * Returns the outgoing recommendations for this product which are of the specified type and which belong to the specified catalog. The recommendations are sorted by their explicitly set order.
     * @param catalog the catalog containing the recommendations
     * @param type the recommendation type.
     */
    getAllRecommendations(catalog : Catalog, type : number) : Collection<Recommendation>

    /**
     * Returns this product's ProductAttributeModel, which makes access to the product attribute information convenient. The model is calculated based on the product attributes assigned to this product's classification category (or any of it's ancestors) and the global attribute definitions for the system object type `Product`. If this product has no classification category, the attribute model is calculated on the global attribute definitions only. If this product is a variant, then the attribute model is calculated based on the classification category of its corresponding master product.
     */
    getAttributeModel() : ProductAttributeModel

    /**
     * Returns the availability model, which can be used to determine availability information for a product.
     */
    getAvailabilityModel() : ProductAvailabilityModel

    /**
     * Returns the availability model of the given inventory list, which can be used to determine availability information for a product.
     * @param list The inventory list to get the availability model for. Must not be null or an exception will be raised.
     */
    getAvailabilityModel(list : ProductInventoryList) : ProductAvailabilityModel

    /**
     * Returns the Brand of the product.
     */
    getBrand() : string

    /**
     * Returns the quantity of the specified product within the bundle. If the specified product is not part of the bundle, a 0 quantity is returned.
     * @param aProduct The product to determine the quantity for.
     */
    getBundledProductQuantity(aProduct : Product) : Quantity

    /**
     * Returns a collection containing all products that participate in the product bundle.
     */
    getBundledProducts() : Collection<Product>

    /**
     * Returns a collection of all bundles in which this product is included. The method only returns bundles assigned to the current site.
     */
    getBundles() : Collection<Product>

    /**
     * Returns a collection of all categories to which this product is assigned and which are also available through the current site.
     */
    getCategories() : Collection<Category>

    /**
     * Returns the category assignment for a specific category.
     * @param category the category to use when fetching assignments.
     */
    getCategoryAssignment(category : Category) : CategoryAssignment

    /**
     * Returns a collection of category assignments for this product in the current site catalog.
     */
    getCategoryAssignments() : Collection<CategoryAssignment>

    /**
     * Returns the classification category associated with this Product. A product has a single classification category which may or may not be in the site catalog. The classification category defines the attribute set of the product. See `getAttributeModel()` for how the classification category is used.
     */
    getClassificationCategory() : Category | null

    /**
     * Returns the European Article Number of the product.
     */
    getEAN() : string

    /**
     * Returns the ID of the product.

     */
    getID() : string

    /**
     * The method calls getImages(String) and returns the image at the specific index or first of ommited. If no image for specified index is available the method returns null.
     * @param viewtype
     * @param index
     */
    getImage(viewtype : string, index? : number) : MediaFile | null

    /**
     * Returns all images assigned to this product for a specific view type, e.g. all 'thumbnail' images. The images are returned in the order of their index number ascending. When called for a master the method returns the images specific to the master, which are typically the fall back images.
     * @param viewtype
     */
    getImages(viewtype : string) : List<MediaFile>

    /**
     * Returns incoming ProductLinks, where the source product is a site product.
     */
    getIncomingProductLinks() : Collection<ProductLink>

    /**
     * Returns incoming ProductLinks, where the source product is a site product of a specific type.
     * @param type
     */
    getIncomingProductLinks(type : number) : Collection<ProductLink>

    /**
     * Returns the product's long description in the current locale.
     */
    getLongDescription() : MarkupText | null

    /**
     * Returns the name of the product manufacturer.
     */
    getManufacturerName() : string

    /**
     * Returns the value of the manufacturer's stock keeping unit.
     */
    getManufacturerSKU() : string

    /**
     * Returns the minimum order quantity for this product.
     */
    getMinOrderQuantity() : Quantity

    /**
     * Returns the name of the product in the current locale.
     */
    getName() : string | null

    /**
     * Returns a collection of all currently online categories to which this product is assigned and which are also available through the current site. A category is currently online if its online flag equals true and the current site date is within the date range defined by the onlineFrom and onlineTo attributes.
     */
    getOnlineCategories() : Collection<Category>

    /**
     * Returns the online status flag of the product.
     */
    getOnlineFlag() : boolean

    /**
     * Returns the date from which the product is online or valid.
     */
    getOnlineFrom() : Date

    /**
     * Returns the date until which the product is online or valid.
     */
    getOnlineTo() : Date

    /**
     * Returns the product's option model. The option values selections are initialized with the values defined for the product, or the default values defined for the option.
     */
    getOptionModel() : ProductOptionModel

    /**
     * Returns a list of outgoing recommendations for this product. This method behaves similarly to getRecommendations() but additionally filters out recommendations for which the target product is unorderable according to its product availability model.
     */
    getOrderableRecommendations() : Collection<Recommendation>

    /**
     * Returns a list of outgoing recommendations for this product. This method behaves similarly to getRecommendations(Number) but additionally filters out recommendations for which the target product is unorderable according to its product availability model.
     * @param type
     */
    getOrderableRecommendations(type : number) : Collection<Recommendation>

    /**
     * Returns product's page description in the default locale.
     */
    getPageDescription() : string | null

    /**
     * Returns the product's page keywords in the default locale.
     */
    getPageKeywords() : string | null

    /**
     * Returns the product's page title in the default locale.
     */
    getPageTitle() : string | null

    /**
     * Returns the product's page URL in the default locale.
     */
    getPageURL() : string | null

    /**
     * Returns the price model, which can be used to retrieve a price for this product.
     */
    getPriceModel() : ProductPriceModel

    /**
     * Returns the price model based on the specified optionModel. The price model can be used to retrieve a price for this product. Prices are calculated based on the option values selected in the specified option model.
     * @param optionModel the option model to use when fetching the price model.
     */
    getPriceModel(optionModel : ProductOptionModel) : ProductPriceModel

    /**
     * Returns the primary category of the product within the current site catalog.
     */
    getPrimaryCategory() : Category | null

    /**
     * Returns the category assignment to the primary category in the current site catalog or null if no primary category is defined within the current site catalog.
     */
    getPrimaryCategoryAssignment() : CategoryAssignment | null

    /**
     * Returns all outgoing ProductLinks, where the target product is also available in the current site. The ProductLinks are unsorted.
     */
    getProductLinks() : Collection<ProductLink>

    /**
     * Returns all outgoing ProductLinks of a specific type, where the target product is also available in the current site. The ProductLinks are sorted.
     * @param type
     */
    getProductLinks(type : number) : Collection<ProductLink>

    /**
     * Returns a collection of all products which are assigned to this product and which are also available through the current site. If this product does not represent a product set then an empty collection will be returned.
     */
    getProductSetProducts() : Collection<Product>

    /**
     * Returns a collection of all product sets in which this product is included. The method only returns product sets assigned to the current site.
     */
    getProductSets() : Collection<Product>

    /**
     * Returns the outgoing recommendations for this product which belong to the site catalog. If this product is not assigned to the site catalog, or there is no site catalog, an empty collection is returned. Only recommendations for which the target product exists and is assigned to the site catalog are returned. The recommendations are sorted by their explicitly set order.
     */
    getRecommendations() : Collection<Recommendation>

    /**
     * Returns the outgoing recommendations for this product which are of the specified type and which belong to the site catalog. Behaves the same as getRecommendations() but additionally filters by recommendation type.
     * @param type
     */
    getRecommendations(type : number) : Collection<Recommendation>

    /**
     * Returns, whether the product is currently searchable.
     */
    getSearchableFlag() : boolean

    /**
     * Returns the searchable status of the Product if unavailable. Besides true or false, the return value null indicates that the value is not set.
     */
    getSearchableIfUnavailableFlag() : boolean | null

    /**
     * Returns the product's search placement classification. The higher the numeric product placement value, the more relevant is the product when sorting search results. The range of numeric placement values is defined in the meta data of object type 'Product' and can therefore be customized.
     */
    getSearchPlacement() : number

    /**
     * Returns the product's search rank. The higher the numeric product rank, the more relevant is the product when sorting search results. The range of numeric rank values is defined in the meta data of object type 'Product' and can therefore be customized.
     */
    getSearchRank() : number

    /**
     * Returns the product's short description in the current locale.
     */
    getShortDescription() : MarkupText | null

    /**
     * Returns the product's change frequency needed for the sitemap creation.
     */
    getSiteMapChangeFrequency() : string

    /**
     * Returns the product's priority needed for the sitemap creation.
     */
    getSiteMapPriority() : number

    /**
     * Returns the steps in which the order amount of the product can be increased.
     */
    getStepQuantity() : Quantity

    /**
     * Returns the store receipt name of the product in the current locale.
     */
    getStoreReceiptName() : string | null

    /**
     * Returns the store tax class ID.
     *
        This is an optional override for in-store tax calculation.
     */
    getStoreTaxClass() : string

    /**
     * Returns the ID of the product's tax class.
     */
    getTaxClassID() : string

    /**
     * Returns the name of the product's rendering template.
     */
    getTemplate() : string

    /**
     * Returns the product's sales unit.
     */
    getUnit() : string

    /**
     * Returns the Universal Product Code of the product.
     */
    getUPC() : string

    /**
     * Returns a collection of all variants assigned to this variation master or variation group product. All variants are returned regardless of whether they are online or offline. If this product does not represent a variation master or variation group product then an empty collection is returned.
     */
    getVariants() : Collection<Variant>

    /**
     * Returns a collection of all variation groups assigned to this variation master product. All variation groups are returned regardless of whether they are online or offline. If this product does not represent a variation master product then an empty collection is returned.
     */
    getVariationGroups() : Collection<VariationGroup>

    /**
     * Returns the variation model of this product. If this product is a master product, then the returned model will encapsulate all the information about its variation attributes and variants. If this product is a variant product, then the returned model will encapsulate all the same information, but additionally pre-select all the variation attribute values of this variant. (See ProductVariationModel for details on what "selected" means.) If this product is neither a master product or a variation product, then a model will be returned but will be essentially empty and not useful for any particular purpose.
     */
    getVariationModel() : ProductVariationModel

    /**
     * Identifies if the specified product participates in this product bundle. If this product does not represent a bundle at all, then false will always be returned.
     * @param product
     */
    includedInBundle(product : Product) : boolean

    /**
     * Returns 'true' if item is assigned to the specified category.
     * @param category
     */
    isAssignedToCategory(category : Category) : boolean

    /**
     * Returns 'true' if the product is assigned to the current site (via the site catalog), otherwise 'false' is returned.
     */
    isAssignedToSiteCatalog() : boolean

    /**
     * Identifies if this product instance is a product bundle.
     */
    isBundle() : boolean

    /**
     * Identifies if this product instance is bundled within at least one product bundle.
     */
    isBundled() : boolean

    /**
     * Identifies if this product is bound to at least one catalog category.
     */
    isCategorized() : boolean

    /**
     * Identifies if the product is Facebook enabled.
     */
    isFacebookEnabled() : boolean

    /**
     * Identifies if this product instance is a product master.
     */
    isMaster() : boolean

    /**
     * Returns the online status of the product. The online status is calculated from the online status flag and the onlineFrom onlineTo dates defined for the product.
     */
    isOnline() : boolean

    /**
     * Identifies if the product has options.
     */
    isOptionProduct() : boolean

    /**
     * Identifies if the product has options.
     */
    isPinterestEnabled() : boolean

    /**
     * Returns 'true' if the instance represents a product. Returns 'false' if the instance represents a product set.
     */
    isProduct() : this is Product

    /**
     * Returns 'true' if the instance represents a product set, otherwise 'false'.
     */
    isProductSet() : boolean

    /**
     * Returns true if this product is part of any product set, otherwise false.
     */
    isProductSetProduct() : boolean

    /**
     * Identifies if the product is searchable.
     */
    isSearchable() : boolean

    /**
     * Identifies if this product instance is mastered by a product master.
     */
    isVariant() : this is Variant

    /**
     * Identifies if this product instance is a variation group product.
     */
    isVariationGroup() : this is VariationGroup

    /**
     * Set the online status flag of the product for the current site. If current site is not available (i.e. in case this method is called by a job that runs on organization level) the online status flag is set global, which can affect all sites.
     *
In previous versions this method set the online status flag global, instead of site specific.
     * @param online
     */
    setOnlineFlag(online : boolean) : void

    /**
     * Set the flag indicating whether the product is searchable or not in context of the current site. If current site is not available (i.e. in case this method is called by a job that runs on organization level) the searchable flag is set global, which can affect all sites.
     *
     * In previous versions this method set the searchable flag global, instead of site specific.
     * @param searchable
     */
    setSearchableFlag(searchable : boolean) : void

    /**
     * Set the product's search placement classification in context of the current site. If current site is not available (i.e. in case this method is called by a job that runs on organization level) the search placement is set global, which can affect all sites.
     *
     * In previous versions this method set the search placement classification global, instead of site specific.
     * @since 10.6
     * @param placement
     */
    setSearchPlacement(placement : number) : void

    /**
     * Set the product's search rank in context of the current site. If current site is not available (i.e. in case this method is called by a job that runs on organization level) the search rank is set global, which can affect all sites.
     *
     * In previous versions this method set the search rank global, instead of site specific.
     * @since 10.6
     * @param rank
     */
    setSearchRank(rank : number) : void

}

export = Product
