"use strict";

const myApp = angular.module('myApp', ['ngRoute', 'artistCtrl']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
    }).
    when('/details/:id', {
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl'
    }).
    otherwise({
        redirectTo: '/list'
    });
}]);
