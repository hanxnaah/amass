(function () {
  'use strict';

  var amassControllers = angular.module('amass.filmmakerNew');

  amassControllers.controller('FilmmakerNewCtrl', [
    '$scope', 'Filmmaker', '$analytics',
    function ($scope, Filmmaker, $analytics) {
      /* global window */
      window.registerSharedControllerMethods(
        $scope,
        'filmmaker',
        Filmmaker,
        $analytics
      );
    }
  ]);
})();
