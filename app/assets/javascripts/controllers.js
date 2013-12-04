var amassControllers = angular.module("amassControllers", []);

amassControllers.controller('VideographerNewCtrl', ['$scope', 'Videographer',
                            function ($scope, Videographer) {
                              $scope.videographer = new Videographer();
                              $scope.invalidField = function(param) {
                                return $scope.submitted && param;
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

amassControllers.controller('CharityNewCtrl', ['$scope', 'Charity',
                            function ($scope, Charity) {
                              $scope.charity = new Charity();
                              $scope.invalidField = function(param) {
                                return $scope.submitted && param;
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
