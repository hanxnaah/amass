(function () {
  'use strict';

  angular.module('amass.teamBios').controller('TeamBiosModalCtrl', [
    '$scope', '$modalInstance',
    function ($scope, $modalInstance) {
      $scope.ok = function () {
        $modalInstance.close();
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    }
  ]);
})();
