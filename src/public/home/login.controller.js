(function () {
"use strict";

angular.module('public')
.controller('LoginController', LoginController);

LoginController.$inject = ['LoginService'];
function LoginController(LoginService) {
  var $ctrl = this;
  $ctrl.username = "";
  $ctrl.password = "";
  $ctrl.loggedIn = false;

  $ctrl.logIn = function() {
    var userInfo = {
      username: $ctrl.username,
      password: $ctrl.password
    };

    // Login user's info to app service
    if( LoginService.logIn(userInfo) ) {console.log("logged");
      $ctrl.loggedIn = true;
      $ctrl.saveMessage = true;
    }
  }
}
})();
