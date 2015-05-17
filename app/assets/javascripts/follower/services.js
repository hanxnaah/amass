(function () {
  'use strict';

  var amassServices = angular.module('amass.follower');

  amassServices.factory('Follower', [
    '$resource',
    function ($resource) {
      return $resource('followers', {}, {});
    }
  ]);
})();
