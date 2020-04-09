import SearchRefinementDefinition = require('./SearchRefinementDefinition');

declare class ProductSearchRefinementDefinition {
    /**
     * Identifies if this is a category refinement.
     */
    readonly categoryRefinement  :  boolean

    /**
     * Identifies if this is a price refinement.
     */
    readonly priceRefinement  :  boolean

    protected constructor();

    /**
     * Identifies if this is a category refinement.
     */
    isCategoryRefinement() : boolean

    /**
     * Identifies if this is a price refinement.
     */
    isPriceRefinement() : boolean
}

export = ProductSearchRefinementDefinition;