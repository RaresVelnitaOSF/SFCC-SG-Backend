"use strict";

var guard = require("app_storefront_controllers/cartridge/scripts/guard");
var ISML = require("dw/template/ISML"); 

function getPhotos() {
    var HTTPClient = require("dw/net/HTTPClient");
    var httpClient = new HTTPClient();
    
    var apiHelpers = require("../scripts/apiHelpers");

    httpClient.open("GET", "https://jsonplaceholder.typicode.com/photos");
    httpClient.setTimeout(3000);
    httpClient.send();
    if (httpClient.statusCode == 200) {
        var message = httpClient.text;
        try {
            var responseJSON = JSON.parse(message);

            // get only photos with albumId < 3
            var filteredJson = apiHelpers.filterByAlbumID(responseJSON);

            ISML.renderTemplate("api/jsonPlaceHolder", {
                    filteredJson : filteredJson
            });
        }
        catch (e) {
            if (e) {
                ISML.renderTemplate("error/notfound");
            }
        }
    } else {
        response.setStatus(httpClient.statusCode);
        ISML.renderTemplate("error/notfound");
    }
}

exports.Show = guard.ensure(["get"], getPhotos);
