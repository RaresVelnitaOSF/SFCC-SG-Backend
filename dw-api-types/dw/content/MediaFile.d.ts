import URL = require('../web/URL');

declare type scaleModes = 'cut' | 'fit';

declare type formats = 'tif' | 'tiff' | 'jpg' | 'jpeg' | 'png' | 'gif';

interface ITransform {
    scaleWidth?: number;
    scaleHeight?: number;
    scaleMode?: scaleModes;

    imageX?: number;
    imageY?: number;
    imageURI? : string;

    cropX?: number;
    cropY?: number;
    cropWidth?: number;
    cropHeight?: number;

    format?: formats
}

declare class MediaFile {
    absURL  :  URL;
    alt  :  string;
    httpsURL  :  URL;
    httpURL  :  URL;
    title  :  string;
    URL  :  URL;
    viewType  :  string;

    getAbsImageURL(transform : ITransform) : URL;
    getAbsURL() : URL;
    getAlt() : string;
    getHttpImageURL(transform : ITransform) : URL
    getHttpsImageURL(transform : ITransform) : URL
    getHttpsURL() : URL;
    getHttpURL() : URL;
    getImageURL(transform : ITransform) : URL;
    getTitle() : string;
    getURL() : URL;
    getViewType() : string;
}

export = MediaFile;