import SearchModel = require('../catalog/SearchModel');
import Folder = require('./Folder');
import Content = require('./Content');
import Iterator = require('../util/Iterator');
import PageMetaTag = require('../web/PageMetaTag');
import ContentSearchRefinements = require('./ContentSearchRefinements');
import URL = require('../web/URL');

/**
 * The class is the central interface to a content search result and a content search refinement. It also provides utility methods to generate a search URL.
 */
declare class ContentSearchModel extends SearchModel {

    /**
     * URL Parameter for the content ID
     */
    static readonly CONTENTID_PARAMETER  :  string

    /**
     * URL Parameter for the folder ID
     */
    static readonly FOLDERID_PARAMETER  :  string

    constructor();

    /**
     * An Iterator containing all Content Assets that are the result of the search.
     */
    readonly content  :  Iterator<Content>

    /**
     * The content ID against which the search results apply.
     */
    contentID  :  string

    /**
     * The deepest common folder of all content assets in the search result.
     */
    readonly deepestCommonFolder  :  Folder

    /**
     * The folder against which the search results apply.
     */
    readonly folder  :  Folder

    /**
     * The folder ID against which the search results apply.
     */
    folderID  :  string

    /**
     * The method returns true, if this is a pure search for a folder. The method checks, that a folder ID is specified and no search phrase is specified.
     */
    readonly folderSearch  :  boolean

    /**
     * Reserved for beta users.
    Returns all page meta tags, defined for this instance for which content can be generated.
    The meta tag content is generated based on the content listing page meta tag context and rules. The rules are obtained from the current folder context or inherited from the parent folder, up to the root folder.
    */
    readonly pageMetaTags  :  Array<PageMetaTag>

    /**
     * Get the flag that determines if the folder search will be recursive.
     */
    recursiveFolderSearch  :  boolean

    /**
     * The method returns true, if the search is refined by a folder. The method checks, that a folder ID is specified.
     */
    readonly refinedByFolder  :  boolean

    /**
     * Identifies if this is a folder search and is refined with further criteria, like a name refinement or an attribute refinement.
     */
    readonly refinedFolderSearch  :  boolean

    /**
     * The set of search refinements used in this search.
     */
    readonly refinements  :  ContentSearchRefinements

    constructor();

    /**
     * Returns an Iterator containing all Content Assets that are the result of the search.
     */
    getContent() : Iterator<Content>

    /**
     * Returns the content ID against which the search results apply.
     */
    getContentID() : string

    /**
     * Returns the deepest common folder of all content assets in the search result.
     */
    getDeepestCommonFolder() : Folder

    /**
     * Returns the folder against which the search results apply.
     */
    getFolder() : Folder

    /**
     * Returns the folder ID against which the search results apply.
     */
    getFolderID() : string

    /**
     * Reserved for beta users.
     * @param id
     */
    getPageMetaTag(id : string) : PageMetaTag | null

    /**
     * Reserved for beta users.
     */
    getPageMetaTags() : Array<PageMetaTag>

    /**
     * Returns the set of search refinements used in this search.
     */
    getRefinements() : ContentSearchRefinements

    /**
     * The method returns true, if this is a pure search for a folder.
     */
    isFolderSearch() : boolean

    /**
     * Get the flag that determines if the folder search will be recursive.
     */
    isRecursiveFolderSearch() : boolean

    /**
     * The method returns true, if the search is refined by a folder.
     */
    isRefinedByFolder() : boolean

    /**
     * Identifies if this is a folder search and is refined with further criteria, like a name refinement or an attribute refinement.
     */
    isRefinedFolderSearch() : boolean

    /**
     * Execute the search.
     */
    search() : void

    /**
     * Sets the contentID used in this search.
     * @param contentID
     */
    setContentID(contentID : string | null) : void

    /**
     * Sets the folderID used in this search.
     * @param folderID
     */
    setFolderID(folderID : string) : void

    /**
     * Set a flag to indicate if the search in folder should be recursive.
     * @param recurse
     */
    setRecursiveFolderSearch(recurse : boolean) : void

    /**
     * Returns an URL that you can use to execute a query for a specific Content.
     * @param action
     * @param cid
     */
    static urlForContent(action : string, cid : string) : URL

    /**
     * Returns an URL that you can use to execute a query for a specific Content.
     * @param url
     * @param cid
     */
    static urlForContent(url : URL, cid : string) : URL

    /**
     * Returns an URL that you can use to execute a query for a specific Folder.
     * @param action
     * @param fid
     */
    static urlForFolder(action : string, fid : string) : URL

    /**
     * Returns an URL that you can use to execute a query for a specific Folder.
     * @param url
     * @param fid
     */
    static urlForFolder(url : URL, fid : string) : URL

    /**
     * Returns an URL that you can use to execute a query for a specific attribute name-value pair.
     * @param action
     * @param name
     * @param value
     */
    static urlForRefine(action : string, name : string, value : string) : URL

    /**
     * Returns an URL that you can use to execute a query for a specific attribute name-value pair.
     * @param url
     * @param name
     * @param value
     */
    static urlForRefine(url : URL, name : string, value : string) : URL

    /**
     * Returns an URL that you can use to re-execute the query using the specified pipeline action and folder refinement.
     * @param action
     * @param refineFolderID
     */
    urlRefineFolder(action : string, refineFolderID : string) : URL

    /**
     * Returns an URL that you can use to re-execute the query using the specified URL and folder refinement.
     * @param url
     * @param refineFolderID
     */
    urlRefineFolder(url : URL, refineFolderID : string) : URL

    /**
     * Returns an URL that you can use to re-execute the query with no folder refinement.
     * @param action
     */
    urlRelaxFolder(action : string) : URL

    /**
     * Returns an URL that you can use to re-execute the query with no folder refinement.
     * @param url
     */
    urlRelaxFolder(url : URL) : URL

}

export = ContentSearchModel;
