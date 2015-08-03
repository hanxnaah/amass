//= require angular-rails-templates
//= require angular-foundation
//= require angular-touch
//= require angulartics/angulartics
//= require angulartics-mixpanel
//= require angulartics/angulartics-debug
//
//= require_self
//= require_tree .

(function () {
  'use strict';

  var amassApp = angular.module('amass.core', [
    'ngRoute',
    'ngTouch',
    'mm.foundation',
    'angulartics',
    'angulartics.mixpanel',
    'angulartics.debug',
    'templates'
  ]);

  amassApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'pages/home/view.html'
    }).when('/filmmakers/sign-up', {
      templateUrl: 'filmmaker_new/view.html',
      controller: 'FilmmakerNewCtrl'
    }).when('/organizations/sign-up', {
      templateUrl: 'organization_new/view.html',
      controller: 'OrganizationNewCtrl'
    }).when('/success-stories', {
      templateUrl: 'success_stories/grid/view.html',
      controller: 'SuccessStoriesGridCtrl'
    }).when('/success-stories/:successStoryId', {
      templateUrl: 'success_stories/single/page.html',
      controller: 'SuccessStoriesSingleCtrl'
    }).when('/contact', {
      templateUrl: 'pages/contact/view.html'
    }).when('/about', {
      templateUrl: 'pages/about/view.html'
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
