
import EnumValue = require('./value/EnumValue')
import MarkupText = require('./content/MarkupText');


// example of definitions for custom objects attrs
// this file should not be edited but copyed in new place and edited there
declare global {
    module ICustomAttributes {
        interface Appeasement {

        }
        interface AppeasementItem {

        }
        interface Basket {

        }
        interface BonusDiscountLineItem {

        }
        interface Campaign {

        }
        interface Catalog {

        }
        interface Category {

        }
        interface CategoryAssignment {

        }
        interface Content {
            /**
             * Body
             */
            body: MarkupText
        }
        interface Coupon {

        }
        interface CouponLineItem {

        }
        interface CustomerActiveData {

        }
        interface CustomerAddress {

        }
        interface CustomerGroup {

        }
        interface CustomerPaymentInstrument {

        }
        interface Folder {

        }
        interface GiftCertificate {

        }
        interface GiftCertificateLineItem {

        }
        interface Invoice {

        }
        interface InvoiceItem {

        }
        interface Library {

        }
        interface Order {

        }
        interface OrderAddress {

        }
        interface OrderItem {

        }
        interface OrderPaymentInstrument {

        }
        interface OrganizationPreferences {

        }
        interface PaymentCard {

        }
        interface PaymentMethod {

        }
        interface PaymentTransaction {

        }
        interface PriceAdjustment {

        }
        interface PriceBook {

        }
        interface Product {

        }
        interface ProductActiveData {

        }
        interface ProductInventoryList {

        }
        interface ProductInventoryRecord {

        }
        interface ProductLineItem {

        }
        interface ProductList {

        }
        interface ProductListItem {

        }
        interface ProductListItemPurchase {

        }
        interface ProductListRegistrant {

        }
        interface Profile {

        }
        interface Promotion {

        }
        interface Recommendation {

        } 
        interface Return {

        }
        interface ReturnCase {

        }
        interface ReturnCaseItem {

        }
        interface ReturnItem {

        }
        interface ServiceConfig {

        }
        interface ServiceCredential {

        }
        interface ServiceProfile {

        }
        interface Shipment {

        }
        interface ShippingLineItem {

        }
        interface ShippingMethod {

        }
        interface ShippingOrder {

        }
        interface ShippingOrderItem {

        }
        interface SitePreferences {
            /**
             * Enable Infinite Scroll 
             */
            enableInfiniteScroll: boolean
        }
        interface SlotConfiguration {

        }
        interface SourceCodeGroup {

        }
        interface Store {

        }
        interface StoreGroup {

        }
        interface TrackingInfo {

        }
        interface TrackingRef {

        }
    }
}

