import ExtensibleObject = require('../object/ExtensibleObject');
import Collection = require('../util/Collection');
import Folder = require('./Folder');
import PageMetaTag = require('../web/PageMetaTag');
import MarkupText = require('../content/MarkupText');
import CustomAttributes = require('../object/CustomAttributes');

declare global {
    module ICustomAttributes {
        interface Content extends CustomAttributes{
        }
    }
}

declare class Content extends ExtensibleObject<ICustomAttributes.Content> {
    private constructor();
    readonly classificationFolder : Folder | null;
    readonly description  :  string | null;
    readonly folders  :  Collection<Folder>;
    readonly ID  :  string;
    readonly name  :  string;
    readonly online  :  boolean;
    readonly onlineFlag  :  boolean;
    readonly pageDescription  :  string | null;
    readonly pageKeywords  :  string | null;
    readonly pageMetaTags : Array<PageMetaTag>;
    readonly pageTitle  :  string | null;
    readonly pageURL  :  string;
    readonly searchable  :  boolean;
    readonly searchableFlag  :  boolean;
    readonly siteMapChangeFrequency  :  string;
    readonly siteMapPriority: number;
    readonly template  :  string;

    getClassificationFolder() : Folder | null;
    getDescription() : string;
    getFolders() : Collection<Folder>;
    getID() : string;
    getName() : string;
    getOnlineFlag() : boolean;
    getPageDescription() : string | null;
    getPageKeywords() : string | null;
    getPageMetaTag(id : string) : PageMetaTag | null
    getPageMetaTags() : Array<PageMetaTag>
    getPageTitle() : string | null;
    getPageURL() : string;
    getSearchableFlag() : boolean;
    getSiteMapChangeFrequency() : string;
    getSiteMapPriority() : number;
    getTemplate() : string | null;
    isOnline() : boolean;
    isSearchable() : boolean;

}

export = Content;
