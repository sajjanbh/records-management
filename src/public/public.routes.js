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
    .state('public.home', { // For login page
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.store', { // For Store page
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
    .state('public.sales', { // For Sales page
      url: '/sales',
      templateUrl: 'src/public/sales/sales.html',
      controller: 'SalesController',
      controllerAs: 'salesCtrl',
      resolve: {
        salesItems: ['SalesService', function (SalesService) {
          return SalesService.getSalesItems();
        }]
      }
    })
    .state('public.customers', { // For Customers page
      url: '/customers',
      templateUrl: 'src/public/customers/customers.html',
      controller: 'CustomerController',
      controllerAs: 'customerCtrl',
      resolve: {
        customerItems: ['CustomerService', function (CustomerService) {
          return CustomerService.getCustomerItems();
        }]
      }
    })
    .state('public.vendors', { // For Vendors page
      url: '/vendors',
      templateUrl: 'src/public/vendors/vendors.html',
      controller: 'VendorController',
      controllerAs: 'vendorCtrl',
      resolve: {
        vendorItems: ['VendorService', function (VendorService) {
          return VendorService.getVendorItems();
        }]
      }
    })
    .state('public.payments', { // For Payments page
      url: '/payments',
      templateUrl: 'src/public/payments/payments.html',
      controller: 'PaymentController',
      controllerAs: 'paymentCtrl',
      resolve: {
        paymentItems: ['PaymentService', function (PaymentService) {
          return PaymentService.getPaymentItems();
        }]
      }
    })
    .state('public.users', { // For Users page
      url: '/users',
      templateUrl: 'src/public/users/users.html',
      controller: 'UserController',
      controllerAs: 'userCtrl',
      resolve: {
        userItems: ['UserService', function (UserService) {
          return UserService.getUserItems();
        }]
      }
    });
}
})();
