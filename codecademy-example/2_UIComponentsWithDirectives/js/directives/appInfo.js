/*
This code will "teach" the browser a new HTML element/directive called <app-info>.
appInfo.html shows the template sub-elements for <app-info>
*/

app.directive('appInfo', function() {
    return {
        restrict: 'E', // restrict = how the element/directive will be used ; 'E' = as a new HTML element
        scope: { // scope = means we will pass info into this element/directive, such as attributes
            info: '=' // for example, here's an attribute named "info", and with '=' we should expect: <app-info info="..."></app-info>
        },
        templateUrl: 'js/directives/appInfo.html' // templateUrl = (directory to) the HTML file to use as template
    };
});