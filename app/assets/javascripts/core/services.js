(function () {
  'use strict';

  var amassServices = angular.module('amass.core');

  amassServices.factory('gon', function () {
    /* global window */
    return window.gon;
  });
})();
