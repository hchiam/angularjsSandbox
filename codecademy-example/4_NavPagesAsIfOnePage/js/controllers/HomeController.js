// this controller has $scope and photos (service JS file) as parameters
app.controller('HomeController', ['$scope', 'photos', function($scope, photos) {
    photos.success(function(data) {
        $scope.photos = data;
    });
}]);