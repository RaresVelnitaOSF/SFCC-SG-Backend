module.exports.JS = [
    "app_storefront_training/**/*.js",  // include all JS files from the app_demo cartridge
    "!app_storefront_training/cartridge/client/default/js/specific-file.js" // exclude this JavaScript file using a path pattern that begins with "!"
];

module.exports.SCSS = [
    "app_storefront_training/cartridge/scss/*/*.scss"
];

module.exports.ISML = [
    "app_storefront_training/cartridge/templates/**/*.isml"
];