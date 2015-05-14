(function () {
  'use strict';

  var amassFilters = angular.module('amassFilters', []);

  amassFilters.filter('imageForSuccessStory', ['$filter', function ($filter) {
    return function (vimeoVideoId) {
      var rawImagePath = 'success-stories/thumbnail-' + vimeoVideoId + '.jpg';
      return $filter('assetPath')(rawImagePath);
    };
  }]);

  amassFilters.filter('imageForVideoFor', ['$filter', function ($filter) {
    return function (videoFor) {
      var rawImagePath = 'video-for/' + dashify(videoFor.name) + '.jpg';
      return $filter('assetPath')(rawImagePath);
    };
  }]);

  amassFilters.filter('imageForFilmmaker', ['$filter', function ($filter) {
    return function (filmmaker) {
      var rawImagePath = 'filmmakers/' + dashify(filmmaker.name) + '.jpg';
      return $filter('assetPath')(rawImagePath);
    };
  }]);

  amassFilters.filter('safeHtml', ['$sce', function ($sce) {
    return function (html) {
      return $sce.trustAsHtml(html);
    };
  }]);

  function dashify(string) {
    return string.toLowerCase().replace(/ /g, '-');
  }
})();
