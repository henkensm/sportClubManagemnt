'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp' [
    'myApp.controllers',
    'myApp.filters',
    'myApp.services',
    'myApp.directives'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider.when('/view1', {
        templateUrl:'partial/partial1',
        controller : 'MyCtrl1'
    }).when('/view2', {
        templateUrl : 'partial/partial2',
        controller : 'MyCtrl2'
    }).otherwise({
        redirectTo:'/view1'
    });

    $locationProvider.html5Mode(true);
}]);