(function () {
  'use strict';

  var amassControllers = angular.module('amassControllers', []);

  amassControllers.controller('NavBarCtrl', [
    '$scope', '$location',
    function ($scope, $location) {
      $scope.isSelected = function (viewLocation) {
        return viewLocation === $location.path();
      };
    }
  ]);

  function registerSharedControllerMethods($scope, resourceName, Resource,
      $analytics) {

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

  amassControllers.controller('FilmmakerNewCtrl', [
    '$scope', '$anchorScroll', 'Filmmaker', '$analytics',
    function ($scope, $anchorScroll, Filmmaker, $analytics) {
      registerSharedControllerMethods(
        $scope,
        'filmmaker',
        Filmmaker,
        $analytics
      );
    }
  ]);

  amassControllers.controller('OrganizationNewCtrl', [
    '$scope', '$anchorScroll', 'Organization', '$analytics',
    function ($scope, $anchorScroll, Organization, $analytics) {
      $scope.resetResource = function () {
        $scope.organization = new Organization();
        $scope.organization.payment_includes_expenses = true;
        $scope.organization.deadline = new Date();
        $scope.organization.payment = 0;
      };

      registerSharedControllerMethods(
        $scope,
        'organization',
        Organization,
        $analytics
      );
    }
  ]);

  amassControllers.controller('FollowCtrl', [
    '$scope', 'Follower', '$analytics',
    function ($scope, Follower, $analytics) {
      registerSharedControllerMethods(
        $scope,
        'follower',
        Follower,
        $analytics
      );
      $scope.follower.type = 'filmmaker';
    }
  ]);
})();
