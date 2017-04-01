bulletin.controller("postsCtrl", 
  ["$scope", "postService", "commentService",
  function($scope, postService, commentService) {

    $scope.posts = postService.posts();

    $scope.addPost = function() {
      postService.addPost($scope.newPost);
      $scope.newPost = {};
    }

  }])