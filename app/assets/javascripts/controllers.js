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
      $analytics, eventName, eventData) {

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

            eventData = eventData || {};
            $analytics.eventTrack(eventName, eventData);
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
        $analytics,
        'Submit form',
        { form: 'Be a filmmaker' }
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
        $analytics,
        'Submit form',
        { form: 'Post a project' }
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
        $analytics,
        'Keep me posted'
      );
      $scope.follower.type = 'filmmaker';
    }
  ]);

  amassControllers.controller('SuccessStoriesCtrl', [
    '$scope', 'gon', '$analytics',
    function ($scope, gon, $analytics) {
      $scope.successStories = gon.successStories;
      $scope.currentVideo = null;
      $scope.currentIndex = null;

      $scope.initVideoTracking = function () {
        /* globals $ */
        $('iframe').on('play', function () {
          if ($(this).closest('.slick-active').length === 0) {
            return;
          }

          var successStory = $scope.successStories[$scope.currentIndex];

          /* This needs to be fixed
          $analytics.eventTrack('Play a success story video', {
            videoFor: successStory.videoFor.name,
            filmmaker: successStory.filmmaker.name
          });
          */
        });

        $scope.updateCurrentVideo(0);
      };

      $scope.updateCurrentVideo = function (currentSlide) {
        $scope.currentIndex = currentSlide;
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
