(function () {
  'use strict';

  var amassFilters = angular.module('amassFilters', []);

  amassFilters.filter('imageForVideoFor', function () {
    return function (videoFor) {
      return '/assets/video-for/' + dashify(videoFor.name) + '.jpg';
    };
  });

  amassFilters.filter('imageForFilmmaker', function () {
    return function (filmmaker) {
      return '/assets/filmmakers/' + dashify(filmmaker.name) + '.jpg';
    };
  });

  amassFilters.filter('safeHtml', ['$sce', function ($sce) {
    return function (html) {
      return $sce.trustAsHtml(html);
    };
  }]);

  function dashify(string) {
    return string.toLowerCase().replace(/ /g, '-');
  }
})();
