

import EncryptedObject = require('../customer/EncryptedObject');
import CertificateRef = require('../crypto/CertificateRef');
import CustomAttributes = require('../object/CustomAttributes');

declare global {
    module ICustomAttributes {
        interface ServiceCredential extends CustomAttributes{
        }
    }
}

declare class ServiceCredential extends EncryptedObject<ICustomAttributes.ServiceCredential> {
    /**
     * Constant for specification of the public key encryption algorithm RSA.
     */
    static ENCRYPTION_ALGORITHM_RSA: string;
    /**
     * Returns the unique Credential ID.
     */
    getID(): string;
    /**
     * Returns the User ID.
     */
    getUser(): string;
    /**
     * Returns the Password in plain text.
     */
    getPassword(): string;
    /**
     * Return the URL.
     */
    getURL(): string;
    /**
     * Encrypts the password from this object with the given algorithm
     * and the public key taken from a certificate in the keystore.
     * Returned is the base64-encoded representation of the result.
     * See also [Cipher.encrypt_2(String, CertificateRef, String, String, Number)](https://info.demandware.com/DOC2/index.jsp?topic=%2Fcom.demandware.dochelp%2FDWAPI%2Fscriptapi%2Fhtml%2Fapi%2Fclass_dw_crypto_Cipher.html&anchor=dw_crypto_Cipher_encrypt_2_String_CertificateRef_String_String_Number_DetailAnchor) on how to generate RSA key pairs.
     */
    getEncryptedPassword(algorithm: string, publicKey: CertificateRef): string;
}

export = ServiceCredential;
