//= require angular-rails-templates
//= require angular-foundation
//= require angular-touch
//= require angularjs-viewhead
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
    'templates',
    'viewhead'
  ]);

  amassApp.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode(true);
  }]);

  amassApp.run([
    '$rootScope', '$location', '$anchorScroll', '$routeParams',
    function ($rootScope, $location, $anchorScroll, $routeParams) {
      $rootScope.$on('$routeChangeSuccess', function () {
        $rootScope.invalid_page = false;
        $location.path($routeParams.scrollTo);
        $anchorScroll();
      });

      $rootScope.$on('$routeChangeError', function () {
        $rootScope.invalid_page = true;
      });
    }
  ]);
})();
