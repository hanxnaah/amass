(function () {
  'use strict';

  angular.module('amass.successStories')
    .controller('SuccessStoriesSingleCtrl', [
      '$scope', '$routeParams', 'SuccessStoryStore',
      function ($scope, $routeParams, SuccessStoryStore) {
        angular.forEach(SuccessStoryStore.getAll(), function (successStory) {
          if (successStory.slug === $routeParams.successStoryId) {
            $scope.successStory = successStory;
          }
        });
      }
    ]);
})();
