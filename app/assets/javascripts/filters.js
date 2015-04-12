(function () {
  'use strict';

  var amassFilters = angular.module('amassFilters', []);

  amassFilters.filter('trustUrl', ['$sce', function ($sce) {
    return function (url) {
      return $sce.trustAsResourceUrl(url);
    };
  }]);
})();
