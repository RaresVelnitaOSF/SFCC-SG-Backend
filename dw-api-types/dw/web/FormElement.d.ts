import FormElementValidationResult = require('./FormElementValidationResult')

declare class FormElement {
    dynamicHtmlName  :  string
    formId  :  string
    htmlName  :  string
    parent  :  FormElement
    valid  :  boolean
    validationResult  :  FormElementValidationResult

    clearFormElement() : void
    getDynamicHtmlName() : string
    getFormId() : string
    getHtmlName() : string
    getParent() : FormElement
    getValidationResult() : FormElementValidationResult
    invalidateFormElement() : void
    invalidateFormElement(error : string) : void
    isValid() : boolean


}

export = FormElement;
