(function () {
    var app = angular.module('app', []);
    app.controller('nestedRepeatController',['$scope', function ($scope) {
        var countries = [
            {
                name: "UK",
                cities: [
                    { name: "London" },
                    { name: "Birmingham" },
                    { name: "Manchesters" }
                ]
            },

            {
                name: "USA",
                cities: [
                    { name: "Los Angeles" },
                    { name: "Chicago" },
                    { name: "Houseton" }
                ]
            },

            {
                name: "Indian",
                cities: [
                    { name: "Hyberat" },
                    { name: "Bumbai" },
                    { name: "Chaine" }
                ]
            }

        ];
        $scope.countries = countries;
    }]);


})();