(function () {
    'use strict';

    angular
    .module('app')
    .controller('PriceChartCtrl', PriceChartController);

    //@ngInject
    function PriceChartController($scope, $filter, ProductListFactory, PriceChartFactory) {
        var vm = this;
        vm.products = [];
        var chartDataAmount = [];
        var chartDataPercent = [];
        vm.init = init;

        function init() {
            // Initialiser chart d'abord
            setupChart();

            ProductListFactory.getProducts().then(function (data) {
                vm.products = PriceChartFactory.calculateMargin(data);

                var orderedProductsAmount = $filter("orderBy")(vm.products, "marginAmount");
                var filteredProductsAmount = $filter("limitTo")(orderedProductsAmount, 5);

                var orderedProductsPercent = $filter("orderBy")(vm.products, "marginPercent");
                var filteredProductsPercent = $filter("limitTo")(orderedProductsPercent, 5);

                // Binding data to chart
                setupChartDataAmount(filteredProductsAmount);
                setupChartDataPercent(filteredProductsPercent);
            });
        }

        function setupChart() {
            vm.configAmount = {
                title: "Top $ Margin Products",
                tooltips: false,
                labels: true,
                mouseover: function () { },
                mouseout: function () { },
                click: function (event) { alert('You cliqued at position x=' + event.x + ", y=" + event.y); },
                legend: {
                    display: true,
                    position: 'right',
                    htmlEnabled: true //enable html mode in series name
                },
                // Override default colors
                colors: ['red', 'green', 'blue'],
                isAnimate: true,
                yAxisTickFormat: 's',
                waitForHeightAndWidth: true
            };

            vm.dataAmount = {
                series: ["Cost", "Price", "<strong>Margin Amount</strong>"],
                data: chartDataAmount
            };

            vm.configPercent = {
                title: "Top % Margin Products",
                tooltips: false,
                labels: true,
                mouseover: function () { },
                mouseout: function () { },
                click: function () { },
                legend: {
                    display: true,
                    position: 'right'
                },
                waitForHeightAndWidth: true
            };

            vm.dataPercent = {
                series: ["Margin %"],
                data: chartDataPercent
            }
        }

        function setupChartDataAmount(products) {
            angular.forEach(products, function (product) {
                chartDataAmount.push({
                    x: product.productName,
                    y: [product.cost,
                        product.price,
                        product.marginAmount]
                });
            });
        }

        function setupChartDataPercent(products) {
            angular.forEach(products, function (product) {
                chartDataPercent.push({
                    x: product.productName,
                    y: [product.marginPercent]
                });
            });
        }
    }
})();