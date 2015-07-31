(function () {
  'use strict';

  var amassControllers = angular.module('amass.organizationNew');

  amassControllers.controller('OrganizationNewCtrl', [
    '$scope', 'Organization', '$analytics',
    function ($scope, Organization, $analytics) {
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
