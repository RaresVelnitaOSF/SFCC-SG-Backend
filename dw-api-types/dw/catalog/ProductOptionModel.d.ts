import Collection = require('../util/Collection')
import Money = require('../value/Money')
import URL = require('../web/URL')
import ProductOption = require('./ProductOption')
import ProductOptionValue = require('./ProductOptionValue')

declare class ProductOptionModel {
    options  :  Collection<ProductOption>

    getOption(optionID : string) : ProductOption
    getOptions() : Collection<ProductOption>
    getOptionValue(option : ProductOption, valueID : string) : ProductOptionValue
    getOptionValues(option : ProductOption) : Collection<ProductOptionValue>
    getPrice(optionValue : ProductOptionValue) : Money
    getSelectedOptionValue(option : ProductOption) : ProductOptionValue
    isSelectedOptionValue(option : ProductOption, value : ProductOptionValue) : boolean
    setSelectedOptionValue(option : ProductOption, value : ProductOptionValue) : void
    url(action : string, varOptionAndValues : Object) : URL
    urlSelectOptionValue(action : string, option : ProductOption, value : ProductOptionValue) : string

}

export = ProductOptionModel