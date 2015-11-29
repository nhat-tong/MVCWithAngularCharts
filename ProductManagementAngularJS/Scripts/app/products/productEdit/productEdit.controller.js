(function () {

    'use strict';

    angular
    .module('app')
    .controller('ProductEditCtrl', ProductEditController);

    //@ngInject
    function ProductEditController(product, ProductEditFactory) {
        var vm = this;
        vm.datePicker = {
            config: {
                format: 'dd-MM-yyyy'
            },
            options: {
                showButtonBar: false,
                isOpen: false
            }
        }
        vm.init = init;
        vm.open = open;
        vm.addNewTags = addNewTags;
        vm.removeTag = removeTag;
        vm.submit = submit;

        function init() {
            if (product === null) {
                vm.title = "Add new product";
                vm.product = {};
            }
            else {
                vm.title = "Edit " + product.productName;
                vm.product = product;
            }
        }

        function open($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.datePicker.options.isOpen = !vm.datePicker.options.isOpen;
        }

        function addNewTags() {
            var tags = vm.tags.split(',');
            if (tags.length == 0) return;

            vm.product.tags = vm.product.tags || [];
            angular.forEach(tags, function (tag) {
                vm.product.tags.push(tag);
            });
        }

        function removeTag(index) {
            vm.product.tags.splice(index, 1);
        }

        function submit() {
            ProductEditFactory.save(vm.product).then(function (data) {
                console.log(data);
            });
        }
    }
})();