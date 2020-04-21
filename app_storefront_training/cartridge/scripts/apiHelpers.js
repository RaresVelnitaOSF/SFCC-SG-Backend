"use strict";

/**
 * Function responsible for filtering the Array by albumId < 3
 * @param {array} data : Array to filter
 * @returns {array} : Array with filter applied
 */

function filterByAlbumID(data) {
    var filteredData = [];

    for (var i=0; i<data.length; i++){
        if (data[i].albumId < "3") {
            filteredData.push(data[i]);
        }
    }
    return filteredData;
}

module.exports = {
    filterByAlbumID : filterByAlbumID
};
