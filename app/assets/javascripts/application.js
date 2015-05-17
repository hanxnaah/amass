//= require jquery
//= require angular
//= require angular-route
//= require ./foundation_and_overrides
//
//= require ./util
//= require ./core/module
//= require ./success_stories/module
//= require ./filmmaker_new/module
//= require ./organization_new/module
//= require ./follower/module
//= require_tree ./pages

(function () {
  'use strict';

  var amassApp = angular.module('amass.app', [
    'amass.core',
    'amass.follower',
    'amass.filmmakerNew',
    'amass.organizationNew',
    'amass.successStories'
  ]);
})();
