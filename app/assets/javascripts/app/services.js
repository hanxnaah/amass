(function () {
  'use strict';

  var amassServices = angular.module('amass.app');

  amassServices.factory('gon', function () {
    /* global window */
    return window.gon;
  });
})();
