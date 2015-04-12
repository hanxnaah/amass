(function () {
  'use strict';

  var amassDirectives = angular.module('amassDirectives', []);

  amassDirectives.directive('amassBeforeChange', [
    '$parse', '$rootScope',
    function ($parse, $rootScope) {
      return {
        restrict: 'A',
        compile: function($element, attr) {
          var fn = $parse(attr.amassBeforeChange, null, true);
          return function amassEventHandler(scope, element) {
            element.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
              var callback = function() {
                fn(scope, {$event:event, currentSlide: currentSlide});
              };

              //if (forceAsyncEvents[eventName] && $rootScope.$$phase) {
              if ($rootScope.$$phase) {
                scope.$evalAsync(callback);
              } else {
                scope.$apply(callback);
              }
            });
          };
        }
      };
    }
  ]);
})();
