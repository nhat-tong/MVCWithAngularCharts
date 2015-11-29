(function () {

    'use strict';

    angular
    .module('app')
    .controller('ProductDetailCtrl', ProductDetailController);

    //@ngInject
    function ProductDetailController(ProductDetailFactory, $stateParams) {
        var vm = this;
        vm.init = init;
        vm.productCode = $stateParams.productCode;
        vm.productDetail = null;

        function init() {
            return ProductDetailFactory.getProductDetail(vm.productCode).then(function (data) {
                console.log(data);
                vm.productDetail = data;
            });
        }
    }
})();