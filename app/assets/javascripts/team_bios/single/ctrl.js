(function () {
  'use strict';

  angular.module('amass.teamBios')
    .controller('TeamBiosSingleCtrl', [
      '$scope', '$routeParams', 'TeamBioStore',
      function ($scope, $routeParams, TeamBioStore) {
        angular.forEach(TeamBioStore.getAll(), function (teamBio) {
          if (teamBio.slug === $routeParams.teamBioId) {
            $scope.teamBio = teamBio;
          }
        });
      }
    ]);
})();
