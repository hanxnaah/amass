(function () {
  'use strict';

  angular.module('amass.successStories').controller('SuccessStoriesListCtrl', [
    '$scope', 'gon',
    function ($scope, gon, $analytics, $timeout) {
      $scope.successStories = gon.successStories;
    }
  ]);
})();
