(function () {
  'use strict';

  var filters = angular.module('amass.successStories');

  filters.filter('successStoryImage', ['$filter', function ($filter) {
    return function (successStory) {
      var rawImagePath = 'success-stories/' +
        successStory.getVideoId() +
        '-thumbnail.jpg';
      return $filter('assetPath')(rawImagePath);
    };
  }]);

  filters.filter('successStoryVideoUrl', function () {
    return function (successStory) {
      switch (successStory.getVideoType()) {
        case 'vimeo':
          return 'https://vimeo.com/' + successStory.vimeoVideoId;
        case 'youtube':
          return 'https://youtube.com/watch?v=' + successStory.youtubeId;
      }
    };
  });

})();
