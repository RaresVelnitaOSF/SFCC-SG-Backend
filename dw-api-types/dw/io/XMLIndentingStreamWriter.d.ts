import Writer = require('./Writer');
import XMLStreamWriter = require('./XMLStreamWriter');

declare class XMLIndentingStreamWriter extends XMLStreamWriter {
    /**
     * The indent.
     */
    indent : String
    /**
     * The string that is used for a new line character.
     * The default is the normal new line character.
     */
    newLine : String
    /**
     * Constructs the writer for the specified writer.
     * @param writer - the writer to use.
     */
    constructor(writer : Writer);
    /**
     * Returns the indent.
     */
    getIndent() : String
    /**
     * Returns the string that is used for a new line character.
     * The default is the normal new line character.
     */
    getNewLine() : String
    /**
     * Specifies a string that will be used as identing characters.
     * The default are two space characters.
     * @param indent - The indent to set.
     */
    setIndent(indent : String) : void
    /**
     * Sets the string that is used for a new line character.
     * @param newLine - The newLine to set.
     */
    setNewLine(newLine : String) : void
}

export = XMLIndentingStreamWriter;
