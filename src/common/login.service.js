(function () {
"use strict";

angular.module('common')
.service('LoginService', LoginService);

LoginService.$inject = ['$http', 'ApiPath'];
function LoginService($http, ApiPath) {
  var service = this;

  service.userInfo = {};
  service.loggedIn = false;

  service.logIn = function(category) {
    console.log("service called");
    //return $http.get(ApiPath + '/menu_items/' + category + '.json');
  };

  service.getLoggedInStatus = function() {
    return service.loggedIn;
  };

  service.getMyInfo = function() {
    return service.userInfo;
  }
}

})();
