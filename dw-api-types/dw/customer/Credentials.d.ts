import Status = require('../system/Status');

declare class Credentials {
    authenticationProviderID  :  string;
    enabled  :  Boolean;
    enabledFlag  :  Boolean;
    externalID  :  string;
    locked  :  Boolean;
    login  :  string;
    passwordAnswer  :  string;
    passwordQuestion  :  string;
    remainingLoginAttempts  :  number;

    createResetPasswordToken() : string;
    getAuthenticationProviderID() : string;
    getEnabledFlag() : Boolean;
    getExternalID() : string;
    getLogin() : string;
    getPasswordAnswer() : string;
    getPasswordQuestion() : string;
    getRemainingLoginAttempts() : number;
    isEnabled() : Boolean;
    isLocked() : Boolean;
    setAuthenticationProviderID(authenticationProviderID : string) : void;
    setEnabledFlag(enabledFlag : boolean) : void;
    setExternalID(externalID : string) : void;
    setLogin(newLogin : string, currentPassword : string) : Boolean;
    setPassword(newPassword : string, oldPassword : string, verifyOldPassword : boolean) : Status;
    setPasswordAnswer(answer : string) : void;
    setPasswordQuestion(question : string) : void;
    setPasswordWithToken(token : string, newPassword : string) : Status;
}

export = Credentials;