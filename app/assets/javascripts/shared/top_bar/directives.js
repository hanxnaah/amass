(function () {
  'use strict';

  angular.module('amass.shared').directive('amassTopBar', function () {
    return {
      restrict: 'E',
      templateUrl: 'shared/top_bar/view.html',
      controller: 'TopBarCtrl'
    };
  });
})();
