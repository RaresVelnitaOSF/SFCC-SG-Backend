

/**
 * Represents the current transaction. A transaction provides a context for performing atomic changes to persistent business objects. Before a business object can be created, changed, or deleted, a transaction must be started using the begin() method. All changes on the touched business objects will only be made durable when the transaction is committed with commit(). Without commit, the changes will be lost again after the request was served. If a transaction is rolled back, all changes so far will be reverted and the business object will have their previous state again. It is possible to begin a transaction multiple times in a nested way (like begin-begin-commit-commit). In this case, in order to commit the changes the commit method must be called symmetrically as often as begin. It is also possible to run multiple transactions within a single request, one after another (like begin-commit-begin-commit). In case of any exception while working with business objects inside of a transaction, the transaction cannot be committed anymore, but only be rolled back. Business code may try to take appropriate actions if it expects business-related problems at commit (for example, constraint violations). 
 */


declare class Transaction {
    private constructor();

    /**
     * Begins a transaction.
     */
    static begin() : TransactionalContext

    /**
     * Commits the current transaction.
     */
    static commit() : void

    /**
     * Rolls back the current transaction.
     */
    static rollback() : void

    /**
     * Encloses the provided callback function in a begin-commit transactional context. If the transaction cannot be committed successfully, it is rolled back instead and an exception is thrown.
     * @param callback  a function that should be executed within a transactional context
     * @returns the result of the callback function, if it returns something
     */
    static wrap<T>(callback : () => T) : T
}

interface TransactionalContext {
    none: string;
}

interface TransactionCallback<T> {
    (tcontext: TransactionalContext): T
}

export = Transaction;