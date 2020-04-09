import Writer = require('./Writer')

declare class PrintWriter extends Writer {

    /**
     * Prints the given string into the output stream.
     * @param str - the String object
     */
    print(str : string) : void

    /**
     * Print the given string followed by a line break into the output stream.
     * @param str - the String object
     */
    println(str : string) : void

    /**
     * Prints a line break into the output stream.
     */
    println() : void
}

export = PrintWriter