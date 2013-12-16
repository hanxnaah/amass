var amassServices = angular.module('amassServices', ['ngResource']);

amassServices.factory('Filmmaker', ['$resource',
                      function($resource) {
                        return $resource('filmmakers', {}, {});
                      }]);

amassServices.factory('Charity', ['$resource',
                      function($resource) {
                        return $resource('charities', {}, {});
                      }]);

amassServices.factory('Follower', ['$resource',
                      function($resource) {
                        return $resource('followers', {}, {});
                      }]);
