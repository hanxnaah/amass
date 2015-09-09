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

  filters.filter('inGroupsOf', function () {
    var cache = {};

    return function (array, groupSize) {
      var cacheKey = getHashOfArray(array);
      if (cache.hasOwnProperty(cacheKey)) {
        return cache[cacheKey];
      }

      var groupedArray = [];
      var numGroups = Math.ceil(array.length / groupSize);
      for (var i = 0; i < numGroups; i++) {
        var endIndex = i < numGroups - 1 ? (i + 1) * groupSize : undefined;
        groupedArray.push(array.slice(i * groupSize, endIndex));
      }

      cache[cacheKey] = groupedArray;
      return groupedArray;
    };
  });

  function dashify(string) {
    return string.toLowerCase().replace(/ /g, '-');
  }

  function getHashOfArray(array) {
    return angular.toJson(array);
  }
})();
