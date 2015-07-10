(function () {
  'use strict';

  angular.module('amass.shared').directive('amassHeading', function () {
    return {
      restrict: 'E',
      templateUrl: 'shared/heading/view.html',
      scope: {
        title: '@'
      }
    };
  });
})();
