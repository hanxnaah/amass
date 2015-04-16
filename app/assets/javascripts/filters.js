(function () {
  'use strict';

  var amassFilters = angular.module('amassFilters', []);

  amassFilters.filter('imageForVideoFor', ['$filter', function ($filter) {
    return function (videoFor) {
      var rawImageUrl = 'video-for/' + dashify(videoFor.name) + '.jpg';
      return $filter('assetPath')(rawImageUrl);
    };
  }]);

  amassFilters.filter('imageForFilmmaker', ['$filter', function ($filter) {
    return function (filmmaker) {
      var rawImageUrl = 'filmmakers/' + dashify(filmmaker.name) + '.jpg';
      return $filter('assetPath')(rawImageUrl);
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
