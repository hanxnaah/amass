(function () {
  'use strict';

  var amassControllers = angular.module('amass.organizationNew');

  amassControllers.controller('OrganizationNewCtrl', [
    '$scope', '$anchorScroll', 'Organization', '$analytics',
    function ($scope, $anchorScroll, Organization, $analytics) {
      /* global window */
      window.registerSharedControllerMethods(
        $scope,
        'organization',
        Organization,
        $analytics
      );
    }
  ]);
})();
