# angularjsSandbox
My Angular.js sandbox.

AngularJS is an open-source JavaScript framework developed by Google.

# tutorial 1:
http://tutorialzine.com/2013/08/learn-angularjs-5-examples/

## nagivation-menu example:
For example code:  angularjs-examples --> navigation-menu --> index.html:

The minimum you really need to look at is in the "index.html" file.  The "style.css" file is just for aesthetics.

The following are the real key parts of the "navigation-menu" example:

To use Angular.js:

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>

And also (note the "ng-" prefix used for what Angular calls "directives" and work just like special properties that you put inside element tags):

    <body ng-app>

You can also add these "properties" (directives) into element tags:

    ng-click
    ng-hide
    ng-show

This property holds a variable for the element tag that you put it in:

    class="{{variableName}}"

And then with all of the above you can make a click on an element cause an action, like a function, or the assigning of a value to a variable:

    < ... ng-click="variableName='value'" ... >

...and show/hide elements based on the variable's value:

    ng-hide="active"
    ng-show="active"

## inline-editor example:
The following is another AngularJS directive ("property") that works like a JS function too, but can use a $scope object's properties as variables:

    ng-controller

And here's the "value" property being set inside the .js file:

    $scope.value = 'Edit me.';

# tutorial 2:
http://www.w3schools.com/angular/

For example code:  w3schools-examples --> angularjs-minimal-example.html:

You need this to use AngularJS:

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>

You need to put this inside the surrounding tag to be able to use the AngularJS "properties" (directives):

    ng-app

Like this:

    <div ng-app>
        ...
    </div>

You can then name a variable and assign it to an `input` element:

    ng-model="name"

Like this:

    <input ng-model="name">

And you can then have that variable automatically "outputted" to wherever "placeholders" with its name are, like inside an `h1` element's text (it updates automatically as you type in the `input` element's input'):

    {{name}}

Like this:

    <h1>Hello {{name}}</h1>