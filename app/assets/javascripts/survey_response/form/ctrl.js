(function () {
  'use strict';

  angular.module('amass.surveyResponse').controller('SurveyResponseFormCtrl', [
    '$scope', 'SurveyResponse',
    function ($scope, SurveyResponse) {
      $scope.surveyResponse = new SurveyResponse({ user_id: $scope.userId });
      $scope.create = function () {
        $scope.saving = true;
        $scope.surveyResponse.$save()
          .then(function () {
            $scope.saving = false;
            $scope.created = true;
          })
          .catch(function () {
            $scope.saving = false;
            $scope.formError = 'There was a problem with your request. ' +
              'Please try again later.';
          });
      };
    }
  ]);
})();
