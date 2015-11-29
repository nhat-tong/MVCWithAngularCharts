(function () {
    'use strict';

    angular
    .module('app')
    .factory('ProductListFactory', ProductListFactory)

    //@ngInject
    function ProductListFactory($http) {

        var service = {
            getProducts: getProducts,
            getImage: getImage
        };

        return service;

        function getProducts() {
            return $http.get('/api/Product/GetProducts').then(function (response) {
                return response.data;
            });
        }

        function getImage(url) {
            return $http({
                method: 'GET',
                url: '/api/Product/GetImage',
                params: {url: url}
            }).then(function (response) {
                return response.data;
            });
        }
    }
})();