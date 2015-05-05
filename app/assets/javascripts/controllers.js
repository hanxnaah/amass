(function () {
  'use strict';

  var amassControllers = angular.module('amassControllers', []);

  amassControllers.controller('NavBarCtrl', [
    '$scope', '$location',
    function ($scope, $location) {
      $scope.isSelected = function (viewLocation) {
        return viewLocation === $location.path();
      };
    }
  ]);

  function registerSharedControllerMethods($scope, resourceName, Resource,
      $analytics) {

    $scope[resourceName] = new Resource();
    $scope.invalidField = function (param) {
      return $scope.submitted && param;
    };
    $scope.clear = function () {
      $scope[resourceName] = new Resource();
      $scope.created = false;
      $scope.submitted = false;
    };
    $scope.create = function () {
      $scope.submitted = true;
      $scope.formError = false;
      if ($scope.form.$valid) {
        $scope.saving = true;
        $scope[resourceName].$save(
          function () {
            $scope.saving = false;
            $scope.created = true;

            $analytics.eventTrack('Sign-up', { type: resourceName });
          },
          function () {
            $scope.saving = false;
            $scope.formError = 'There was a problem with your request. ' +
              'Please try again later.';
          }
        );
      }
    };
  }

  amassControllers.controller('FilmmakerNewCtrl', [
    '$scope', '$anchorScroll', 'Filmmaker', '$analytics',
    function ($scope, $anchorScroll, Filmmaker, $analytics) {
      registerSharedControllerMethods(
        $scope,
        'filmmaker',
        Filmmaker,
        $analytics
      );
    }
  ]);

  amassControllers.controller('OrganizationNewCtrl', [
    '$scope', '$anchorScroll', 'Organization', '$analytics',
    function ($scope, $anchorScroll, Organization, $analytics) {
      registerSharedControllerMethods(
        $scope,
        'organization',
        Organization,
        $analytics
      );
      $scope.organization.payment_includes_expenses = true;
    }
  ]);

  amassControllers.controller('FollowCtrl', [
    '$scope', 'Follower', '$analytics',
    function ($scope, Follower, $analytics) {
      registerSharedControllerMethods(
        $scope,
        'follower',
        Follower,
        $analytics
      );
      $scope.follower.type = 'filmmaker';
    }
  ]);

  amassControllers.controller('SuccessStoriesCtrl', [
    '$scope', 'gon', '$analytics', '$timeout',
    function ($scope, gon, $analytics, $timeout) {
      $scope.successStories = gon.successStories;

      var currentIndex = null;
      var playQueue = [];

      $scope.initVideoTracking = function () {
        /* globals $ */
        $('.slick-slide.slick-cloned').find('iframe').each(function () {
          var $this = $(this);

          var src = $this.attr('src');
          src = src.replace(/&api=1/, '');
          src = src.replace(/&player_id=[^&]*/, '');
          $this.attr('src', src);
        });

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
    }
  ]);
})();
