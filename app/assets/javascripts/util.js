(function () {
  'use strict';

  window.registerSharedControllerMethods = function($scope, resourceName,
      Resource, $analytics) {

    if (!$scope.resetResource) {
      $scope.resetResource = function () {
        $scope[resourceName] = new Resource();
      };
    }
    $scope.resetResource();

    $scope.invalidField = function (param) {
      return $scope.submitted && param;
    };
    $scope.clear = function () {
      $scope.resetResource();
      $scope.created = false;
      $scope.submitted = false;
    };
    $scope.create = function () {
      $scope.submitted = true;
      $scope.formError = false;
      if ($scope.form.$valid) {
        $scope.saving = true;
        $scope[resourceName].$save(
          function () {
            $scope.saving = false;
            $scope.created = true;

            $analytics.eventTrack('Sign-up', { type: resourceName });
            $scope.resetResource();
          },
          function () {
            $scope.saving = false;
            $scope.formError = 'There was a problem with your request. ' +
              'Please try again later.';
          }
        );
      }
    };
  }
})();
