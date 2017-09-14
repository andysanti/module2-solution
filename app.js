(function () {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var showList = this;
        showList.items = ShoppingListCheckOffService.getItems();
        showList.buy = function (index) {
            ShoppingListCheckOffService.quitaryagregar(index);

        }



    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var showBought = this;


        showBought.items =
            ShoppingListCheckOffService.getItemsBuy();
        showBought.itemsVacio = showBought.items.length == 0;
      



    }

    function ShoppingListCheckOffService() {

        var service = this;

        var bought = [];
        var items = [
            {
                name: "Milk",
                quantity: "2"
            },
            {
                name: "papa",
                quantity: "2"
            },
            {
                name: "Leche",
                quantity: "2"
            },
            {
                name: "Limones",
                quantity: "2"
            },
            {
                name: "Canela",
                quantity: "2"
            }
        ];
        service.getItems = function () {
            return items;
        }
        service.getItemsBuy = function () {
            return bought;
        }

        service.quitaryagregar = function (index) {
            //buscamos
            var item = items[index];
            
            items.splice(index, 1);
            bought.push(item);


        }

    }

})();