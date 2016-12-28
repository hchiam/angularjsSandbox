var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider // to define the app routes
        .when("/", { // this maps the "/" URL to a controller and an html file as the "partial view"
            controller: "HomeController", // this controller uses the service "photos".js, as specified in HomeController.js, and fills $scope.photos array
            // $scope.photos --> 
            templateUrl: "views/home.html" // this partial view will be injected at the <div ng-view></div>.  This view happens to make use of the $scope.photos array mentioned above.
        })
        .when("/photos/:id", { // this maps a URL to controller and an html file as the "partial view", but also makes use of a variable named "id" as part of the URL (e.g.: "/photos/1")
            controller: "PhotoController", // this controller gets different data than the other controller above, which is used here for a different partial view.
            // $scope.detail --> 
            templateUrl: "views/photo.html" // this partial view will be injected at the <div ng-view></div>
        })
        .otherwise({ // otherwise just redirect if user visits a URL other than "/"
            redirectTo: "/"
        });
});