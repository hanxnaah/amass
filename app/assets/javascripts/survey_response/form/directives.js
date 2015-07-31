(function () {
  'use strict';

  angular.module('amass.surveyResponse')
  .directive('surveyResponseForm', function () {
    return {
      restrict: 'E',
      templateUrl: 'survey_response/form/view.html',
      scope: {
        userId: '@'
      },
      controller: 'SurveyResponseFormCtrl'
    };
  });
})();
