(function () {

    'use strict';

    angular
    .module('app')
    .factory('ProductEditFactory', ProductEditFactory);

    //@ngInject
    function ProductEditFactory($http) {
        var service = {
            save: save
        };

        function save(product) {
            return $http({
                method: 'POST',
                url: '/api/Product/SaveProduct',
                data: product
            }).then(function (response) {
                return response.data;
            });
        }

        return service;
    }
})();