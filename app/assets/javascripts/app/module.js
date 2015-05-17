//= require angular
//= require angular-route
//= require angular-asset-path
//= require angular-rails-templates
//= require angulartics/angulartics
//= require angulartics/angulartics-mixpanel
//= require angulartics/angulartics-debug
//= require ng-currency
//
//= require ../util
//= require ../success_stories/module
//= require ../filmmaker_new/module
//= require ../organization_new/module
//= require ../follower/module
//= require_tree ../pages
//= require_self
//= require ./controllers
//= require ./services

(function () {
  'use strict';

  var amassApp = angular.module('amass.app', [
    'ngRoute',
    'angulartics.mixpanel',
    'angulartics.debug',
    'asset-path',
    'ng-currency',
    'templates',
    'amass.follower',
    'amass.filmmakerNew',
    'amass.organizationNew',
    'amass.successStories'
  ]);

  amassApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'pages/home/view.html'
    }).when('/filmmaker/new', {
      templateUrl: 'filmmaker_new/view.html',
      controller: 'FilmmakerNewCtrl'
    }).when('/organization/new', {
      templateUrl: 'organization_new/view.html',
      controller: 'OrganizationNewCtrl'
    }).when('/contact', {
      templateUrl: 'pages/contact/view.html'
    }).otherwise({
      templateUrl: 'pages/404/view.html'
    });
  }]);

  amassApp.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode(true);
  }]);

  amassApp.run([
    '$rootScope', '$location', '$anchorScroll', '$routeParams',
    function ($rootScope, $location, $anchorScroll, $routeParams) {
      $rootScope.$on('$routeChangeSuccess', function () {
        $location.hash($routeParams.scrollTo);
        $anchorScroll();
      });
    }
  ]);
})();
