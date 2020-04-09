import Reader = require('./Reader');

/**
 * The XMLStreamReader allows forward, read-only access to XML. It is designed to be the lowest level and most efficient way to read XML data.
 */
declare class XMLStreamReader {

    /**
     * The count of attributes on this START_ELEMENT, this method is only valid on a START_ELEMENT or ATTRIBUTE. This count excludes namespace definitions. Attribute indices are zero-based.
     */
    readonly attributeCount  :  number

    /**
     * The character encoding declared on the XML declaration Returns null if none was declared.
     */
    readonly characterEncodingScheme  :  string

    /**
     * Identifies if the cursor points to a character data event.
     */
    readonly characters  :  boolean

    /**
     * The column number where the current event ends or -1 if none is available.
     */
    readonly columnNumber  :  number

    /**
     * Reads the content of a text-only element, an exception is thrown if this is not a text-only element. Regardless of value of javax.xml.stream.isCoalescing this method always returns coalesced content.
     *
    Precondition: the current event is START_ELEMENT.
    */
    readonly elementText  :  string

    /**
     * Return input encoding if known or null if unknown.
     */
    readonly encoding  :  string

    /**
     * Identifies if the cursor points to an end tag.
     */
    readonly endElement  :  boolean
    /**
     * An integer code that indicates the type of the event the cursor is pointing to.
     */
    readonly eventType  :  number

    /**
     * The line number where the current event ends or -1 if none is available.
     */
    readonly lineNumber  :  number

    /**
     * The (local) name of the current event. For START_ELEMENT or END_ELEMENT returns the (local) name of the current element. For ENTITY_REFERENCE it returns entity name. The current event must be START_ELEMENT or END_ELEMENT, or ENTITY_REFERENCE.
     */
    readonly localName  :  string

    /**
     * The count of namespaces declared on this START_ELEMENT or END_ELEMENT, this method is only valid on a START_ELEMENT, END_ELEMENT or NAMESPACE. On an END_ELEMENT the count is of the namespaces that are about to go out of scope. This is the equivalent of the information reported by SAX callback for an end element event.
     */
    readonly namespaceCount  :  number
    /**
     * If the current event is a START_ELEMENT or END_ELEMENT this method returns the URI of the prefix or the default namespace. Returns null if the event does not have a prefix.
     */
    readonly namespaceURI  :  string

    /**
     * Get the data section of a processing instruction.
     */
    readonly PIData  :  string

    /**
     * Get the target of a processing instruction.
     */
    readonly PITarget  :  string

    /**
     * The prefix of the current event or null if the event does not have a prefix
     */
    readonly prefix  :  string

    /**
     * Get the standalone declaration from the xml declaration.
     */
    readonly standalone  :  boolean

    /**
     * Identifies if the cursor points to a start tag.
     */
    readonly startElement  :  boolean

    /**
     * The current value of the parse event as a string, this returns the string value of a CHARACTERS event, returns the value of a COMMENT, the replacement value for an ENTITY_REFERENCE, the string value of a CDATA section, the string value for a SPACE event, or the String value of the internal subset of the DTD. If an ENTITY_REFERENCE has been resolved, any character data will be reported as CHARACTERS events.
     */
    readonly text  :  string

    /**
     * The length of the sequence of characters for this Text event within the text character array.
     */
    readonly textLength  :  number

    /**
     * The offset into the text character array where the first character (of this text event) is stored.
     */
    readonly textStart  :  number

    /**
     * Get the xml version declared on the xml declaration. Returns null if none was declared.
     */
    readonly version  :  string

    /**
     * Identifies if the cursor points to a character data event that consists of all whitespace.
     */
    readonly  whiteSpace  :  boolean
    /**
     * Reads a sub-tree of the XML document and parses it as XML object.
    The stream must be positioned on a START_ELEMENT. Do not call the method when the stream is positioned at document's root element. This would cause the whole document to be parsed into a single XML what may lead to an out-of-memory condition. Instead use #next() to navigate to sub-elements and invoke getXMLObject() there. Do not keep references to more than the currently processed XML to keep memory consumption low. The method reads the stream up to the matching END_ELEMENT. When the method returns the current event is the END_ELEMENT event.
    */
    readonly XMLObject  :  object

    /**
     * Constructs the stream readon on behalf of the reader.
     * @param reader
     */
    constructor(reader : Reader);

    /**
     * Frees any resources associated with this Reader.
     */
    close() : void

    /**
     * Returns the count of attributes on this START_ELEMENT, this method is only valid on a START_ELEMENT or ATTRIBUTE.
     */
    getAttributeCount() : number

    /**
     * Returns the localName of the attribute at the provided index.
     * @param index
     */
    getAttributeLocalName(index : number) : string

    /**
     * Returns the namespace of the attribute at the provided index.
     * @param index
     */
    getAttributeNamespace(index : number) : string

    /**
     * Returns the prefix of this attribute at the provided index.
     * @param index
     */
    getAttributePrefix(index : number) : string

    /**
     * Returns the XML type of the attribute at the provided index.
     * @param index
     */
    getAttributeType(index : number) : string

