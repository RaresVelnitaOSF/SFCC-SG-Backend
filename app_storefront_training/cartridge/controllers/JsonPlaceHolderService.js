"use strict";

var guard = require("app_storefront_controllers/cartridge/scripts/guard");
var ISML = require("dw/template/ISML"); 

function getPhotos() {
    const flickrServiceRegistry = require("../scripts/FlickrServiceRegistryGet");

    const apiHelpers = require("../scripts/apiHelpers");
    
    const dictionary = {
        createRequest: function (HTTPService) {
            HTTPService.setRequestMethod("GET");
        },
        parseResponse: function (HTTPService, client) {
            if (client.statusCode == 200) {
                var message = client.text;
                try {
                    var responseJSON = JSON.parse(message);

                    // get only photos with albumId < 3
                    return apiHelpers.filterByAlbumID(responseJSON);
                }
                catch (e) {
                    if (e) {
                        return "An error occured while parsing the text response";
                    }
                }
            }
        }
    }

    const flickrService = flickrServiceRegistry.Get("app_storefront_training.https.get.jsonplaceholder", dictionary);

    const serviceUrl = flickrService.getURL();
    flickrService.setURL(serviceUrl + "/photos");

    const Result = flickrService.call();

    const status = Result.status;
    const body = Result.object;
    const errorMessage = Result.errorMessage;

    if (Result.ok) {
        ISML.renderTemplate("api/jsonPlaceHolder", {
            error : errorMessage,
            filteredJson : body
        });
    } else {
        ISML.renderTemplate("api/jsonPlaceHolder", {
            error : "An error occurred with status code "+ status + " - " + errorMessage,
        });
    }
}

exports.Show = guard.ensure(["get"], getPhotos);
