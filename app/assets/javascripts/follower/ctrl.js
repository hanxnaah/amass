(function () {
  'use strict';

  var amassControllers = angular.module('amass.follower');

  amassControllers.controller('FollowCtrl', [
    '$scope', 'Follower', '$analytics',
    function ($scope, Follower, $analytics) {
      /* global window */
      window.registerSharedControllerMethods(
        $scope,
        'follower',
        Follower,
        $analytics
      );
      $scope.follower.type = 'filmmaker';
    }
  ]);
})();
