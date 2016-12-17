app.factory('photos', ['$http', function($http) {
    return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json')
        .success(function(data) {
            return data; // if successfully get the .json data from that http://...
        })
        .error(function(data) {
            return data; // if error in getting the .json data from that http://...
        });
}]);