(function () {
  'use strict';

  var amassServices = angular.module('amass.app');

  amassServices.factory('Follower', [
    '$resource',
    function ($resource) {
      return $resource('followers', {}, {});
    }
  ]);

  amassServices.factory('gon', function () {
    /* global window */
    return window.gon;
  });
})();
