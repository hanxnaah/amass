(function () {
  'use strict';

  angular.module('amass.teamBios').controller('TeamBiosModalCtrl', [
    '$scope', '$modalInstance', 'teamBio',
    function ($scope, $modalInstance, teamBio) {
      $scope.teamBio = teamBio;

      $scope.close = function () {
        $modalInstance.close();
      };
    }
  ]);
})();
