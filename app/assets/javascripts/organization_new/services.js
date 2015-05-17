(function () {
  'use strict';

  var amassServices = angular.module('amass.organizationNew');

  amassServices.factory('Organization', [
    '$resource',
    function ($resource) {
      return $resource('organizations', {}, {});
    }
  ]);
})();
