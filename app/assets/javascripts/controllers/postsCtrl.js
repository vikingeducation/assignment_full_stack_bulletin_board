bulletin.controller("postsCtrl", 
  ["$scope", "postService",
  function($scope, postService) {

    $scope.posts = postService.posts();

    $scope.comments = postService.comments();

    $scope.addPost = function() {
      console.log('posts ctrl adding post')
      postService.addPost($scope.newPost);
      $scope.newPost = {};
    }

  }])