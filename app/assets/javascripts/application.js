//= require jquery
//
//= require angular
//= require angular-route
//
//= require ./util
//= require ./core/module
//= require ./shared/module
//= require ./success_stories/module
//= require ./team_bios/module
//= require ./filmmaker_new/module
//= require ./organization_new/module
//= require ./follower/module
//= require ./survey_response/module
//= require_tree ./pages

(function () {
  'use strict';

  angular.module('amass.app', [
    'amass.core',
    'amass.shared',
    'amass.follower',
    'amass.filmmakerNew',
    'amass.organizationNew',
    'amass.successStories',
    'amass.surveyResponse',
    'amass.teamBios'
  ]);
})();
