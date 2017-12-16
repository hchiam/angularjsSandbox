angular.module("root",["get message"])
    .controller("index",["$scope","message",function($scope,message){
        $scope.message = message;
    }]);
