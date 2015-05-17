(function () {
  'use strict';

  var amassControllers = angular.module('amass.filmmakerNew');

  amassControllers.controller('FilmmakerNewCtrl', [
    '$scope', '$anchorScroll', 'Filmmaker', '$analytics',
    function ($scope, $anchorScroll, Filmmaker, $analytics) {
      window.registerSharedControllerMethods(
        $scope,
        'filmmaker',
        Filmmaker,
        $analytics
      );
    }
  ]);
})();
