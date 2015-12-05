(function () {
  'use strict';

  angular.module('amass.surveyResponse').factory('SurveyResponse', [
    '$resource',
    function ($resource) {
      return $resource('survey-responses', {}, {});
    }
  ]);
})();
