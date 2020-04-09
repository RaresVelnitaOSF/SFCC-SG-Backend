import FormField = require('./FormField');
/**
 * Represents an option for a form field.
 */
declare class FormFieldOption {
    private constructor();

    /**
     * Identifies if this option is checked.
     */
    readonly checked  :  boolean

    /**
     * The value for the HTML value attribute of a HTML option element.
     */
    readonly htmlValue  :  string

    /**
     * The value for the HTML label attribute of the HTML option element. If not specified in the form option definition the label is identical with the string representation of option value (see getValue()).
     */
    label  :  string

    /**
     * The object that was bound to this option value.
     */
    readonly object  :  Object

    /**
     * The ID of the option. This is an internal ID used to uniquely reference this option. If not specified in the form option definition the ID is identical with the string representation of the option value (see getValue()).
     */
    readonly optionId  :  string

    /**
     * The parent, which is a field element.
     */
    readonly parent  :  FormField

    /**
     * Identifies if this option is selected.
     */
    readonly selected  :  boolean

    /**
     * The actual value associated with this option. This value is formatted and than returned as HTML value with the method getHtmlValue().
     */
    readonly value  :  Object


    /**
     * Returns the value for the HTML value attribute of a HTML option element.
     */
    getHtmlValue() : string

    /**
     * Returns the value for the HTML label attribute of the HTML option element.
     */
    getLabel() : string

    /**
     * Returns the object that was bound to this option value.
     */
    getObject() : Object

    /**
     * Returns the ID of the option.
     */
    getOptionId() : string

    /**
     * The parent, which is a field element.
     */
    getParent() : FormField

    /**
     * The actual value associated with this option.
     */
    getValue() : Object

    /**
     * Identifies if this option is checked.
     */
    isChecked() : boolean

    /**
     * Identifies if this option is selected.
     */
    isSelected() : boolean

    /**
     * Sets the label attribute for this option.
     * @param label 
     */
    setLabel(label : string) : void


}

export = FormFieldOption;