import List = require('../util/List');
import MimeEncodedText = require('../value/MimeEncodedText');
import Status = require('../system/Status');

/**
 * This class is used to send an email with either plain text or MimeEncodedText content. Recipient data (from, to, cc, bcc) and subject are specified using setter methods. When the send() method is invoked, the email is put into an internal queue and sent asynchronously.
 */
declare class Mail {
    constructor();

    /**
     * Gets the bcc address List<string>.
     */
    bcc  :  List<string>

    /**
     * Gets the cc address List<string>.
     */
    cc  :  List<string>

    /**
     * Gets the email address to use as the from address for the email.
     */
    from  :  string

    /**
     * Gets the subject of the email.
     */
    subject  :  string

    /**
     * Gets the to address List<string> where the email is sent.
     */
    to  :  List<string>

    /**
     * Adds an address to the bcc List<string>.
     * @param bcc
     */
    addBcc(bcc : string) : Mail

    /**
     * Adds an address to the cc List<string>.
     * @param cc
     */
    addCc(cc : string) : Mail

    /**
     * Adds an address to the to address List<string>.
     * @param to
     */
    addTo(to : string) : Mail

    /**
     * Gets the bcc address List<string>.
     */
    getBcc() : List<string>

    /**
     * Gets the cc address List<string>.
     */
    getCc() : List<string>

    /**
     * Gets the email address to use as the from address for the email.
     */
    getFrom() : string

    /**
     * Gets the subject of the email.
     */
    getSubject() : string

    /**
     * Gets the to address List<string> where the email is sent.
     */
    getTo() : List<string>

    /**
     * prepares an email that is queued to the internal mail system for delivery.
     */
    send() : Status

    /**
     * Sets the bcc address List<string>.
     * @param bcc
     */
    setBcc(bcc : List<string>) : Mail

    /**
     * Sets the cc address List<string> where the email is sent.
     * @param cc
     */
    setCc(cc : List<string>) : Mail

    /**
     * Mandatory Sets the email content.
     * @param content
     */
    setContent(content : string) : Mail

    /**
     * Mandatory Sets the email content, MIME type, and encoding.
     * @param content
     * @param mimeType
     * @param encoding
     */
    setContent(content : string, mimeType : string, encoding : string) : Mail

    /**
     * Mandatory Uses MimeEncodedText to set the content, MIME type and encoding.
     * @param mimeEncodedText
     */
    setContent(mimeEncodedText : MimeEncodedText) : Mail

    /**
     * Mandatory Sets the sender address for this email.
     * @param from
     */
    setFrom(from : string) : Mail

    /**
     * Mandatory sets the subject for the email.
     * @param subject
     */
    setSubject(subject : string) : Mail

    /**
     * Sets the to address List<string> where the email is sent.
     * @param to
     */
    setTo(to : List<string>) : Mail


}

export = Mail;
