(function () {

    'use strict';

    angular.module('app', ['ui.router', 'ui.bootstrap', 'angularCharts']);

    angular
    .module('app')
    .config(AppConfig);

    //@ngInject
    function AppConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('productList', {
                url: '/productList',
                templateUrl: 'Scripts/app/products/productList/productList.html',
                controller: 'ProductListCtrl',
                controllerAs: 'vm'
            })
            .state('price', {
                url: '/price',
                templateUrl: 'Scripts/app/prices/priceChart.html',
                controller: 'PriceChartCtrl',
                controllerAs: 'vm'
            })
            .state('view', {
                url: '/view',
                templateUrl: 'Scripts/app/images/viewImage.html',
                controller: 'ImageCtrl',
                controllerAs: 'vm',
                params: {url: null}
            })
          .state('productDetail', {
              url: '/productDetail/:productCode',
              templateUrl: 'Scripts/app/products/productDetail/productDetail.html',
              controller: 'ProductDetailCtrl',
              controllerAs: 'vm'
          })
          .state('productEdit', {
              abstract: true,
              url: '/productEdit/:productCode',
              templateUrl: 'Scripts/app/products/productEdit/productEdit.html',
              controller: 'ProductEditCtrl',
              controllerAs: 'vm',
              resolve: {
                  product: function (ProductDetailFactory, $stateParams) {
                      if ($stateParams.productCode === "") return null;
                      return ProductDetailFactory.getProductDetail($stateParams.productCode);
                  }
              }
          })
         .state('productEdit.info', {
             url: '/info/:test',
             templateUrl: 'Scripts/app/products/productEdit/productEditInfo.html'
         })
         .state('productEdit.price', {
             url: '/price',
             templateUrl: 'Scripts/app/products/productEdit/productEditPrice.html'
         })
         .state('productEdit.tags', {
             url: '/tags',
             templateUrl: 'Scripts/app/products/productEdit/productEditTags.html'
         });

        $urlRouterProvider.otherwise('/productList');
    }
})();