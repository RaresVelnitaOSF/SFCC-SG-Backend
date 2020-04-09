import SearchModel = require('./SearchModel');
import URL = require('../web/URL');
import Category = require('./Category');
import Product = require('./Product');
import List = require('../util/List');
import SortingRule = require('./SortingRule');
import ProductSearchHit = require('./ProductSearchHit');
import ProductSearchRefinements = require('./ProductSearchRefinements');
import SearchPhraseSuggestions = require('../suggest/SearchPhraseSuggestions');
import PageMetaTag = require('../web/PageMetaTag');
import Iterator = require('../util/Iterator');


/**
 * The class is the central interface to a product search result and a product search refinement. It also provides utility methods to generate a search URL
 */
declare class ProductSearchModel extends SearchModel {
    /**
     * URL Parameter for the category ID
     */
    static readonly CATEGORYID_PARAMETER  :  string

    /**
     * URL Parameter for the maximum price
     */
    static readonly PRICE_MAX_PARAMETER  :  string

    /**
     * URL Parameter for the minimum price
     */
    static readonly PRICE_MIN_PARAMETER  :  string

    /**
     * URL Parameter for the product ID
     */
    static readonly PRODUCTID_PARAMETER  :  string

    /**
     * constant indicating that all related products should be returned for the next product search by promotion ID
     */
    static readonly PROMOTION_PRODUCT_TYPE_ALL  :  string

    /**
     * constant indicating that only bonus products should be returned for the next product search by promotion ID. This constant should be set using setPromotionProductType(string) when using the search model to find the available list of bonus products for a Choice of Bonus Product (Rule) promotion, along with setPromotionID(string).
     */
    static readonly PROMOTION_PRODUCT_TYPE_BONUS  :  string

    /**
     * constant indicating that only discounted products should be returned for the next product search by promotion ID
     */
    static readonly PROMOTION_PRODUCT_TYPE_DISCOUNTED  :  string

    /**
     * URL Parameter for the promotion product type
     */
    static readonly PROMOTION_PRODUCT_TYPE_PARAMETER  :  string

    /**
     * constant indicating that only qualifying products should be returned for the next product search by promotion ID
     */
    static readonly PROMOTION_PRODUCT_TYPE_QUALIFYING  :  string

    /**
     * URL Parameter for the promotion ID
     */
    static readonly PROMOTIONID_PARAMETER  :  string

    /**
     * URL Parameter prefix for a refinement name
     */
    static readonly REFINE_NAME_PARAMETER_PREFIX  :  string

    /**
     * URL Parameter prefix for a refinement value
     */
    static readonly REFINE_VALUE_PARAMETER_PREFIX  :  string

    /**
     * URL Parameter prefix for a refinement value
     */
    static readonly SORT_BY_PARAMETER_PREFIX  :  string

    /**
     * URL Parameter prefix for a refinement value
     */
    static readonly SORT_DIRECTION_PARAMETER_PREFIX  :  string

    /**
     * URL Parameter prefix for a sorting rule
     */
    static readonly SORTING_RULE_PARAMETER  :  string

    /**
     * The category object for the category id specified in the query. If a category with that id doesn't exist or if the category is offline this method returns null.
     */
    readonly category  :  Category  | null

    /**
     * The category id that was specified in the search query.
     */
    categoryID  :  string

    /**
     * The method returns true, if this is a pure search for a category. The method checks, that a category ID is specified and no search phrase is specified.
     */
    readonly categorySearch  :  boolean 

    /**
     * The deepest common category of all products in the search result. In case of an empty search result the method returns the root category.
     */
    readonly deepestCommonCategory  :  Category 

    /**
     * Get the flag indicating whether unorderable products should be excluded when the next call to getProducts() is made. If this value has not been previously set, then the value returned will be based on the value of the search preference.
     */
    orderableProductsOnly  :  boolean

    /**
     * Reserved for beta users.
    Returns all page meta tags, defined for this instance for which content can be generated.
    The meta tag content is generated based on the product listing page meta tag context and rules. The rules are obtained from the current category context or inherited from the parent category, up to the root category.
    */
    readonly pageMetaTags  :  Array<PageMetaTag>

    /**
     * The maximum price for the product associated with this search.
     */
    priceMax  :  number

    /**
     * The minimum price for the product associated with this search.
     */
    priceMin  :  number

    /**
     * The product id that was specified in the search query.
     */
    productID  :  string

    /**
     * All products in the search result. 
    Note that products that were removed or went offline since the last index update are not included in the returned set.
    */
    readonly products  :  Iterator<Product>

    /**
     * The product search hits in the search result. 
    Note that method does also return search hits representing products that were removed or went offline since the last index update, i.e. you must implement appropriate checks before accessing the product related to the search hit instance (see ProductSearchHit.getProduct)
    */
    readonly productSearchHits  :  Iterator<ProductSearchHit>

