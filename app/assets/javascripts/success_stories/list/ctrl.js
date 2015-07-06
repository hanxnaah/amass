(function () {
  'use strict';

  angular.module('amass.successStories').controller('SuccessStoriesListCtrl', [
    '$scope', 'gon',
    function ($scope, gon) {
      $scope.successStories = gon.successStories;
    }
  ]);
})();
