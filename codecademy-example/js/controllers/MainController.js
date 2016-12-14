app.controller('MainController', ['$scope', function($scope) {
  
  /*CONTROLLER VARIABLES*/
  
  $scope.title = 'Top Sellers in Books';
  $scope.promo = "Promotions are Back!";
  //$scope.product = {
  //  name: 'The Book of Trees',
  //  price: 19,
  //  pubdate: new Date('2014', '03', '08')
  //};
  $scope.products = [
    {
      name: 'The Book of Trees',
      price: 19,
      pubdate: new Date('2014','03','08'),
      cover: 'img/the-book-of-trees.jpg',
      likes: 0
    },
    {
      name: 'Program or be Programmed',
      price: 8,
      pubdate: new Date('2013','08','01'),
      cover: 'img/program-or-be-programmed.jpg',
      likes: 0
    },
    {
      name: 'My Favourite Book',
      //turns out you don't need to include all properties! the ng-repeat doesn't show something weird like "null"!
      likes: 0
    },
    {
      name: 'My Other Favourite Book',
      //turns out you don't need to include all properties! the ng-repeat doesn't show something weird like "null"!
      likes: 0
    }
  ];
  
  /*CONTROLLER FUNCTIONS*/
  
  $scope.plusOne = function(i){ // make sure the HTML element does this to get the products index: "plusOne($index)"
    $scope.products[i].likes += 1;
  };
}]);