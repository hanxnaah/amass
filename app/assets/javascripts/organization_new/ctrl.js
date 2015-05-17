(function () {
  'use strict';

  var amassControllers = angular.module('amass.organizationNew');

  amassControllers.controller('OrganizationNewCtrl', [
    '$scope', '$anchorScroll', 'Organization', '$analytics',
    function ($scope, $anchorScroll, Organization, $analytics) {
      $scope.resetResource = function () {
        $scope.organization = new Organization();
        $scope.organization.payment_includes_expenses = true;
        $scope.organization.deadline = new Date();
        $scope.organization.payment = 0;
      };

      window.registerSharedControllerMethods(
        $scope,
        'organization',
        Organization,
        $analytics
      );
    }
  ]);
})();
