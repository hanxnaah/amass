var amassApp = angular.module('amassApp', [
  'ngRoute',
  'amassControllers',
  'amassServices'
]);

amassApp.config(['$routeProvider',
                function($routeProvider) {
                  $routeProvider.when("/about", {
                    templateUrl: "../about.html"
                  }).when("/videographer/new", {
                    templateUrl: "../videographer/new.html",
                    controller: 'VideographerNewCtrl'
                  }).when("/charity/new", {
                    templateUrl: "../charity/new.html",
                    controller: 'CharityNewCtrl'
                  }).otherwise({
                    redirectTo: "/about"
                  });
                }]);

