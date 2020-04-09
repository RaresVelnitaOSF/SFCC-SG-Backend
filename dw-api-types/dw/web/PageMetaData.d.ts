

declare class PageMetaData {
    description  :  string;
    keywords  :  string;
    title  :  string;

    getDescription() : string;
    getKeywords() : string;
    getTitle() : string;

    setDescription(description : string) : void;
    setKeywords(keywords : string) : void;
    setTitle(title : string) : void;
}

export = PageMetaData;