(function () {
  'use strict';

  angular.module('amass.teamBios').controller('TeamBiosCtrl', [
    '$scope', 'gon', '$modal',
    function ($scope, gon, $modal) {
      $scope.teamBios = gon.teamBios;
      $scope.open = function () {
        $modal.open({
          controller: 'TeamBiosModalCtrl',
          templateUrl: 'team_bios/modal/view.html'
        });
      };
    }
  ]);
})();
