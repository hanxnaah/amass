(function () {
  'use strict';

  var amassApp = angular.module('amass.core');

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
      controller: 'SuccessStoriesSingleCtrl',
      resolve: {
        successStory: [
          '$route', 'SuccessStoryStore', '$q',
          function ($route, SuccessStoryStore, $q) {
            return $q(function (resolve, reject) {
              var id = $route.current.params.successStoryId;
              var mySuccessStory = SuccessStoryStore.get(id);

              if (mySuccessStory) {
                resolve(mySuccessStory);
              }

              reject('Cannot find success story for id: ' + id);
            });
          }
        ]
      },
    }).when('/team/:teamBioId', {
      templateUrl: 'team_bios/single/page.html',
      controller: 'TeamBiosSingleCtrl',
      resolve: {
        teamBio: [
          '$route', 'TeamBioStore', '$q',
          function ($route, TeamBioStore, $q) {
            return $q(function (resolve, reject) {
              var id = $route.current.params.teamBioId;
              var myTeamBio = TeamBioStore.get(id);

              if (myTeamBio) {
                resolve(myTeamBio);
              }

              reject('Cannot find team bio for id: ' + id);
            });
          }
        ]
      }
    }).when('/about', {
      templateUrl: 'pages/about/view.html'
    }).when('/pricing', {
      templateUrl: 'pages/pricing/view.html'
    }).otherwise({
      templateUrl: 'pages/404/view.html'
    });
  }]);
})();
