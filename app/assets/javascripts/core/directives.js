(function () {
  'use strict';

  angular.module('amass.core').directive('validateFriendlyUrl', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attributes, ngModel) {
        if (!ngModel.$validators.url) {
          throw 'validate-friendly-url must be on a url input';
        }
        delete ngModel.$validators.url;

        ngModel.$validators.friendlyUrl = function (modelValue, viewValue) {
          if (isValidUrl(modelValue)) {
            return true;
          }
          if (isValidUrl('http://' + modelValue)) {
            return true;
          }

          return false;
        };
      }
    };
  });

  function isValidUrl(string) {
    return !string || string.match(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i);
  }
})();
