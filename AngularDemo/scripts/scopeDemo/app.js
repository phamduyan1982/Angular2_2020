/// <reference path="../angular.js" />
var myApp = angular.module('scopeDemo', []);

myApp.controller('classController', classController);
myApp.controller('schoolController', schoolController);
myApp.controller('topController', topController);

function classController($scope) {
   
   
};

function schoolController($scope, $rootScope) {
    $scope.name = "JQuery this is name";
};

function topController($scope, $rootScope) {
    $scope.name = " day la scope long nhau";
};