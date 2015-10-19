(function () {
  'use strict';

  var filters = angular.module('amass.successStories');

  filters.filter('successStoryImage', ['$filter', function ($filter) {
    return function (successStory) {
      var rawImagePath = 'success-stories/vimeo-' +
        successStory.vimeoVideoId +
        '-thumbnail.jpg';
      return $filter('assetPath')(rawImagePath);
    };
  }]);

  filters.filter('successStoryId', function () {
    return function (successStory) {
      return successStory.slug;
    };
  });

  filters.filter('successStoryVideoUrl', function () {
    return function (successStory) {
      return 'https://vimeo.com/' + successStory.vimeoVideoId;
    };
  });

})();
