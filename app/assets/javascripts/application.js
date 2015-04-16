//= require jquery
//= require angular
//= require angular-route
//= require ./foundation_and_overrides
//= require slick-carousel
//= require angular-slick
//= require angular-rails-templates
//= require ng-videosharing-embed
//= require froogaloop
//
//= require ./controllers
//= require ./directives
//= require ./services
//= require_tree ../templates
//= require_self

(function () {
  'use strict';

  var amassApp = angular.module('amassApp', [
    'ngRoute',
    'videosharing-embed',
    'amassControllers',
    'amassDirectives',
    'amassServices',
    'templates',
    'slick'
  ]);

  amassApp.config([
    '$routeProvider',
    function ($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: '/assets/home.html'
      }).when('/filmmaker/new', {
        templateUrl: '/assets/filmmaker/new.html',
        controller: 'FilmmakerNewCtrl'
      }).when('/organization/new', {
        templateUrl: '/assets/organization/new.html',
        controller: 'OrganizationNewCtrl'
      }).when('/contact', {
        templateUrl: '/assets/contact.html'
      }).otherwise({
        redirectTo: '/#/'
      });
    }
  ]);

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
