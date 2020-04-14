'use strict';

var guard = require('app_storefront_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML'); 

function start() { 
    ISML.renderTemplate(
       'helloworld1.isml',{
            myParameter:"Hello from Controllers"
        }
    );
};

exports.Start = guard.ensure(['get'], start);
