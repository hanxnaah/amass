(function () {
  'use strict';

  angular.module('amass.successStories')
    .controller('SuccessStoriesCarouselCtrl', [
      '$scope', 'SuccessStoryStore', '$analytics', '$timeout',
      function ($scope, SuccessStoryStore, $analytics, $timeout) {
        $scope.successStories = SuccessStoryStore.getAll();
        $scope.carouselLoaded = false;

        var currentIndex = null;
        var playQueue = [];

        $scope.initVideoTracking = function () {
          $scope.carouselLoaded = true;
          $timeout(trackPlayEvents);
          $scope.updateCurrentVideo(0);
        };

        $scope.updateCurrentVideo = function (currentSlide) {
          currentIndex = currentSlide;
        };

        $scope.pauseCurrentVideo = function () {
          var currentStory = $scope.successStories[currentIndex];

          switch (currentStory.getVideoType()) {
            case 'vimeo':
              /* globals $ */
              $('.slick-active iframe').vimeo('pause');
              break;

            case 'youtube':
              /* globals YT */
              var player = new YT.Player(currentStory.getVideoId(), {
                events: {
                  onReady: function () {
                    player.pauseVideo();
                  }
                }
              });
              break;
          }
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
