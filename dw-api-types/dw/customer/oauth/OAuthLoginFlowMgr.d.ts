import URLRedirect = require('../../web/URLRedirect');
import OAuthFinalizedResponse = require('./OAuthFinalizedResponse');
import OAuthAccessTokenResponse = require('./OAuthAccessTokenResponse');
import OAuthUserInfoResponse = require('./OAuthUserInfoResponse');
/**
 *
The OAuthLoginFlowMgr encapsulates interactions with third party OAuth providers.
 */
declare class OAuthLoginFlowMgr {
    constructor();

    /**
     * This method works in tandem with the initiateOAuthLogin(String) method.
     */
    static finalizeOAuthLogin() : OAuthFinalizedResponse

    /**
     * This method works in tandem with another method - finalizeOAuthLogin().
     * @param oauthProviderId
     */
    static initiateOAuthLogin(oauthProviderId : string) : URLRedirect

    /**
     * This method is called internally by finalizeOAuthLogin().
     */
    static obtainAccessToken() : OAuthAccessTokenResponse

    /**
     * This method is called internally by finalizeOAuthLogin().
     * @param oauthProviderId
     * @param accessToken
     */
    static obtainUserInfo(oauthProviderId : string, accessToken : string) : OAuthUserInfoResponse


}

export = OAuthLoginFlowMgr;
