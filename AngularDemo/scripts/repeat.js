(function () {
    'use strict';
    var app = angular.module('app',[]);
    app.controller('repeatController', repeatController);

    repeatController.$inject = ['$scope'];

    function repeatController($scope) {
        var employees = [
            {firstName:"Ben", lastName:"Nam",gender:"Male", salary:"50000"},
            { firstName: "Beo", lastName: "Nu", gender: "Male", salary: "56899" },
            { firstName: "Banh", lastName: "Ninh", gender: "Male", salary: "50000" },
            { firstName: "Binh", lastName: "Noai", gender: "Female", salary: "44000" },
            { firstName: "Ban", lastName: "Nhung", gender: "Male", salary: "50330" },
        ];
        $scope.employees = employees;
    }
})();
