var amassControllers = angular.module("amassControllers", []);

amassControllers.controller('VideographerNewCtrl', ['$scope', 'Videographer',
                            function ($scope, Videographer) {
                              $scope.videographer = new Videographer();
                              $scope.create = function() {
                                $scope.submitted = true;
                                if ($scope.form.$valid) {
                                  $scope.videographer.$save();
                                }
                              };
                            }]);

amassControllers.controller('CharityNewCtrl', ['$scope', 'Charity',
                            function ($scope, Charity) {
                              $scope.charity = new Charity();
                              $scope.create = function() {
                                $scope.submitted = true;
                                if ($scope.form.$valid) {
                                  $scope.charity.$save();
                                }
                              };
                            }]);
