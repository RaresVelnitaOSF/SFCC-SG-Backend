

/**
 * This class provides functionality to call hooks. A hook is an extension point in the business logic, where you can register scripts to customize functionality.
 */
declare class HookMgr {
    private constructor();

    /**
     * Calls a hook on base of the specified extensionPoint and function.
     * @param extensionPoint 
     */
    static callHook(extensionPoint : string, fn : String, ...args : any[]) : any

    /**
     * Checks whether a hook is registered or a system default implementation exists for this extension point.
     * @param extensionPoint 
     */
    static hasHook(extensionPoint : string) : boolean

}

export = HookMgr;