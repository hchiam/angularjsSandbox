var app = angular.module("myApp", []);

app.controller('MainController', ['$scope', function($scope) {
    $scope.placeholderText = 'This is text that automatically filled the placeholder!';
}]);