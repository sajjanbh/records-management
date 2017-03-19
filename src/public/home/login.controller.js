(function () {
"use strict";

angular.module('public')
.controller('LoginController', LoginController);

LoginController.$inject = ['LoginService'];
function LoginController(LoginService) {
  var $ctrl = this;
  $ctrl.username = "";
  $ctrl.password = "";

  // Function to check if a user is logged in
  // $ctrl.checkIfLogged = function() {
  //   if (LoginService.checkIfLogged()) {
  //     $ctrl.loggedIn = true;
  //   }
  // }

  // Function to login a user
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
