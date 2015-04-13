//= require angular-resource

(function () {
  'use strict';

  var amassServices = angular.module('amassServices', ['ngResource']);

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
    var gon = window.gon;
    window.gon = 'Access gon through angular service!';
    return gon;
  });
})();
