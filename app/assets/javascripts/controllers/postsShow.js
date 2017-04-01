bulletin.controller('postsShowCtrl', 
  ["$scope", "post", "postService",
  function($scope, post, postService) {

    $scope.post = post
    $scope.addComment = function() {
      postService.addComment(newComment);
    }


  }])