(function () {
  'use strict';

  var filters = angular.module('amass.successStories');

  filters.filter('imageForSuccessStory', ['$filter', function ($filter) {
    return function (vimeoVideoId) {
      var rawImagePath = 'success-stories/vimeo-' +
        vimeoVideoId +
        '-thumbnail.jpg';
      return $filter('assetPath')(rawImagePath);
    };
  }]);

  filters.filter('imageForVideoFor', ['$filter', function ($filter) {
    return function (videoFor) {
      var rawImagePath = 'video-for/' + dashify(videoFor.name) + '.jpg';
      return $filter('assetPath')(rawImagePath);
    };
  }]);

  filters.filter('imageForFilmmaker', ['$filter', function ($filter) {
    return function (filmmaker) {
      var rawImagePath = 'filmmakers/' + dashify(filmmaker.name) + '.jpg';
      return $filter('assetPath')(rawImagePath);
    };
  }]);

  filters.filter('safeHtml', ['$sce', function ($sce) {
    return function (html) {
      return $sce.trustAsHtml(html);
    };
  }]);

  function dashify(string) {
    return string.toLowerCase().replace(/ /g, '-');
  }
})();
