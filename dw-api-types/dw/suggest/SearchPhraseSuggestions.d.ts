import Iterator = require('../util/Iterator');
import SuggestedPhrase = require('./SuggestedPhrase');
import SuggestedTerms = require('./SuggestedTerms');

/**
 * The search phrase suggestions contain a list of suggested search phrases (see SuggestedPhrase) as well as, for each of the search phrase terms, a list with corrected and completed alternative terms
 */
declare class SearchPhraseSuggestions {

    /**
     * A list of SuggestedPhrase objects that relates to the user input search phrase.
     */
    readonly suggestedPhrases  :  Iterator<SuggestedPhrase>

    /**
     * A list of SuggestedTerms objects. Each of the returned instances represents a set of terms suggested for a particular single term of the user input search phrase.
     */
    readonly suggestedTerms  :  Iterator<SuggestedTerms>


    private constructor();

    /**
     * Returns a list of SuggestedPhrase objects that relates to the user input search phrase.
     */
    getSuggestedPhrases() : Iterator<SuggestedPhrase>

    /**
     * Returns a list of SuggestedTerms objects.
     */
    getSuggestedTerms() : Iterator<SuggestedTerms>

    /**
     * Returns whether this suggestions container has any suggested phrases.
     */
    hasSuggestedPhrases() : boolean

    /**
     * Returns whether this suggestions container has any suggested terms.
     */
    hasSuggestedTerms() : boolean

}

export  =  SearchPhraseSuggestions;