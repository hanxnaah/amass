(function () {
  'use strict';

  var amassServices = angular.module('amass.filmmakerNew');

  amassServices.factory('Filmmaker', [
    '$resource',
    function ($resource) {
      return $resource('filmmakers', {}, {});
    }
  ]);
})();
