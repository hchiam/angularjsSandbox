// module:
var app = angular.module("myApp", []);

// controller:
app.controller('MainController', ['$scope', function($scope) {
    $scope.placeholderText = 'This is text that automatically filled the placeholder!';
}]);