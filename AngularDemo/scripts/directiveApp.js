/// <reference path="angular.js" />
var myApp = angular.module('DEMO', [])
    .controller('myController', function ($scope) {

    }).directive("wellcomeText", function () {
        //var html = "<h1>well com to PDU directive....</h1>";
        return {
            templateUrl: "/customdirective.html"
        }

    });
    ;