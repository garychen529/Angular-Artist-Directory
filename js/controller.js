"use strict";

const artistCtrl = angular.module('artistCtrl', ['ngAnimate']);

artistCtrl.controller('ListCtrl', function($scope, $http) {
    $http.get("js/data.json")
    .success(function(data) {
        $scope.artists = data;
        $scope.artistOrder = "name";
    });
});

artistCtrl.controller('DetailsCtrl', function($scope, $http, $routeParams) {
    $http.get("js/data.json")
    .success(function(data) {
        $scope.artists = data;
        $scope.whichItem = $routeParams.id;

        if ($routeParams.id > 0) {
            $scope.prev = Number($routeParams.id) - 1;
        } else {
            $scope.prev = $scope.artists.length - 1;
        }

        if ($routeParams.id < $scope.artists.length - 1) {
            $scope.next = Number($routeParams.id) + 1;
        } else {
            $scope.next = 0;
        }
    });
});