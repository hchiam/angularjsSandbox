// this controller has $scope (data), photos (service JS file), and $routeParams (Angular's service) as parameters
app.controller('PhotoController', ['$scope', 'photos', '$routeParams', function($scope, photos, $routeParams) {
    photos.success(function(data) {
        $scope.detail = data[$routeParams.id];
    });
}]);

/*
 *Note:
 *Used Angular's $routeParams to get $routeParams.id from the URL
 */