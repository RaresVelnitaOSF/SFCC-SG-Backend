

declare class MarkupText {
    // The content with all links rewritten for storefront use.
    markup  :  string;
    // The original content source, without any links re-written.
    source  :  string;

    getMarkup() : string;
    getSource() : string;
    toString() : string;
}

export = MarkupText;
