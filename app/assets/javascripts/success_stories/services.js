(function () {
  'use strict';

  var services = angular.module('amass.successStories');

  services.factory('SuccessStoryStore', ['gon', function (gon) {
    var successStories = angular.copy(gon.successStories);

    // Add utility functions to all success stories
    angular.forEach(successStories, function (successStory) {
      successStory.getVideoType = function () {
        if (this.vimeoVideoId) {
          return 'vimeo';
        } else if (this.youtubeId) {
          return 'youtube';
        }
      };

      successStory.getVideoId = function () {
        switch (this.getVideoType()) {
          case 'vimeo':
            return 'vimeo-' + this.vimeoVideoId;
          case 'youtube':
            return 'youtube-' + this.youtubeId;
        }
      };
    });

    return {
      getAll: function () {
        return successStories;
      }
    };
  }]);
})();
