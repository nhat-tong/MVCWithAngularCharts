(function () {

    'use strict';

    angular
    .module('app')
    .factory('PriceChartFactory', PriceChartFactory);

    function PriceChartFactory() {
        var service = {
            calculateMargin: calculateMargin
        };
        return service;

        function calculateMarginAmount(price, cost) {
            return (price - cost);
        }

        function calculateMarginPercent(price, cost) {
            return (cost / price) * 100;
        }

        function calculateMargin(products) {
            var results = products;

            angular.forEach(results, function (prd, idx) {
                prd.marginPercent = calculateMarginPercent(prd.price, prd.cost);
                prd.marginAmount = calculateMarginAmount(prd.price, prd.cost);
            })

            return results;
        }
    }

})();