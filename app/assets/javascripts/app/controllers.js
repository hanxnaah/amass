(function () {
  'use strict';

  var amassControllers = angular.module('amass.app');

  amassControllers.controller('NavBarCtrl', [
    '$scope', '$location',
    function ($scope, $location) {
      $scope.isSelected = function (viewLocation) {
        return viewLocation === $location.path();
      };
    }
  ]);
})();
