var amassApp = angular.module('amassApp', [
  'ngRoute',
  'amassControllers',
  'amassServices'
]);

amassApp.config(['$routeProvider',
                function($routeProvider) {
                  $routeProvider.when("/", {
                    templateUrl: "../home.html"
                  }).when("/about", {
                    templateUrl: "../about.html"
                  }).when("/filmmaker/new", {
                    templateUrl: "../filmmaker/new.html",
                    controller: 'FilmmakerNewCtrl'
                  }).when("/organization/new", {
                    templateUrl: "../organization/new.html",
                    controller: 'OrganizationNewCtrl'
                  }).otherwise({
                    redirectTo: "/#/"
                  });
                }]);

