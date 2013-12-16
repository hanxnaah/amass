var amassControllers = angular.module("amassControllers", []);

(function() {
  amassControllers.controller('NavBarCtrl', ['$scope', '$location',
                              function ($scope, $location) {
                                $scope.isSelected = function (viewLocation) {
                                  return viewLocation === $location.path();
                                };
                              }]);

  function registerSharedControllerMethods($scope, resourceName, Resource) {
    $scope[resourceName] = new Resource();
    $scope.invalidField = function(param) {
      return $scope.submitted && param;
    };
    $scope.clear = function() {
      $scope[resourceName] = new Resource();
      $scope.created = false;
      $scope.submitted = false;
    };
    $scope.create = function() {
      $scope.submitted = true;
      $scope.formError = false;
      if ($scope.form.$valid) {
        $scope.saving = true;
        $scope[resourceName].$save(
          function() { 
            $scope.saving = false; 
            $scope.created = true;
          },
          function() {
            $scope.saving = false;
            $scope.formError = "There was a problem with your request. Please try again later.";
          }
        );
      }
    }
  }

  amassControllers.controller('FilmmakerNewCtrl', ['$scope', '$anchorScroll', 'Filmmaker',
                              function ($scope, $anchorScroll, Filmmaker) {
                                registerSharedControllerMethods($scope, 'filmmaker', Filmmaker);
                              }]);

  amassControllers.controller('OrganizationNewCtrl', ['$scope', '$anchorScroll', 'Organization',
                              function ($scope, $anchorScroll, Organization) {
                                registerSharedControllerMethods($scope, 'organization', Organization);
                              }]);

  amassControllers.controller('FollowCtrl', ['$scope', 'Follower',
                              function ($scope, Follower) {
                                registerSharedControllerMethods($scope, 'follower', Follower);
                                $scope.follower.type = "filmmaker";
                              }]);
})();
