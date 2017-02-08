App.controller('PostsCtrl', ['$scope', 'Restangular', '$stateParams', 'PostService',
                              function($scope, Restangular, $stateParams, PostService){

  $scope.postForm = {};

  $scope.post = Restangular.one('posts', $stateParams.id).get().$object;

  $scope.posts = PostService.all();


  $scope.createPost = function(){
    $scope.posts.create($scope.postForm)
      .then(function(response){
        $scope.postForm = {};
        $scope.posts = PostService.all();
      })
  };

  $scope.upvote = function(comment){
    //CommentService.upvote(comment);
    console.log("Clicked upvote");

  };

  $scope.downvote = function(comment){
    //CommentService.downvote(comment);
    console.log("Clicked downvote");

  }



}]);
