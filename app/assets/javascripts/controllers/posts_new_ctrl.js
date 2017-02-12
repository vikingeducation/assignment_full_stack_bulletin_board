myApp.controller('PostsNewCtrl', ['$scope', 'Restangular',
  function($scope, Restangular){
    $scope.params = {
      title   : "",
      author  : "",
      body    : ""
    }
    $scope.createPost = function(params) {
      Restangular.all('posts').post(params)
      .then( function(response) {
        console.log("new post saved");

      }, function() {
        console.log("new post failed");
      })
    }
  }])