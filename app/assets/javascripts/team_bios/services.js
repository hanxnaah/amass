(function () {
  'use strict';

  var services = angular.module('amass.teamBios');

  services.factory('TeamBioStore', ['gon', function (gon) {
    var teamBios = angular.copy(gon.teamBios);

    angular.forEach(teamBios, function (teamBio) {
      teamBio.slug = teamBio.nickname.toLowerCase();
    });

    return {
      getAll: function () {
        return teamBios;
      }
    };
  }]);
})();
