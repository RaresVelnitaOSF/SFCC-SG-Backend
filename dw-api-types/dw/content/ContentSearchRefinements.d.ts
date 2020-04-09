import SearchRefinements = require('../catalog/SearchRefinements'); 
import Folder = require('./Folder');
import Collection = require('../util/Collection');
import ContentSearchRefinementDefinition = require('./ContentSearchRefinementDefinition');
import ContentSearchRefinementValue = require('./ContentSearchRefinementValue');
import SearchRefinementValue = require('../catalog/SearchRefinementValue');

/**
 * This class provides an interface to refinement options for the content asset search. In a typical usage, the client application UI displays the search refinements along with the search results and allows customers to "refine" the results (i.e. limit the results that are shown) by specifying additional criteria, or "relax" (i.e. broaden) the results after previously refining. The two types of content search refinements are:
 - Refine By Folder: Limit the content assets to those assigned to specific child/ancestor folder of the search folder.
 - Refine By Attribute: Limit the content assets to those with specific values for a given attribute. Values may be grouped into "buckets" so that a given set of values are represented as a single refinement option.

Rendering a content search refinement UI typically begins with iterating the refinement definitions for the search result. Call SearchRefinements.getRefinementDefinitions() or SearchRefinements.getAllRefinementDefinitions() to retrieve the appropriate collection of refinement definitions. For each definition, display the available refinement values by calling getAllRefinementValues(ContentSearchRefinementDefinition). Depending on the type of the refinement definition, the application must use slightly different logic to display the refinement widgets. For all 2 types, methods in ContentSearchModel are used to generate URLs to render hyperlinks in the UI. When clicked, these links trigger a call to the Search pipelet which in turn applies the appropriate filters to the native search result.
 */
declare class ContentSearchRefinements extends SearchRefinements {
    /**
     * The appropriate folder refinement definition based on the search result. The folder refinement definition returned will be the first that can be found traversing the folder tree upward starting at the deepest common folder of the search result.
     */
    readonly folderRefinementDefinition  :  ContentSearchRefinementDefinition;

    /**
     * A collection of matching folders.
     */
    matchingFolders  :  Collection<Folder>

    private constructor();

    /**
     * Returns a sorted collection of refinement values for the given refinement definition.
     * @param definition 
     */
    getAllRefinementValues(definition : ContentSearchRefinementDefinition) : Collection<ContentSearchRefinementValue>
    /**
     * Returns a sorted collection of refinement values for the given refinement attribute.
     * @param attributeName 
     */
    getAllRefinementValues(attributeName : string) : Collection<SearchRefinementValue>

    /**
     * Returns the number of search hits for the passed folder object.
     * @param folder 
     */
    getFolderHits(folder : Folder) : number

    /**
     * Returns the appropriate folder refinement definition based on the search result.
     */
    getFolderRefinementDefinition() : ContentSearchRefinementDefinition

    /**
     * Returns a collection of matching folders.
     */
    getMatchingFolders() : Collection<Folder>

    /**
     * Returns folder refinement values based on the current search result filtered such that only folder refinements representing children of the given folder are present.
     * @param folder 
     */
    getNextLevelFolderRefinementValues(folder : Folder) : Collection<ContentSearchRefinementValue>

    /**
     * Returns the refinement value (incl.
     * @param definition 
     * @param value 
     */
    getRefinementValue(definition : ContentSearchRefinementDefinition, value : string) : ContentSearchRefinementValue | null

    /**
     * Returns the refinement value (incl.
     * @param name 
     * @param value 
     */
    getRefinementValue(name : string, value : string) : ContentSearchRefinementValue | null

    /**
     * Returns a collection of refinement values for the given refinement definition.
     * @param definition 
     */
    getRefinementValues(definition : ContentSearchRefinementDefinition) : Collection<ContentSearchRefinementValue>
    /**
     * Returns a collection of refinement values for the given refinement attribute, sorting mode and sorting direction.
     * @param attributeName 
     * @param sortMode 
     * @param sortDirection 
     */
    getRefinementValues(attributeName : string, sortMode : number, sortDirection : number) : Collection<SearchRefinementValue>


}

export = ContentSearchRefinements;