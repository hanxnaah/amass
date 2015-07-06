(function () {
  'use strict';

  angular.module('amass.successStories')
    .controller('SuccessStoriesSingleCtrl', [
      '$scope', 'gon', '$routeParams',
      function ($scope, gon, $routeParams) {
        // need es5-shim
        gon.successStories.forEach(function (successStory) {
          if (successStory.slug === $routeParams.successStoryId) {
            $scope.successStory = successStory;
          }
        });
      }
    ]);
})();
