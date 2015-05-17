//= require angular
//= require angular-route
//= require angular-asset-path
//= require angular-rails-templates
//= require angular-resource
//= require angulartics/angulartics
//= require angulartics/angulartics-mixpanel
//= require angulartics/angulartics-debug
//= require ng-currency
//
//= require ../success_stories/module
//= require_tree ../../templates
//= require_self
//= require ./controllers
//= require ./services

(function () {
  'use strict';

  var amassApp = angular.module('amass.app', [
    'ngResource',
    'ngRoute',
    'angulartics.mixpanel',
    'angulartics.debug',
    'asset-path',
    'ng-currency',
    'templates',
    'amass.successStories'
  ]);

  amassApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'home.html'
    }).when('/filmmaker/new', {
      templateUrl: 'filmmaker/new.html',
      controller: 'FilmmakerNewCtrl'
    }).when('/organization/new', {
      templateUrl: 'organization/new.html',
      controller: 'OrganizationNewCtrl'
    }).when('/contact', {
      templateUrl: 'contact.html'
    }).otherwise({
      templateUrl: '404.html'
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
