(function() {
"use strict";

angular.module('common', [])
// .constant('ApiPath', 'https://sajjanbh-course5.herokuapp.com')
.constant('ApiPath', 'https://records.dristi.com.np')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
