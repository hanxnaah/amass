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
})();