    /**
     * The promotion id that was specified in the search query or null if no promotion id set. If multiple promotion id's specified the method returns only the first id. See setPromotionIDs(List) and getPromotionIDs().
     */
    promotionID  :  string | null

    /**
     * A list of promotion id's that were specified in the search query or an empty list if no promotion id set.
     */
    promotionIDs  :  List<string>

    /**
     * The promotion product type specified in the search query.
     */
    promotionProductType  :  string

    /**
     * Get the flag that determines if the category search will be recursive.
     */
    recursiveCategorySearch  :  boolean

    /**
     * The method returns true, if the search is refined by a category. The method checks, that a category ID is specified.
     */
    readonly refinedByCategory  :  boolean 

    /**
     * Identifies if this search has been refined by price.
     */
    readonly refinedByPrice  :  boolean 

    /**
     * Identifies if this is a category search and is refined with further criteria, like a brand refinement or an attribute refinement.
     */
    readonly refinedCategorySearch  :  boolean 

    /**
     * The ProductSearchRefinements associated with this search and filtered by session currency.
     */
    readonly refinements  :  ProductSearchRefinements 

    /**
     * Returns search phrase suggestions for the current search phrase. Search phrase suggestions may contain alternative search phrases as well as lists of corrected and completed search terms.
     */
    readonly searchPhraseSuggestions  :  SearchPhraseSuggestions 

    /**
     * The sorting rule explicitly set on this model to be used to order the products in the results of this query, or null if no rule has been explicitly set. This method does not return the sorting rule that will be used implicitly based on the context of the search, such as the refinement category.
     */
    sortingRule  :  SortingRule

    constructor();

    /**
     * Returns the category object for the category id specified in the query.
     */
    getCategory() : Category | null

    /**
     * Returns the category id that was specified in the search query.
     */
    getCategoryID() : string

    /**
     * Returns the deepest common category of all products in the search result.
     */
    getDeepestCommonCategory() : Category

    /**
     * Get the flag indicating whether unorderable products should be excluded when the next call to getProducts() is made.
     */
    getOrderableProductsOnly() : boolean

    /**
     * Reserved for beta users.
     * @param id 
     */
    getPageMetaTag(id : string) : PageMetaTag

    /**
     * Reserved for beta users.
     */
    getPageMetaTags() : Array<PageMetaTag>

    /**
     * Returns the maximum price for the product associated with this search.
     */
    getPriceMax() : number

    /**
     * Returns the minimum price for the product associated with this search.
     */
    getPriceMin() : number

    /**
     * Returns the product id that was specified in the search query.
     */
    getProductID() : string

    /**
     * Returns all products in the search result.
     */
    getProducts() : Iterator<Product>

    /**
     * Returns the underlying ProductSearchHit for a product, or null if no ProductSearchHit found for this product.
     * @param product 
     */
    getProductSearchHit(product : Product) : ProductSearchHit

    /**
     * Returns the product search hits in the search result.
     */
    getProductSearchHits() : Iterator<ProductSearchHit>

    /**
     * Returns the promotion id that was specified in the search query or null if no promotion id set.
     */
    getPromotionID() : string

    /**
     * Returns a list of promotion id's that were specified in the search query or an empty list if no promotion id set.
     */
    getPromotionIDs() : List<string>

    /**
     * Returns the promotion product type specified in the search query.
     */
    getPromotionProductType() : string

    /**
     * Returns the ProductSearchRefinements associated with this search and filtered by session currency.
     */
    getRefinements() : ProductSearchRefinements

    /**
     * Returns search phrase suggestions for the current search phrase.
     */
    getSearchPhraseSuggestions() : SearchPhraseSuggestions

    /**
     * Returns the sorting rule explicitly set on this model to be used to order the products in the results of this query, or null if no rule has been explicitly set.
     */
    getSortingRule() : SortingRule


    /**
     * The method returns true, if this is a pure search for a category.
     */
    isCategorySearch() : boolean

    /**
     * Get the flag that determines if the category search will be recursive.
     */
    isRecursiveCategorySearch() : boolean

    /**
     * The method returns true, if the search is refined by a category.
     */
    isRefinedByCategory() : boolean

    /**
     * Identifies if this search has been refined by price.
     */
    isRefinedByPrice() : boolean

    /**
     * Identifies if this search has been refined by the given price range.
     * @param priceMin 
     * @param priceMax 
     */
    isRefinedByPriceRange(priceMin : number, priceMax : number) : boolean

    /**
     * Identifies if this is a category search and is refined with further criteria, like a brand refinement or an attribute refinement.
     */
    isRefinedCategorySearch() : boolean

