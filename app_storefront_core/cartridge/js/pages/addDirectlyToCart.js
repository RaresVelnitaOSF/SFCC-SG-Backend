"use strict";

var dialog = require('../dialog');

function addProductDirectlyToCart(){
    var productID = $('#customSearchValue').val();
    if (productID) {
        $.ajax({
            url: Urls.addDirectlyToCart,
            data: {
                productID: productID
            }
        }).done(function (response) {
            if (response.success) {
                $.ajax({
                    url: Urls.addProduct,
                    method: 'post',
                    data: {
                        pid : productID
                    }
                }).done( function (){
                    window.location.href = Urls.cartShow;
                });
            } else {
                dialog.open({
                    html: '<h2>' + response.errorMessage + '</h2>',
                    options: {
                        buttons: [{
                            text: Resources.OK,
                            click: function () {
                                $(this).dialog('close');
                            }
                        }]
                    }
                });
            }
        })
    }
}

$('#customSearchButton').on('click', function (e){
    e.preventDefault();
    addProductDirectlyToCart();
})

