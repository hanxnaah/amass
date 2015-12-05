(function () {
  'use strict';

  angular.module('amass.successStories')
    .controller('SuccessStoriesSingleCtrl', [
      '$scope', 'successStory',
      function ($scope, successStory) {
        $scope.successStory = successStory;
      }
    ]);
})();
