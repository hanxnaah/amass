(function () {
  'use strict';

  angular.module('amass.successStories').controller('SuccessStoriesGridCtrl', [
    '$scope', 'SuccessStoryStore',
    function ($scope, SuccessStoryStore) {
      $scope.successStories = SuccessStoryStore.getAll();
    }
  ]);
})();
