myApp.controller('PostsShowCtrl', ['$scope', 'post', 'Restangular',
  function($scope, post){
    $scope.post = post;
  }])