    /**
     * Execute the search.
     */
    search() : void

    /**
     * Specifies the category id used for the search query.
     * @param categoryID 
     */
    setCategoryID(categoryID : string) : void

    /**
     * Set a flag indicating whether unorderable products should be excluded when the next call to getProducts() is made.
     * @param orderableOnly 
     */
    setOrderableProductsOnly(orderableOnly : boolean) : void

    /**
     * Sets the maximum price for the product associated with this search.
     * @param priceMax 
     */
    setPriceMax(priceMax : number) : void

    /**
     * Sets the minimum price for the product associated with this search.
     * @param priceMin 
     */
    setPriceMin(priceMin : number) : void

    /**
     * Specifies the product id used for the search query.
     * @param productID 
     */
    setProductID(productID : string | null) : void

    /**
     * Specifies the promotion id used for the search query.
     * @param promotionID 
     */
    setPromotionID(promotionID : string | null) : void

    /**
     * Specifies multiple promotion id's used for the search query.
     * @param promotionIDs 
     */
    setPromotionIDs(promotionIDs : List<string>) : void

    /**
     * Specifies the promotion product type used for the search query.
     * @param promotionProductType 
     */
    setPromotionProductType(promotionProductType : string) : void

    /**
     * Set a flag to indicate if the search in category should be recursive.
     * @param recurse 
     */
    setRecursiveCategorySearch(recurse : boolean) : void

    /**
     * Sets the sorting rule to be used to order the products in the results of this query.
     * @param rule 
     */
    setSortingRule(rule : SortingRule) : void

    /**
     * Constructs a URL that you can use to execute a query for a specific Category.
     * @param action 
     * @param cgid 
     */
    static urlForCategory(action : string, cgid : string) : URL

    /**
     * Constructs a URL that you can use to execute a query for a specific Category.
     * @param url 
     * @param cgid 
     */
    static urlForCategory(url : URL, cgid : string) : URL

    /**
     * Constructs a URL that you can use to execute a query for a specific Product.
     * @param action 
     * @param cgid 
     * @param pid 
     */
    static urlForProduct(action : string, cgid : string, pid : string) : URL

    /**
     * Constructs a URL that you can use to execute a query for a specific Product.
     * @param url 
     * @param cgid 
     * @param pid 
     */
    static urlForProduct(url : URL, cgid : string, pid : string) : URL

    /**
     * Constructs a URL that you can use to execute a query for a specific attribute name-value pair.
     * @param action 
     * @param attributeID 
     * @param value 
     */
    static urlForRefine(action : string, attributeID : string, value : string) : URL

    /**
     * Constructs a URL that you can use to execute a query for a specific attribute name-value pair.
     * @param url 
     * @param attributeID 
     * @param value 
     */
    static urlForRefine(url : URL, attributeID : string, value : string) : URL

    /**
     * Constructs a URL that you can use to re-execute the query with a category refinement.
     * @param action 
     * @param refineCategoryID 
     */
    urlRefineCategory(action : string, refineCategoryID : string) : URL

    /**
     * Constructs a URL that you can use to re-execute the query with a category refinement.
     * @param url 
     * @param refineCategoryID 
     */
    urlRefineCategory(url : URL, refineCategoryID : string) : URL

    /**
     * Constructs a URL that you can use to re-execute the query with an additional price filter.
     * @param action 
     * @param min 
     * @param max 
     */
    urlRefinePrice(action : string, min : number, max : number) : URL

    /**
     * Constructs a URL that you can use to re-execute the query with an additional price filter.
     * @param url 
     * @param min 
     * @param max 
     */
    urlRefinePrice(url : URL, min : number, max : number) : URL

    /**
     * Constructs a URL that you can use to re-execute the query without any category refinement.
     * @param action 
     */
    urlRelaxCategory(action : string) : URL

    /**
     * Constructs a URL that you can use to re-execute the query without any category refinement.
     * @param url 
     */
    urlRelaxCategory(url : URL) : URL

    /**
     * Constructs a URL that you can use to re-execute the query with no price filter.
     * @param action 
     */
    urlRelaxPrice(action : string) : URL

    /**
     * Constructs a URL that you can use to would re-execute the query with no price filter.
     * @param url 
     */
    urlRelaxPrice(url : URL) : URL

    /**
     * Constructs a URL that you can use to re-execute the query but sort the results by the given rule.
     * @param action 
     * @param rule 
     */
    urlSortingRule(action : string, rule : SortingRule) : URL

    /**
     * Constructs a URL that you can use to re-execute the query but sort the results by the given rule.
     * @param url 
     * @param rule 
     */
    urlSortingRule(url : URL, rule : SortingRule) : URL



}

export = ProductSearchModel;