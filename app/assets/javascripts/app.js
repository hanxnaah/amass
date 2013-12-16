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
                  }).when("/charity/new", {
                    templateUrl: "../charity/new.html",
                    controller: 'CharityNewCtrl'
                  }).otherwise({
                    redirectTo: "/#/"
                  });
                }]);

