(function () {
  'use strict';

  var filters = angular.module('amass.core');

  filters.filter('buildTitle', function () {
    return function (title) {
      if (!title) { return 'Amass Media — Tell stories that matter'; }
      return title + ' | Amass Media';
    };
  });
})();
