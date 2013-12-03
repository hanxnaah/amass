var amassServices = angular.module('amassServices', ['ngResource']);

amassServices.factory('Videographer', ['$resource',
                      function($resource) {
                        return $resource('vidoegraphers', {}, {});
                      }]);
