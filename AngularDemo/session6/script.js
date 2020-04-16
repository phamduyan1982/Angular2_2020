var app = angular.module('TEDU', []);
app.controller('handleEventController', ['$scope',function ($scope) {
    var technologies = [
        { Name: "C#", Likes: 0, Dislikes: 0 },
        { Name: "ASP.NET", Likes: 0, Dislikes: 0 },
        { Name: "SQL server", Likes: 0, Dislikes: 0 },
        { Name: "AngulerJS", Likes: 0, Dislikes: 0 }
    ];
    $scope.technologies = technologies;
}]);
