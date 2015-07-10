(function () {
  'use strict';

  angular.module('amass.shared').controller('TopBarCtrl', [
    '$scope', '$location',
    function ($scope, $location) {
      $scope.isSelected = function (viewLocation) {
        return viewLocation === $location.path();
      };
    }
  ]);
})();
