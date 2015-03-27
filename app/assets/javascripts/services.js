'use strict';

require('angular');
require('angular-resource');

var amassServices = window.angular.module('amassServices', ['ngResource']);

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
