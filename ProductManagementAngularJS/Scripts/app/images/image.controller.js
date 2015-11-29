(function () {

    'use strict';

    angular
    .module('app')
    .controller('ImageCtrl', ImageCtrl);

    //@ngInject
    function ImageCtrl($stateParams, ProductListFactory) {
        var vm = this;
        vm.init = init;
        vm.url = $stateParams.url;

        function init() {
            return ProductListFactory.getImage(vm.url).then(function (data) {
                vm.image = data._buffer;
            });
        }
    }

})();