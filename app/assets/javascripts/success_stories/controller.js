(function () {
  'use strict';

  angular.module('amass.successStories').controller('SuccessStoriesCtrl', [
    '$scope', 'gon', '$analytics', '$timeout',
    function ($scope, gon, $analytics, $timeout) {
      $scope.successStories = gon.successStories;
      $scope.loaded = false;

      var currentIndex = null;
      var playQueue = [];

      $scope.initVideoTracking = function () {
        $scope.loaded = true;
        $timeout(trackPlayEvents);
        $scope.updateCurrentVideo(0);
      };

      $scope.updateCurrentVideo = function (currentSlide) {
        currentIndex = currentSlide;
      };

      $scope.pauseCurrentVideo = function () {
        /* globals $ */
        $('.slick-active iframe').vimeo('pause');
      };

      $scope.trackSlickChange = function () {
        $analytics.eventTrack('See another success story');
      };

      function trackPlayEvents() {
        /* globals $ */
        $('.slick-slide').not('.slick-cloned').find('iframe').on(
          'play',
          function () {
            playQueue.push(currentIndex);
            $timeout(function () {
              var trackedIndexes = {};

              playQueue.forEach(function (index) {
                if (index in trackedIndexes) {
                  return;
                }

                trackedIndexes[index] = true;

                var successStory = $scope.successStories[index];
                $analytics.eventTrack('Play a success story video', {
                  videoFor: successStory.videoFor.name,
                  filmmaker: successStory.filmmaker.name
                });
              });

              playQueue = [];
            });
          }
        );
      }
    }
  ]);
})();
