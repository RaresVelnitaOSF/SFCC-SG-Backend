import URL = require('../web/URL');
import Collection = require('../util/Collection');
import URLRedirect = require('../web/URLRedirect');
import SearchRefinementValue = require('./SearchRefinementValue');

/**
 * Common search model base class.
 */
declare class SearchModel {
    protected constructor();
    /**
     * URL Parameter for the Search Phrase
     */
    static readonly SEARCH_PHRASE_PARAMETER  :  string

    /**
     * Sorting parameter ASCENDING
     */
    static readonly SORT_DIRECTION_ASCENDING  :  number

    /**
     * Sorting parameter DESCENDING
     */
    static readonly SORT_DIRECTION_DESCENDING  :  number

    /**
     * Sorting parameter NO_SORT - will remove a sorting condition
     */
    static readonly SORT_DIRECTION_NONE  :  number

    /**
     * The number of search results found by this search.
     */
    readonly count  :  number

    /**
     * Identifies if the query is emtpy when no search term, search parameter or refinement was specified for the search. In case also no result is returned. This "empty" is different to a query with a specified query and with an empty result.
     */
    readonly emptyQuery  :  boolean

    /**
     * The method returns true, if this search is refined by at least one attribute.
     */
    readonly refinedByAttribute  :  boolean

    /**
     * Identifies if this was a refined search. A search is a refined search if at least one refinement is part of the query.
     */
    readonly refinedSearch  :  boolean

    /**
     * The search phrase used in this search.
     */
    searchPhrase  :  string


    /**
     * Adds a refinement.
     * @param attributeID 
     * @param values 
     */
    addRefinementValues(attributeID : string, values : string) : void

    /**
     * Identifies if the search can be relaxed without creating a search for all searchable items.
     */
    canRelax() : boolean

    /**
     * Returns the number of search results found by this search.
     */
    getCount() : number

    /**
     * Returns the maximum refinement value selected in the query for the specific attribute, or null if there is no maximum refinement value or no refinement for that attribute.
     * @param attributeID 
     */
    getRefinementMaxValue(attributeID : string) : string

    /**
     * Returns the minimum refinement value selected in the query for the specific attribute, or null if there is no minimum refinement value or no refinement for that attribute.
     * @param attributeID 
     */
    getRefinementMinValue(attributeID : string) : string

    /**
     * Returns the list of selected refinement values for the given attribute as used in the search.
     * @param attributeID 
     */
    getRefinementValues(attributeID : string) : Collection<SearchRefinementValue>

    /**
     * Returns the search phrase used in this search.
     */
    getSearchPhrase() : string

    /**
     * Returns an URLRedirect object for a search phrase.
     * @param searchPhrase 
     */
    static getSearchRedirect(searchPhrase : string) : URLRedirect

    /**
     * Returns the sorting condition for a given attribute name.
     * @param attributeID 
     */
    getSortingCondition(attributeID : string) : number

    /**
     * Identifies if the query is emtpy when no search term, search parameter or refinement was specified for the search.
     */
    isEmptyQuery() : boolean

    /**
     * Identifies if this search has been refined on the given attribute.
     * @param attributeID 
     */
    isRefinedByAttribute(attributeID : string) : boolean

    /**
     * The method returns true, if this search is refined by at least one attribute.
     */
    isRefinedByAttribute() : boolean

    /**
     * Identifies if this search has been refined on the given attribute and value.
     * @param attributeID 
     * @param value 
     */
    isRefinedByAttributeValue(attributeID : string, value : string) : boolean

    /**
     * Identifies if this was a refined search.
     */
    isRefinedSearch() : boolean

    /**
     * Identifies if this search has been refined on the given attribute.
     * @param attributeID 
     */
    isRefinementByValueRange(attributeID : string) : boolean

    /**
     * Identifies if this search has been refined on the given attribute and range values.
     * @param attributeID 
     * @param minValue 
     * @param maxValue 
     */
    isRefinementByValueRange(attributeID : string, minValue : string, maxValue : string) : boolean

