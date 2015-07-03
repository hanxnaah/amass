(function () {
  'use strict';

  var filters = angular.module('amass.teamBios');

  filters.filter('imageForTeamBio', ['$filter', function ($filter) {
    return function (teamBio) {
      var rawImagePath = 'team-bios/' + dashify(teamBio.nickname) + '.jpg';
      return $filter('assetPath')(rawImagePath);
    };
  }]);

  function dashify(string) {
    return string.toLowerCase().replace(/ /g, '-');
  }
})();
