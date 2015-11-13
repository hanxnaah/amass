(function () {
  'use strict';

  angular.module('amass.teamBios').controller('TeamBiosCtrl', [
    '$scope', 'TeamBioStore',
    function ($scope, TeamBioStore) {
      $scope.teamBios = TeamBioStore.getAll();
    }
  ]);
})();
