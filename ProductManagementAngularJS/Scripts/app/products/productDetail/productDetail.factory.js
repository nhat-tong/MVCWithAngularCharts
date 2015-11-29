(function () {
    'use strict';

    angular
    .module('app')
    .factory('ProductDetailFactory', ProductDetailFactory);

    //@ngInject
    function ProductDetailFactory($http) {
        var service = {
            getProductDetail: getProductDetail
        };

        return service;

        function getProductDetail(productCode) {
            return $http({
                method: 'GET',
                url: '/api/Product/GetProductDetail',
                params: { productCode: productCode }
            }).then(function (response) {
                return response.data;
            });
        }
    }
})();