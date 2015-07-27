(function () {
  'use strict';

  /* global window */
  window.registerSharedControllerMethods = function ($scope, resourceName,
      Resource, $analytics) {

    $scope[resourceName] = new Resource();

    $scope.invalidField = function (param) {
      return $scope.submitted && param;
    };

    $scope.create = function () {
      $scope.submitted = true;
      $scope.formError = false;
      if ($scope.form.$valid) {
        $scope.saving = true;
        $scope[resourceName].$save()
          .then(function (resource) {
            $scope.saving = false;
            $scope.created = true;

            $analytics.eventTrack('Sign-up', { type: resourceName });
            $scope[resourceName] = resource;
          })
          .catch(function () {
            $scope.saving = false;
            $scope.formError = 'There was a problem with your request. ' +
              'Please try again later.';
          });
      }
    };
  };
})();
