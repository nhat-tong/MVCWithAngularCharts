(function () {

    'use strict';

    angular
    .module('app')
    .controller('ProductListCtrl', ProductListController);

    //@ngInject
    function ProductListController($state, ProductListFactory) {
        var vm = this;
        vm.init = init;
        vm.view = view;

        function init() {
            return ProductListFactory.getProducts().then(function (data) {
                vm.products = data;
            });
        }

        // Just for illustrate how to get binary data of image
        function view(url) {
            $state.go('view', {url: url});
        }
    }
})();