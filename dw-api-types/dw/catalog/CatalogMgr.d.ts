import Catalog = require('./Catalog');
import List = require('../util/List');
import Collection = require('../util/Collection');
import SortingRule = require('./SortingRule');
import SortingOption = require('./SortingOption');
import Category = require('./Category');


/**
 * Provides helper methods for getting categories.
 */
declare class CatalogMgr {
    /**
     * The catalog of the current site or null if no catalog is assigned to the site.
     */
    static readonly siteCatalog  :  Catalog | null

    /**
     * A list containing the sorting options configured for this site.
     */
    static readonly sortingOptions  :  List<SortingOption>

    /**
     * A collection containing all of the sorting rules for this site.
     */
    static readonly sortingRules  :  Collection<SortingRule>

    /**
     * Returns the catalog identified by the specified catalog id.
     * @param id 
     */
    static getCatalog(id : string) : Catalog | null

    /**
     * Returns the category of the site catalog identified by the specified category id.
     * @param id 
     */
    static getCategory(id : string) : Category | null

    /**
     * Returns the catalog of the current site or null if no catalog is assigned to the site.
     */
    static getSiteCatalog() : Catalog

    /**
     * Returns the sorting option with the given ID for this site, or null if there is no such option.
     * @param id 
     */
    static getSortingOption(id : string) : SortingOption | null

    /**
     * Returns a list containing the sorting options configured for this site.
     */
    static getSortingOptions() : List<SortingOption>

    /**
     * Returns the sorting rule with the given ID for this site, or null if there is no such rule.
     * @param id 
     */
    static getSortingRule(id : string) : SortingRule | null

    /**
     * Returns a collection containing all of the sorting rules for this site.
     */
    static getSortingRules() : Collection<SortingRule>

}

export = CatalogMgr;