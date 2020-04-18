﻿(function () {
    var app = angular.module('app', []);
    app.controller('filterDemoCtrl', filterDemoCtrl);

    filterDemoCtrl.$inject = ['$scope'];
    function filterDemoCtrl($scope) {
        var employees = [
            { name: 'Hai', birthDate: new Date('12/5/1998'), salary: 12500000, gender: 'Male', status: true },
            { name: 'Hoan', birthDate: new Date('10/5/1988'), salary: 12508800, gender: 'Female', status: true },
            { name: 'Hung', birthDate: new Date('11/25/1978'), salary: 12566000, gender: 'Male', status: false },
            { name: 'Hung', birthDate: new Date('6/22/1968'), salary: 125008800, gender: 'Male', status: false },
            { name: 'Huan', birthDate: new Date('8/7/1982'), salary: 125022000, gender: 'Female', status: true },
            { name: 'Ha', birthDate: new Date('11/5/1965'), salary: 12505500, gender: 'Male', status: false }
        ];
        $scope.employees = employees;
        $scope.limitRow = 4;
    }
    app.filter('status', function () {
        return function (input) {
            if (input == true)
                return 'Kích hoạt';
            else
                return 'Khóa';
        }
    });
})()