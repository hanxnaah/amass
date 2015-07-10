(function () {
  'use strict';

  var directives = angular.module('amass.successStories');

  ['beforeChange', 'afterChange', 'init'].forEach(function (eventName) {
    var directive = 'slick' + capitalize(eventName);

    directives.directive(directive, [
      '$parse', '$rootScope',
      function ($parse, $rootScope) {
        return {
          restrict: 'A',
          compile: function ($element, attributes) {
            var fn = $parse(attributes[directive], null, true);
            return function (scope, element) {
              element.on(
                eventName,
                function (event, slick, currentSlide, nextSlide) {
                  var callback = function () {
                    fn(scope, {
                      $event: event,
                      currentSlide: currentSlide,
                      nextSlide: nextSlide
                    });
                  };

                  //if (forceAsyncEvents[eventName] && $rootScope.$$phase) {
                  if ($rootScope.$$phase) {
                    scope.$evalAsync(callback);
                  } else {
                    scope.$apply(callback);
                  }
                }
              );
            };
          }
        };
      }
    ]);
  });

  function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }
})();
