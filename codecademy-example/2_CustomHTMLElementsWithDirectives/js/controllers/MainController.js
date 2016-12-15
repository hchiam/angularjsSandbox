app.controller('MainController', ['$scope', function($scope) {
    $scope.apps = [
        {
            icon: 'img/move.jpg',
            title: 'MOVE',
            developer: 'Move, Inc.',
            price: 0.99
        },
        {
            icon: 'img/shutterbugg.jpg',
            title: 'Shutterbug',
            developer: 'Chico Dusty',
            price: 2.99
        },
        {
            icon: 'img/gameboard.jpg',
            title: 'Angry Birds',
            developer: 'Rovio Entertainment',
            price: 0
        },
        {
            icon: 'img/forecast.jpg',
            title: 'made-up app',
            developer: 'made-up developer',
            price: 1000.00
        }
    ];
    
    //$scope.move = {
    //    icon: 'img/move.jpg',
    //    title: 'MOVE',
    //    developer: 'MOVE, Inc.',
    //    price: 0.99
    //};
    //
    //$scope.shutterbugg = {
    //    icon: 'img/shutterbugg.jpg',
    //    title: 'Shutterbugg',
    //    developer: 'Chico Dusty',
    //    price: 2.99
    //};
    //
    //$scope.gameboard = {
    //    icon: 'img/gameboard.jpg',
    //    title: 'Gameboard',
    //    developer: 'Armando P.',
    //    price: 1.99
    //};
    //
    //$scope.forecast = {
    //    icon: 'img/forecast.jpg',
    //    title: 'Forecast',
    //    developer: 'Forecast',
    //    price: 1.99
    //};
}]);