    /**
     * Removes a refinement.
     * @param attributeID 
     * @param values 
     */
    removeRefinementValues(attributeID : string, values : string) : void

    /**
     * Execute the search.
     */
    search() : void

    /**
     * Sets a refinement value range for an attribute.
     * @param attributeID 
     * @param minValue 
     * @param maxValue 
     */
    setRefinementValueRange(attributeID : string, minValue : string, maxValue : string) : void

    /**
     * Sets refinement values for an attribute.
     * @param attributeID 
     * @param values 
     */
    setRefinementValues(attributeID : string, values : string) : void

    /**
     * Sets the search phrase used in this search.
     * @param phrase 
     */
    setSearchPhrase(phrase : string) : void

    /**
     * Sets or removes a sorting condition for the specified attribute.
     * @param attributeID 
     * @param direction 
     */
    setSortingCondition(attributeID : string, direction : number) : void

    /**
     * Constructs an URL that you can use to re-execute the exact same query.
     * @param action 
     */
    url(action : string) : URL

    /**
     * Constructs an URL that you can use to re-execute the exact same query.
     * @param url 
     */
    url(url : URL) : URL

    /**
     * Constructs an URL that you can use to re-execute the query with a default sorting.
     * @param url 
     */
    urlDefaultSort(url : string) : URL

    /**
     * Constructs an URL that you can use to re-execute the query with a default sorting.
     * @param url 
     */
    urlDefaultSort(url : URL) : URL

    /**
     * Constructs an URL that you can use to re-execute the query with an additional refinement.
     * @param action 
     * @param attributeID 
     * @param value 
     */
    urlRefineAttribute(action : string, attributeID : string, value : string) : URL

    /**
     * Constructs an URL that you can use to re-execute the query with an additional refinement.
     * @param url 
     * @param attributeID 
     * @param value 
     */
    urlRefineAttribute(url : URL, attributeID : string, value : string) : URL

    /**
     * Constructs an URL that you can use to re-execute the query with an additional refinement value for a given refinement attribute.
     * @param action 
     * @param attributeID 
     * @param value 
     */
    urlRefineAttributeValue(action : string, attributeID : string, value : string) : URL

    /**
     * Constructs an URL that you can use to re-execute the query with an additional refinement value for a given refinement attribute.
     * @param url 
     * @param attributeID 
     * @param value 
     */
    urlRefineAttributeValue(url : URL, attributeID : string, value : string) : URL

    /**
     * Constructs an URL that you can use to re-execute the query with an additional refinement value range for a given refinement attribute.
     * @param action 
     * @param attributeID 
     * @param minValue 
     * @param maxValue 
     */
    urlRefineAttributeValueRange(action : string, attributeID : string, minValue : string, maxValue : string) : URL

    /**
     * Constructs an URL that you can use to re-execute the query without the specified refinement.
     * @param action 
     * @param attributeID 
     */
    urlRelaxAttribute(action : string, attributeID : string) : URL

    /**
     * Constructs an URL that you can use to re-execute the query without the specified refinement.
     * @param url 
     * @param attributeID 
     */
    urlRelaxAttribute(url : URL, attributeID : string) : URL

    /**
     * Constructs an URL that you can use to re-execute the query without the specified refinement.
     * @param action 
     * @param attributeID 
     * @param value 
     */
    urlRelaxAttributeValue(action : string, attributeID : string, value : string) : URL

    /**
     * Constructs an URL that you can use to re-execute the query without the specified refinement value.
     * @param url 
     * @param attributeID 
     * @param value 
     */
    urlRelaxAttributeValue(url : URL, attributeID : string, value : string) : URL

    /**
     * Constructs an URL that you can use to re-execute the query with a specific sorting criteria.
     * @param action 
     * @param sortBy 
     * @param sortDir 
     */
    urlSort(action : string, sortBy : string, sortDir : number) : URL

    /**
     * Constructs an URL that you can use to re-execute the query with a specific sorting criteria.
     * @param url 
     * @param sortBy 
     * @param sortDir 
     */
    urlSort(url : URL, sortBy : string, sortDir : number) : URL



}


export = SearchModel;