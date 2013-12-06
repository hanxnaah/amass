var amassControllers = angular.module("amassControllers", []);

amassControllers.controller('NavBarCtrl', ['$scope', '$location',
                            function ($scope, $location) {
                              $scope.isSelected = function (viewLocation) {
                                return viewLocation === $location.path();
                              };
                            }]);

amassControllers.controller('VideographerNewCtrl', ['$scope', '$anchorScroll', 'Videographer',
                            function ($scope, $anchorScroll, Videographer) {
                              $anchorScroll();
                              $scope.videographer = new Videographer();
                              $scope.invalidField = function(param) {
                                return $scope.submitted && param;
                              };
                              $scope.clear = function() {
                                $scope.videographer = new Videographer();
                                $scope.created = false;
                                $scope.submitted = false;
                              };
                              $scope.create = function() {
                                $scope.submitted = true;
                                $scope.formError = false;
                                if ($scope.form.$valid) {
                                  $scope.saving = true;
                                  $scope.videographer.$save(
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
                              };
                            }]);

amassControllers.controller('CharityNewCtrl', ['$scope', '$anchorScroll', 'Charity',
                            function ($scope, $anchorScroll, Charity) {
                              $anchorScroll();
                              $scope.charity = new Charity();
                              $scope.invalidField = function(param) {
                                return $scope.submitted && param;
                              };
                              $scope.clear = function() {
                                $scope.charity = new Charity();
                                $scope.created = false;
                                $scope.submitted = false;
                              };
                              $scope.create = function() {
                                $scope.submitted = true;
                                $scope.formError = false;
                                if ($scope.form.$valid) {
                                  $scope.saving = true;
                                  $scope.charity.$save(
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
                              };
                            }]);
