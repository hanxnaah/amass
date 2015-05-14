//= require jquery
//= require angular
//= require angular-route
//= require ./foundation_and_overrides
//= require slick-carousel
//= require angular-asset-path
//= require angular-rails-templates
//= require angular-slick
//= require angulartics/angulartics
//= require angulartics/angulartics-mixpanel
//= require angulartics/angulartics-debug
//= require ng-currency
//= require ng-videosharing-embed
//= require vimeo-jquery-api
//
//= require ./controllers
//= require ./directives
//= require ./filters
//= require ./services
//= require_tree ../templates
//= require_self

(function () {
  'use strict';

  var amassApp = angular.module('amassApp', [
    'ngRoute',
    'videosharing-embed',
    'angulartics.mixpanel',
    'angulartics.debug',
    'asset-path',
    'ng-currency',
    'templates',
    'slick',
    'amassControllers',
    'amassDirectives',
    'amassFilters',
    'amassServices'
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
