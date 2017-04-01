bulletin.controller("postsCtrl", 
  ["$scope", "postService",
  function($scope, postService) {

    $scope.posts = postService.posts();

    $scope.comments = postService.comments();

    $scope.addPost = function() {
      postService.addPost($scope.newPost);
      $scope.newPost = {};
    }

  }])

// refactor into multiple controllers