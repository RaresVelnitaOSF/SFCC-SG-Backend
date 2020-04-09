import FormGroup = require('./FormGroup');
import FormElement = require('./FormElement');

declare class Form extends FormGroup {
    secureKeyHtmlName  :  string
    secureKeyValue  :  string

    getSecureKeyHtmlName() : string
    getSecureKeyValue() : string

}

export = Form