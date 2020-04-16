/// <reference path="angular.min.js" />

// create a module
var myApp = angular.module('myModule', []);
myApp.controller('myController', function ($scope) {
    var employee = {
        FirstName: "An",
        LastName: "Pham",
        Gender: "Male"
    }
    $scope.employee1 = employee;
});



