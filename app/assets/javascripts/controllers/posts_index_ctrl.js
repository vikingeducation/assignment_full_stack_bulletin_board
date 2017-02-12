myApp.controller('PostsIndexCtrl', ['$scope', 'posts', 'Restangular',
  function($scope, posts, Restangular){
    $scope.posts = posts;

    $scope.params = {
      title   : "",
      author  : "",
      body    : ""
    }
    $scope.createPost = function(params) {
      console.log(params);
      Restangular.all('posts').post(params)
      .then( function(response) {
        $scope.posts.push(response);
        $scope.params = {
          title   : "",
          author  : "",
          body    : ""
        }
      }, function() {
        console.log("new post failed");
      })
    }

  }])