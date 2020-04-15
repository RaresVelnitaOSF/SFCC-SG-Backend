"use strict";

/**
 * Function to get new cupon
 * @param {string} couponID - the ID of the coupon
 * @returns {string} - Cupon code or null if no more cupons left
 */ 

function getCoupon(couponID) {
    var CouponMgr = require("dw/campaign/CouponMgr");
    
    var newsletterCoupon = CouponMgr.getCoupon(couponID);
    return newsletterCoupon.getNextCouponCode();
}

/**
 * Function to send eemail Newsletter signed up user
 * @param {string} customerEmail - Email of the person to send
 * @param {string} customerName - Name of the customer to be personalized
 * @param {string} coupon - Coupon code to send to customer
 */ 

function emailNewsletterUser(customerEmail, customerName, coupon) {
    var Resource = require("dw/web/Resource");
    var EmailModel = require("app_storefront_controllers/cartridge/scripts/models/EmailModel");
    var site = require("dw/system/Site");
    
    var sender = site.getCurrent().getCustomPreferenceValue("customerServiceEmail");
    var subject = Resource.msg("newsletter.signup.subject", "email", null);

    var template = "email/newsletterEmail";

    var contextForEmail = {
        customerName: customerName,
        couponAvailable: true,
        coupon: coupon
    };

    if (!coupon) {
        contextForEmail.couponAvailable = false;
    }
    
    EmailModel.sendMail({
        from: sender,
        template: template,
        recipient: customerEmail,
        subject: subject,
        context: {
            context: contextForEmail
        }
    });
}


module.exports = {
    getCoupon : getCoupon,
    emailNewsletterUser : emailNewsletterUser
};
