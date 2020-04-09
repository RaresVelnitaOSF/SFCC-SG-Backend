import  MediaFile = require('../content/MediaFile')
import List = require('../util/List')

declare class ProductVariationAttributeValue {
    /**
     * The description of the product variation attribute value in the current locale.
     */
    readonly description  :  string

    /**
     * The display value for the product variation attribute value, which can be used in the user interface.
     */
    readonly displayValue  :  string

    /**
     * The ID of the product variation attribute value.
     */
    readonly ID  :  string;

    /**
     * The value for the product variation attribute value.
     */
    readonly value: string;

    /**
     * Returns true if the specified object is equal to this object.
     * @param obj 
     */
    equals(obj : ProductVariationAttributeValue) : boolean

    /**
     * Returns the description of the product variation attribute value in the current locale.
     */
    getDescription() : string;

    /**
     * Returns the display value for the product variation attribute value, which can be used in the user interface.
     */
    getDisplayValue() : string

    /**
     * Returns the ID of the product variation attribute value.
     */
    getID() : string

    /**
     * The method calls getImages(String) and returns the image at the specific index.
     * @param viewtype 
     * @param index 
     */
    getImage(viewtype : string, index : number) : MediaFile

    /**
     * The method calls getImages(String) and returns the first image of the list.
     * @param viewtype 
     */
    getImage(viewtype : string) : MediaFile

    /**
     * Returns all images that match the given view type and have the variant value of this value, which is typically the 'color' attribute.
     * @param viewtype 
     */
    getImages(viewtype : string) : List<MediaFile>

    /**
     * Returns the value for the product variation attribute value.
     */
    getValue() : object

    /**
     * Calculates the hash code for a product variation attribute value.
     */
    hashCode() : number
}

export = ProductVariationAttributeValue;