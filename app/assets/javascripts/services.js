var amassServices = angular.module('amassServices', ['ngResource']);

amassServices.factory('Videographer', ['$resource',
                      function($resource) {
                        return $resource('videographers', {}, {});
                      }]);

amassServices.factory('Charity', ['$resource',
                      function($resource) {
                        return $resource('charities', {}, {});
                      }]);
