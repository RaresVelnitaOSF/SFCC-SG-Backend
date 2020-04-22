"use strict";

var guard = require("app_storefront_controllers/cartridge/scripts/guard");
var ISML = require("dw/template/ISML"); 


function showNewsletterForm() {
    var app = require("app_storefront_controllers/cartridge/scripts/app");
    var newsletterForm = app.getForm("newsletter");
    var URLUtils = require("dw/web/URLUtils");
    newsletterForm.clear();
    
    ISML.renderTemplate("newsletterForm", {
        ContinueURL: URLUtils.https("Newsletter-Submit"),
        message : "we will send you a confirmation email."
    }); 
}

function processNewsletterSignup() {
    var URLUtils = require("dw/web/URLUtils");
    var CustomObjectMgr = require("dw/object/CustomObjectMgr");
    var Transaction = require("dw/system/Transaction");

    var newsletterHelpers = require("../scripts/newsletterHelpers");

    var newsletterForm = session.forms.newsletter;

    var email = newsletterForm.email.value;
    var firstName = newsletterForm.firstName.value;
    var lastName = newsletterForm.lastName.value;
    
    if (email && firstName && lastName) {
        var object = CustomObjectMgr.getCustomObject("NewsletterSubscription", email);
        
        if (object === null) {
            Transaction.wrap(function () {
                object = CustomObjectMgr.createCustomObject("NewsletterSubscription", email);  
                var data = object.getCustom();
                data.firstName = firstName;
                data.lastName = lastName;
                
                data.coupon = newsletterHelpers.getCoupon("20$OffSGCampaign");
                
                newsletterHelpers.emailNewsletterUser(data.email, data.firstName, data.coupon);
            });
            response.redirect(URLUtils.https('Home-Show'));
            return;
        } else {
            ISML.renderTemplate("newsletterForm", {
                ContinueURL: URLUtils.https("Newsletter-Submit"),
                message : "this email is aready used."
            });
            return;
        }
    } else {
        ISML.renderTemplate("newsletterForm", {
            ContinueURL: URLUtils.https("Newsletter-Submit"),
            message : "there is an error in your form"
        });
        return;
    }
}

exports.Show = guard.ensure(["get"], showNewsletterForm);
exports.Submit = guard.ensure(["post" , "https"], processNewsletterSignup);
