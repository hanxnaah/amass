(function () {
  'use strict';

  var services = angular.module('amass.teamBios');

  services.factory('TeamBioStore', ['gon', function (gon) {
    var teamBios = angular.copy(gon.teamBios);

    return {
      getAll: function () {
        return teamBios;
      },

      get: function (slug) {
        var myTeamBio;
        angular.forEach(teamBios, function (teamBio) {
          if (teamBio.slug === slug) {
            myTeamBio = teamBio;
          }
        });

        return myTeamBio;
      }
    };
  }]);
})();
