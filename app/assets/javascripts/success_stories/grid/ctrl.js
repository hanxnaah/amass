(function () {
  'use strict';

  angular.module('amass.successStories').controller('SuccessStoriesGridCtrl', [
    '$scope', 'gon',
    function ($scope, gon) {
      $scope.successStories = gon.successStories;
    }
  ]);
})();
