(function () {
  'use strict';

  var amassServices = angular.module('amass.app');

  amassServices.factory('Filmmaker', [
    '$resource',
    function ($resource) {
      return $resource('filmmakers', {}, {});
    }
  ]);

  amassServices.factory('Organization', [
    '$resource',
    function ($resource) {
      return $resource('organizations', {}, {});
    }
  ]);

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
