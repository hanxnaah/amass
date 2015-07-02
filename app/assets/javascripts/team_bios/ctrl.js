(function () {
  'use strict';

  angular.module('amass.teamBios').controller('TeamBiosCtrl', [
    '$scope', 'gon',
    function ($scope, gon) {
      $scope.teamBios = gon.teamBios;
    }
  ]);
})();
