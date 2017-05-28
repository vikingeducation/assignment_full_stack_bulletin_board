MyApp.controller('PostsIndexCtrl', ['$scope', 'PostService',  function($scope, PostService){

  $scope.posts = PostService.posts;

  $scope.createPost = function(params){
    PostService.createPost(params)

    .then(function(response) {
      console.log(response);
      $scope.posts.push( response );

      // clear post form
      $scope.post = {};
    })
  };

}]);
