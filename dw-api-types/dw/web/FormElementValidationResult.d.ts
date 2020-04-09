import Map = require('../util/Map')

declare class FormElementValidationResult {
    data  :  Map<string, string>
    message  :  string
    valid  :  Boolean

    constructor(valid : Boolean)
    constructor(valid : boolean, message : string)
    constructor(valid : boolean, message : string, data : Map<string, string>)

    addData(key : Object, value : Object) : void
    getData() : Map<string, string>
    getMessage() : string
    isValid() : Boolean
    setMessage(message : string) : void
    setValid(valid : Boolean) : void
}

export = FormElementValidationResult