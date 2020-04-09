import Writer = require('./Writer');

declare class XMLStreamWriter {
    /**
     * The current default name space.
     */
    defaultNamespace : string
    /**
     * Constructs the XMLStreamWriter for a writer.
     * @param writer - the writer for which the XMLStreamWriter is constructed.
     */
    constructor(writer : Writer);
    /**
     * Close this writer and free any resources associated with the writer.
     */
    close() : void
    /**
     * Write any cached data to the underlying output mechanism.
     */
    flush() : void
    /**
     * Returns the current default name space.
     */
    getDefaultNamespace() : string
    /**
     * Gets the prefix the URI is bound to.
     * @param uri - the URI to use.
     */
    getPrefix(uri : string) : string
    /**
     * Binds a URI to the default namespace.
     * This URI is bound in the scope of the current START_ELEMENT / END_ELEMENT pair.
     * If this method is called before a START_ELEMENT has been written the uri is bound in the root scope.
     * @param uri - the uri to bind to the default namespace, may be null.
     */
    setDefaultNamespace(uri : string) : void
    /**
     * Sets the prefix the uri is bound to. This prefix is bound in the scope of the current START_ELEMENT / END_ELEMENT pair.
     * If this method is called before a START_ELEMENT has been written the prefix is bound in the root scope.
     * @param prefix - the prefix to bind to the uri, may not be null.
     * @param uri - the uri to bind to the prefix, may be null.
     */
    setPrefix(prefix : string, uri : string) : void
    /**
     * Writes an attribute to the output stream without a prefix.
     * @param localName - the local name of the attribute.
     * @param value - the value of the attribute.
     */
    writeAttribute(localName : string, value : string) : void
    /**
     * Writes an attribute to the output stream.
     * @param prefix - the prefix for this attribute.
     * @param namespaceURI - the uri of the prefix for this attribute.
     * @param localName - the local name of the attribute.
     * @param value - the value of the attribute.
     */
    writeAttribute(prefix : string, namespaceURI : string, localName : string, value : string) : void
    /**
     * Writes an attribute to the output stream.
     * @param namespaceURI - the uri of the prefix for this attribute.
     * @param localName - the local name of the attribute.
     * @param value - the value of the attribute.
     */
    writeAttribute(namespaceURI : string, localName : string, value : string) : void
    /**
     * Writes a CData section.
     * @param data - the data contained in the CData Section, may not be null.
     */
    writeCData(data : string) : void
    /**
     * Write text to the output.
     * @param text - the value to write.
     */
    writeCharacters(text : string) : void
    /**
     * Writes an XML comment with the data enclosed.
     * @param data - the data contained in the comment, may be null.
     */
    writeComment(data : string) : void
    /**
     * Writes the default namespace to the stream.
     * @param namespaceURI - the uri to bind the default namespace to.
     */
    writeDefaultNamespace(namespaceURI : string) : void
    /**
     * Write a DTD section. This string represents the entire doctypedecl production from the XML 1.0 specification.
     * @param dtd - the DTD to be written.
     */
    writeDTD(dtd : string) : void
    /**
     * Writes an empty element tag to the output.
     * @param namespaceURI - the uri to bind the tag to, may not be null.
     * @param localName - local name of the tag, may not be null.
     */
    writeEmptyElement(namespaceURI : string, localName : string) : void
    /**
     * Writes an empty element tag to the output.
     * @param prefix - the prefix of the tag, may not be null.
     * @param localName - local name of the tag, may not be null.
     * @param namespaceURI - the uri to bind the tag to, may not be null.
     */
    writeEmptyElement(prefix : string, localName : string, namespaceURI : string) : void
    /**
     * Writes an empty element tag to the output.
     * @param localName - local name of the tag, may not be null.
     */
    writeEmptyElement(localName : string) : void
    /**
     * Closes any start tags and writes corresponding end tags.
     */
    writeEndDocument() : void
    /**
     * Writes an end tag to the output relying on the internal state of the writer to determine the prefix and local name of the event.
     */
    writeEndElement() : void
    /**
     * Writes an entity reference.
     * @param name - the name of the entity.
     */
    writeEntityRef(name : string) : void
    /**
     * Writes a namespace to the output stream. If the prefix argument to this method is the empty string, "xmlns", or null this method will delegate to writeDefaultNamespace.
     * @param prefix - the prefix to bind this namespace to.
     * @param namespaceURI - the uri to bind the prefix to.
     */
    writeNamespace(prefix : string, namespaceURI : string) : void
    /**
     * Writes a processing instruction.
     * @param target - the target of the processing instruction, may not be null.
     */
    writeProcessingInstruction(target : string) : void
    /**
     * Writes a processing instruction.
     * @param target - the target of the processing instruction, may not be null.
     * @param data - the data contained in the processing instruction, may not be null.
     */
    writeProcessingInstruction(target : string, data : string) : void
    /**
     * Writes the given string directly into the output stream. No checks regarding the correctness of the XML are done. The caller must ensure that the final result is a correct XML.
     * @param raw - the string to write to the output stream.
     */
    writeRaw(raw : string) : void
    /**
     * Write the XML Declaration. Defaults the XML version to 1.0, and the encoding to utf-8
     */
    writeStartDocument() : void
    /**
     * Write the XML Declaration. Defaults the XML version to 1.0
     * @param version - version of the xml document.
     */
    writeStartDocument(version : string) : void
    /**
     * Write the XML Declaration. Note that the encoding parameter does not set the actual encoding of the underlying output.
     * That must be set when the instance of the XMLStreamWriter is created using the XMLOutputFactory.
     * @param encoding - encoding of the xml declaration.
     * @param version - version of the xml document.
     */
    writeStartDocument(encoding : string, version : string) : void
    /**
     * Writes a start tag to the output.
     * All writeStartElement methods open a new scope in the internal namespace context.
     * Writing the corresponding EndElement causes the scope to be closed.
     * @param localName - local name of the tag, may not be null.
     */
    writeStartElement(localName : string) : void
    /**
     * Writes a start tag to the output.
     * @param namespaceURI - the namespaceURI of the prefix to use, may not be null.
     * @param localName - local name of the tag, may not be null.
     */
    writeStartElement(namespaceURI : string, localName : string) : void
    /**
     * Writes a start tag to the output.
     * @param prefix - the prefix of the tag, may not be null.
     * @param localName - local name of the tag, may not be null.
     * @param namespaceURI - the uri to bind the prefix to, may not be null.
     */
    writeStartElement(prefix : string, localName : string, namespaceURI : string) : void
}

export = XMLStreamWriter;
