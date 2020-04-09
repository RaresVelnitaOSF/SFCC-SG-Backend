import FormElement = require('./FormElement')
import FormAction = require('./FormAction')

/**
 * The class is the central class within the whole form handling. It is the container element for fields and other form elements. A form group can contain other forms, also called sub-forms. Access to the elements of a form is provided via an index based access or via an associative array access. For example, the field "firstname" can be accessed with the expression "myform.firstname".
 */
declare class FormGroup extends FormElement {
    //private constructor();

    /**
     * The number of elements in the form.
     */
    readonly childCount  :  number

    /**
     * A form-wide error message. If no error message is present the method returns null.
     */
    readonly error  :  string | null

    /**
     * The object that was bound to this form group.
     */
    readonly object  :  any

    /**
     * The action that was submitted with the last request. The action is set independent whether the form must be valid for this action. The method returns null if no action at all was submitted with the last request for this form group.
     */
    readonly submittedAction  :  FormAction | null

    /**
     * The action that was triggered with the last request. An action is only marked as triggered if the constraints regarding form validation are meet. The method returns null if no action was marked as triggered.
     */
    readonly triggeredAction  :  FormAction | null


    /**
     * The method copies the value from a form into the object, which was previously bound to the form.
     */
    accept() : void

    /**
     * The method updates the form with the values from the given object.
     * @param obj 
     */
    copyFrom(obj : any) : void

    /**
     * The method updates the object with the values from the form.
     * @param obj 
     */
    copyTo(obj : any) : void

    /**
     * Returns the number of elements in the form.
     */
    getChildCount() : number

    /**
     * Returns a form-wide error message.
     */
    getError() : string

    /**
     * The object that was bound to this form group.
     */
    getObject() : any

    /**
     * Returns the action that was submitted with the last request.
     */
    getSubmittedAction() : FormAction | null

    /**
     * Returns the action that was triggered with the last request.
     */
    getTriggeredAction() : FormAction | null

    //[index: string] : FormElement
}

export = FormGroup;