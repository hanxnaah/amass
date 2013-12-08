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

  amassControllers.controller('VideographerNewCtrl', ['$scope', '$anchorScroll', 'Videographer',
                              function ($scope, $anchorScroll, Videographer) {
                                $anchorScroll();
                                registerSharedControllerMethods($scope, 'videographer', Videographer);
                              }]);

  amassControllers.controller('CharityNewCtrl', ['$scope', '$anchorScroll', 'Charity',
                              function ($scope, $anchorScroll, Charity) {
                                $anchorScroll();
                                registerSharedControllerMethods($scope, 'charity', Charity);
                              }]);

  amassControllers.controller('FollowCtrl', ['$scope', 'Follower',
                              function ($scope, Follower) {
                                registerSharedControllerMethods($scope, 'follower', Follower);
                              }]);
})();
