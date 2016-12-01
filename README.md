# angularjsSandbox
My Angular.js sandbox.

AngularJS is an open-source JavaScript framework developed by Google.

# tutorial:
http://tutorialzine.com/2013/08/learn-angularjs-5-examples/

For example code under angularjs-examples --> navigation-menu --> index.html:

The minimum you really need to look at is in the "index.html" file.  The "style.css" file is just for aesthetics.

The following are the real key parts of the "navigation-menu" example:

To use Angular.js:

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>

And also (note the "ng-" prefix used for what Angular calls "directives" and work just like special properties that you put inside element tags):

    <body ng-app>

You can also add these properties into element tags:

    ng-click
    ng-hide
    ng-show

This property holds a variable for the element tag that you put it in:

    class="{{variableName}}"

And then with all the above you can make a click on an element change a variable:

    < ... ng-click="variableName='value'" ... >

...and show/hide elements based on the variable's value:

    ng-hide="active"
    ng-show="active"