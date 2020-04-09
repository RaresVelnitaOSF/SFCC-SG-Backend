import FormElement = require('./FormElement')

declare class FormAction extends FormElement {
    description  :  string
    label  :  string
    object  :  object
    submitted  :  boolean
    triggered  :  boolean
    x  :  number
    y  :  number

    getDescription() : string
    getLabel() : string
    getObject() : object
    getX() : number
    getY() : number
    isSubmitted() : boolean
    isTriggered() : boolean
}

export = FormAction