    /**
     * Returns the normalized attribute value of the attribute with the namespace and localName If the namespaceURI is null the namespace is not checked for equality
     * @param namespaceURI
     * @param localName
     */
    getAttributeValue(namespaceURI : string, localName : string) : string

    /**
     * Returns the value of the attribute at the index.
     * @param index
     */
    getAttributeValue(index : number) : string

    /**
     * Returns the character encoding declared on the XML declaration Returns null if none was declared.
     */
    getCharacterEncodingScheme() : string

    /**
     * Returns the column number where the current event ends or -1 if none is available.
     */
    getColumnNumber() : number

    /**
     * Reads the content of a text-only element, an exception is thrown if this is not a text-only element.
     */
    getElementText() : string

    /**
     * Return input encoding if known or null if unknown.
     */
    getEncoding() : string | null

    /**
     * Returns an integer code that indicates the type of the event the cursor is pointing to.
     */
    getEventType() : number

    /**
     * Returns the line number where the current event ends or -1 if none is available.
     */
    getLineNumber() : number

    /**
     * Returns the (local) name of the current event.
     */
    getLocalName() : string

    /**
     * Returns the count of namespaces declared on this START_ELEMENT or END_ELEMENT, this method is only valid on a START_ELEMENT, END_ELEMENT or NAMESPACE.
     */
    getNamespaceCount() : number

    /**
     * Returns the prefix for the namespace declared at the index.
     * @param index
     */
    getNamespacePrefix(index : number) : string

    /**
     * Return the uri for the given prefix.
     * @param prefix
     */
    getNamespaceURI(prefix : string) : string

    /**
     * Returns the uri for the namespace declared at the index.
     * @param index
     */
    getNamespaceURI(index : number) : string

    /**
     * If the current event is a START_ELEMENT or END_ELEMENT this method returns the URI of the prefix or the default namespace.
     */
    getNamespaceURI() : string

    /**
     * Get the data section of a processing instruction.
     */
    getPIData() : string

    /**
     * Get the target of a processing instruction.
     */
    getPITarget() : string

    /**
     * Returns the prefix of the current event or null if the event does not have a prefix
     */
    getPrefix() : string

    /**
     * Returns the current value of the parse event as a string, this returns the string value of a CHARACTERS event, returns the value of a COMMENT, the replacement value for an ENTITY_REFERENCE, the string value of a CDATA section, the string value for a SPACE event, or the String value of the internal subset of the DTD.
     */
    getText() : string

    /**
     * Returns the length of the sequence of characters for this Text event within the text character array.
     */
    getTextLength() : number

    /**
     * Returns the offset into the text character array where the first character (of this text event) is stored.
     */
    getTextStart() : number

    /**
     * Get the xml version declared on the xml declaration.
     */
    getVersion() : string

    /**
     * Reads a sub-tree of the XML document and parses it as XML object.
     */
    getXMLObject() : object

    /**
     * Identifies if the current event has a name (is a START_ELEMENT or END_ELEMENT)
     */
    hasName() : boolean

    /**
     * Returns true if there are more parsing events and false if there are no more events.
     */
    hasNext() : boolean

    /**
     * Indicates if the current event has text.
     */
    hasText() : boolean

    /**
     * Identifies if this attribute was created by default.
     * @param index
     */
    isAttributeSpecified(index : number) : boolean

    /**
     * Identifies if the cursor points to a character data event.
     */
    isCharacters() : boolean

    /**
     * Identifies if the cursor points to an end tag.
     */
    isEndElement() : boolean

    /**
     * Get the standalone declaration from the xml declaration.
     */
    isStandalone() : boolean

    /**
     * Identifies if the cursor points to a start tag.
     */
    isStartElement() : boolean

    /**
     * Identifies if the cursor points to a character data event that consists of all whitespace.
     */
    isWhiteSpace() : boolean

    /**
     * Get next parsing event - a processor may return all contiguous character data in a single chunk, or it may split it into several chunks.
     */
    next() : number

    /**
     * Skips any white space (isWhiteSpace() returns true), COMMENT, or PROCESSING_INSTRUCTION, until a START_ELEMENT or END_ELEMENT is reached.
     */
    nextTag() : number

    /**
     * Test if the current event is of the given type and if the namespace and name match the current namespace and name of the current event.
     * @param type
     * @param namespaceURI
     * @param localName
     */
    require(type : number, namespaceURI : string, localName : string) : void

    /**
     * Identifies if standalone was set in the document.
     */
    standaloneSet() : boolean

    /**
     *   Reads a sub-tree of the XML document and parses it as XML object.
     *
    The stream must be positioned on a START_ELEMENT. Do not call the method when the stream is positioned at document's root element. This would cause the whole document to be parsed into a single XML what may lead to an out-of-memory condition. Instead use #next() to navigate to sub-elements and invoke getXMLObject() there. Do not keep references to more than the currently processed XML to keep memory consumption low. The method reads the stream up to the matching END_ELEMENT. When the method returns the current event is the END_ELEMENT event.
     */
    readXMLObject() : XML


}

export = XMLStreamReader;
