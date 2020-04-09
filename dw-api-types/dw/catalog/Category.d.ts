import ExtensibleObject = require('../object/ExtensibleObject');
import Collection = require('../util/Collection');
import Recommendation = require('./Recommendation');
import CategoryAssignment = require('./CategoryAssignment');
import SortingRule = require('./SortingRule');
import MediaFile = require('../content/MediaFile');
import CategoryLink = require('./CategoryLink');
import Product = require('./Product');
import ProductAttributeModel = require('./ProductAttributeModel');
import CustomAttributes = require('../object/CustomAttributes');

declare global {
    module ICustomAttributes {
        interface Category extends CustomAttributes{
        }
    }
}

declare class Category extends ExtensibleObject<ICustomAttributes.Category> {
    allRecommendations  :  Collection<Recommendation>;
    categoryAssignments  :  Collection<CategoryAssignment>;
    defaultSortingRule  :  SortingRule;
    description  :  string;
    displayName  :  string;
    ID  :  string;
    image  :  MediaFile;
    incomingCategoryLinks  :  Collection<CategoryLink>;
    online  :  Boolean;
    onlineCategoryAssignments  :  Collection<CategoryAssignment>;
    onlineFlag  :  Boolean;
    onlineFrom  :  Date;
    onlineIncomingCategoryLinks  :  Collection<CategoryLink>;
    onlineOutgoingCategoryLinks  :  Collection<CategoryLink>;
    onlineProducts  :  Collection<Product>
    onlineSubCategories  :  Collection<Category>;
    onlineTo  :  Date;
    orderableRecommendations  :  Collection<Recommendation>;
    outgoingCategoryLinks  :  Collection<CategoryLink>;
    pageDescription  :  string;
    pageKeywords  :  string;
    pageTitle  :  string;
    pageURL  :  string;
    parent  :  Category;
    productAttributeModel  :  ProductAttributeModel;
    products  :  Collection<Product>;
    recommendations  :  Collection<Recommendation>;
    root  :  Boolean;
    searchPlacement  :  number;
    searchRank  :  number;
    siteMapChangeFrequency  :  string;
    siteMapPriority  :  number;
    subCategories  :  Collection<Category>;
    template  :  string;
    thumbnail  :  MediaFile;
    topLevel  :  Boolean;

    getAllRecommendations() : Collection<Recommendation>;
    getAllRecommendations(type : number) : Collection<Recommendation>;
    getCategoryAssignments() : Collection<CategoryAssignment>;
    getDefaultSortingRule() : SortingRule;
    getDescription() : string;
    getDisplayName() : string;
    getID() : string;
    getImage() : MediaFile;
    getIncomingCategoryLinks() : Collection<CategoryLink>;
    getIncomingCategoryLinks(type : number) : Collection<CategoryLink>;
    getOnlineCategoryAssignments() : Collection<CategoryAssignment>;
    getOnlineFlag() : Boolean;
    getOnlineFrom() : Date;
    getOnlineIncomingCategoryLinks() : Collection<CategoryLink>;
    getOnlineOutgoingCategoryLinks() : Collection<CategoryLink>;
    getOnlineProducts() : Collection<Product>;
    getOnlineSubCategories() : Collection<Category>;
    getOnlineTo() : Date;
    getOrderableRecommendations() : Collection<Recommendation>;
    getOrderableRecommendations(type : number) : Collection<Recommendation>;
    getOutgoingCategoryLinks() : Collection<CategoryLink>;
    getOutgoingCategoryLinks(type : number) : Collection<CategoryLink>;
    getPageDescription() : string;
    getPageKeywords() : string;
    getPageTitle() : string;
    getPageURL() : string;
    getParent() : Category;
    getProductAttributeModel() : ProductAttributeModel;
    getProducts() : Collection<Product>;
    getRecommendations() : Collection<Recommendation>;
    getRecommendations(type : number) : Collection<Recommendation>;
    getSearchPlacement() : number;
    getSearchRank() : number;
    getSiteMapChangeFrequency() : string;
    getSiteMapPriority() : number;
    getSubCategories() : Collection<Category>;
    getTemplate() : string;
    getThumbnail() : MediaFile;
    isDirectSubCategoryOf(parent : Category) : Boolean;
    isOnline() : Boolean;
    isRoot() : Boolean;
    isSubCategoryOf(ancestor : Category) : Boolean;
    isTopLevel() : Boolean;
    setSearchPlacement(placement : number) : void;
    setSearchRank(rank : number) : void;
}

export =  Category;