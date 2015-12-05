(function () {
  'use strict';

  angular.module('amass.teamBios')
    .controller('TeamBiosSingleCtrl', [
      '$scope', 'teamBio',
      function ($scope, teamBio) {
        $scope.teamBio = teamBio;
      }
    ]);
})();
