

declare class PageMetaTag {
    private constructor();
    /**
     * The page meta tag content.
     */
    readonly content  :  string;
    /**
     * The page meta tag ID.
     */
    readonly ID : string;
    /**
     * Returns true if the page meta tag type is name, false otherwise.
     */
    readonly name: boolean;
    /**
     * Returns true if the page meta tag type is property, false otherwise.
     */
    readonly property: boolean
    /**
     * Returns true if the page meta tag type is title, false otherwise.
     */
    readonly title: boolean
}

export = PageMetaTag;