import Collection = require('../util/Collection');
import ExtensibleObject = require('../object/ExtensibleObject');
import Content = require('./Content');
import CustomAttributes = require('../object/CustomAttributes');

declare global {
    module ICustomAttributes {
        interface Folder extends CustomAttributes{
        }
    }
}

declare class Folder extends ExtensibleObject<ICustomAttributes.Folder>{
    readonly content  :  Collection<Content>;
    readonly description  :  string | null;
    readonly displayName  :  string | null;
    readonly ID  :  string;
    readonly online  :  boolean;
    readonly onlineContent  :  Collection<Content>;
    readonly onlineSubFolders  :  Collection<Folder>;
    readonly pageDescription  :  string | null;
    readonly pageKeywords  :  string | null;
    readonly pageTitle  :  string | null;
    readonly pageURL  :  string | null;
    readonly parent  :  Folder | null;
    readonly root  :  boolean;
    readonly subFolders  :  Collection<Folder>;
    readonly template  :  string | null;

    private constructor();

    /**
     * Returns the content objects for this folder, sorted by position.
     */
    getContent() : Collection<Content>

    /**
     * Returns the description for the folder as known in the current locale or null if it cannot be found.
     */
    getDescription() : string | null

    /**
     * Returns the display name for the folder as known in the current locale or null if it cannot be found.
     */
    getDisplayName() : string | null

    /**
     * Returns the ID of the folder.
     */
    getID() : string

    /**
     * Returns the online content objects for this folder, sorted by position.
     */
    getOnlineContent() : Collection<Content>

    /**
     * Returns the online subfolders of this folder, sorted by position.
     */
    getOnlineSubFolders() : Collection<Folder>

    /**
     * Returns the page description for this folder using the value in the current locale, or returns null if no value was found.
     */
    getPageDescription() : string | null

    /**
     * Returns the page keywords for this folder using the value in the current locale, or returns null if no value was found.
     */
    getPageKeywords() : string | null

    /**
     * Returns the page title for this folder using the value in the current locale, or returns null if no value was found.
     */
    getPageTitle() : string | null

    /**
     * Returns the page URL for this folder using the value in the current locale, or returns null if no value was found.
     */
    getPageURL() : string | null

    /**
     * Returns the parent folder of this folder.
     */
    getParent() : Folder | null

    /**
     * Returns the subfolders of this folder, sorted by position.
     */
    getSubFolders() : Collection<Folder>

    /**
     * Returns the name of the template used to render the folder in the store front.
     */
    getTemplate() : string | null

    /**
     * Indicates if the folder is set online or offline.
     */
    isOnline() : boolean

    /**
     * Indicates if this is the root folder.
     */
    isRoot() : boolean

}

export = Folder;
