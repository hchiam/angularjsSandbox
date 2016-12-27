# angularjsSandbox
My Angular.js sandbox.  Tutorials, modified code, and notes for future reference.

## description:

AngularJS is an open-source JavaScript framework (not a library) developed by Google.  (your code calls a library ; your code is called/"read" by a framework for "interpretation" etc.)

AngularJS extends HTML with ng-directives to make HTML pages more DYNAMIC.  It enables updating of data without having to re-load the page!  (I.e., it's good for single-page web apps.)

[Skip to "Seven Steps to Make an AngularJS App"](#seven-steps-to-make-an-angularjs-app)

import AngularJS like this:

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>

## side note:

Use "data-ng-..." instead of "ng-..." so that any HTML validator program will accept these non-default attributes.

## directives:

The following are called **directives**, and all start with "ng-".  They trigger special behaviours that AngularJS gives to elements that these directives are found in:

**ng-app** = makes the element and its sub-elements into an AngularJS application.  Make sure to put this attribute in the element that encloses the respective elements.

**ng-controller** = name of controller that contains "variables" (like `$scope`) and "functions" (like `$scope.addEntry = function (){};`) that act on the "variables".  Make sure to put this attribute in the element that encloses the respective elements.

**ng-model** = AUTOMATICALLY binds the element (input, select, textarea) <--> to application data (variables).  (Can work in both directions.)

**ng-bind** = AUTOMATICALLY binds application data (variables) --> to the element (e.g. innerHTML of p, h1, etc.).

**ng-init** = initializes variables.

**{{expression}}** = AUTOMATICALLY evaluates the variable or expression and outputs it directly (e.g. into the innerHTML of a p element, or in style="color:{{colourVariable}}"), working like ng-bind.

**ng-repeat** = can be used to display a list of elements DYNAMICALLY.

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

# tutorial 3:
https://www.codecademy.com/learn/learn-angularjs

##Seven Steps to Make an AngularJS App:

1. INCLUDE **AngularJS**:  include AngularJS script in HTML:  (SO YOU CAN USE ANGULAR JS)

    `<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.5/angular.min.js"></script>`

2. CREATE **MODULE**:  name module in JS:  (TO NAME ONE OF THE ANGULAR JS MODULES YOU WANT TO USE)

    `var app = angular.module("myApp", []);`

3. USE **MODULE**:  link section of HTML to that module in JS:  (TO TELL THE APP WHICH PART USES WHICH ANGULAR JS MODULE)

    `<body ng-app="myApp">`

4. CREATE **CONTROLLER**:  name controller in JS:  (TO SETUP DATA)

    ```
    app.controller('MainController', ['$scope', function($scope) { 
    
    }]);
    ```

5. USE **CONTROLLER**:  link section of HTML file to that controller in JS:  (TO TELL THE APP THE NAME OF THE CONTROLLER TO GO WITH THE MODULE)

    `<body ng-app="myApp" ng-controller="MainController">`

and

    `<script src="myApp.js"></script>`
    `<script src="MainController.js"></script>`

6. CREATE **DATA**:  name variable (& set it) in controller in JS:  (TO CREATE DATA)

    ```
    app.controller('MainController', ['$scope', function($scope) {
        $scope.title = 'Top Sellers in Books';
    }]);
    ```

7. USE **DATA**:  link output view of HTML to that variable in JS:  (TO OUTPUT DATA)

    `<h1>{{title}}</h1>`

Something cool you can do with that output view variable:  you can add **FILTERS**!  For example, this 'filters' the input number `{{product.price}}` into a price format:

    <p class="price">{{product.price|currency}}</p>

And then you can show all items in a list of variables:  For example, this code uses `ng-repeat` to try to access all the properties listed (JSON-style) for each product in the products variable:  

    <div ng-repeat="product in products">
        <img ng-src="{{ product.cover }}">
        <p class="title">{{ product.name | uppercase }}</p>
        <p class="price">{{ product.price | currency }}</p>
        <p class="date">{{ product.pubdate | date }}</p>
    </div>

...and here's the products variable, with each product and their respective properties listed (JSON-style):  

    $scope.products = [
        {
            name: 'The Book of Trees',
            price: 19,
            pubdate: new Date('2014','03','08'),
            cover: 'img/the-book-of-trees.jpg'
        },
        {
            name: 'Program or be Programmed',
            price: 8,
            pubdate: new Date('2013','08','01'),
            cover: 'img/program-or-be-programmed.jpg'
        }
    ];

**DIRECTIVES** can be used to create custom elements (and sub-elements), like this in HTML:

    <app-info info="app"></app-info>

...referring to this directive in JS:

    app.directive('appInfo',function(){
        return {
            restrict: 'E', // restrict = how the element/directive will be used ; 'E' = as a new HTML element
            scope: { // scope = means we will pass info into this element/directive, such as attributes
                info: '=' // for example, here's an attribute named "info", and with '=' we should expect: <app-info info="..."></app-info>
            },
            templateUrl: 'js/directives/appInfo.html' // templateUrl = (directory to) the HTML file to use as template
             // make sure its "templateUrl" and NOT "templateURL"!!!
        };
    });

...which uses this template HTML (sub-)elements:

    <!--This is the template that is referenced in appInfo.js with the "templateUrl".-->
    <img class="icon" ng-src="{{ info.icon }}"> 
    <h2 class="title">{{ info.title }}</h2> 
    <p class="developer">{{ info.developer }}</p> 
    <p class="price">{{ info.price | currency }}</p>

You can create a **SERVICE** ("http://..") to get **DATA** (".json") from a service, using `app.factory` in .js, such as this forecast example:  

    app.factory('forecast', ['$http', function($http) {
        // call a url ("https://...") to get data (".json")
        return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json')
            .success(function(data) {
                return data; // if success
            })
            .error(function(err) {
                return err; // if error
            });
    }]);

...and then you can include that service in the HTML file:

    <script src="js/services/forecast.js"></script>

...and finally include that service in the controller (MainController.js) to "abstract away" the data collection from the main controller:

    app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
        forecast.success(function(data) {
            $scope.forecastFiveDay = data;
        });
    }]);

Use `ngRoute` to do **ROUTING**:  you can make a "single-page" app, but navigate different template pages (without reloading!), especially if you have tons of interactive data/info.

# tutorial 4:
http://stephanebegaudeau.tumblr.com/post/48776908163/everything-you-need-to-understand-to-start-with
for further reading.

**ng-show**="...":  If equals true, then this element (and anything it encloses) is shown.  Example use:  automatically showing only search results with a property that matches a criteria.

**ng-switch**="..." and **ng-switch-when**="...":  If the two values match, then the sub-element with the **...-when** tag is shown.  Example use:  showing an icon that matches the "clan" for each search result.

**ng-model**:  Lets you bi-directionally bind data.  Example use:  put **ng-model** inside a textbox to edit a description in real time; the description text in a <p> and in the data update in real time automatically.

**ng-app**:  Within your main page (typically named index.html), you can bind part of it to an AngularJS module using the property **ng-app** within the enclosing element.

**ng-view**:  After using **ng-app**, you use **ng-view** to use partial views.  Works with **ngRoute** to "re-load" part of your page, i.e. replacing where **<... ng-view>** is found with other html code angular-styled.

Module = app = container for controllers, directives, services, filters, even other modules, etc.