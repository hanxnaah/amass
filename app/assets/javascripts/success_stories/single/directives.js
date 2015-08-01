(function () {
  'use strict';

  angular.module('amass.successStories').directive('successStory', function () {
    return {
      restrict: 'E',
      scope: {
        successStory: '=',
        shouldLoadVideo: '@'
      },
      templateUrl: 'success_stories/single/view.html',
      controller: ['$scope', function ($scope) {
        if (typeof $scope.shouldLoadVideo === 'undefined') {
          $scope.shouldLoadVideo = true;
        }
      }]
    };
  });
})();
