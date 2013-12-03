var amassControllers = angular.module("amassControllers", []);

amassControllers.controller('VideographerNewCtrl', ['$scope', 'Videographer',
                            function ($scope, Videographer) {
                              $scope.videographer = new Videographer();
                              $scope.create = function() {
                                $scope.videographer.$save();
                              };
                            }]);
