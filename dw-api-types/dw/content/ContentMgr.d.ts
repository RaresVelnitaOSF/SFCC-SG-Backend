import Library = require('./Library');
import Content = require('./Content');
import Folder = require('./Folder');

declare class ContentMgr {
    private constructor();

    /**
     * The content library of the current site.
     */
    readonly siteLibrary: Library | null;

    /**
     * Returns the content with the corresponding identifier within the current site's site library.
     * @param id - the ID of the content asset to find.
     */
    static getContent(id : String) : Content | null;
    /**
     * Returns the folder identified by the specified id within the current site's site library.
     * @param id - the ID of the folder to find.
     */
    static getFolder(id : String) : Folder | null;
    /**
     * The content library of the current site.
     */
    static getSiteLibrary() : Library | null;

}

export = ContentMgr;
