(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.store', {
      url: '/store',
      templateUrl: 'src/public/store/store.html',
      controller: 'StoreController',
      controllerAs: 'storeCtrl',
      resolve: {
        storeItems: ['StoreService', function (StoreService) {
          return StoreService.getStoreItems();
        }]
      }
    })
    .state('public.storeItem', {
      url: '/store/{item}',
      templateUrl: 'src/public/store-items/store-items.html',
      controller: 'StoreItemsController',
      controllerAs: 'storeItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','StoreService', function ($stateParams, StoreService) {
          return StoreService.getStoreItems($stateParams.item);
        }]
      }
    })
    .state('public.sales', {
      url: '/sales',
      templateUrl: 'src/public/sales/sales.html'
    })
    .state('public.users', {
      url: '/users',
      templateUrl: 'src/public/users/users.html'
    });
}
})();
