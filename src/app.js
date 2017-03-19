// create angular app
var records = angular.module('records', []);

// create angular controller
records.controller('mainController', function($scope) {

  // function to submit the form after all validation has occurred            
  $scope.submitForm = function(isValid) {

    // check to make sure the form is completely valid
    if (isValid) {
      alert('our form is amazing');
    }

  };

});