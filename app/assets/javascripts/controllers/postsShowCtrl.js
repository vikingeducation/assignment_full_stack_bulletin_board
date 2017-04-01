bulletin.controller('postsShowCtrl', 
  ["$scope", "post", "postService", "commentService",
  function($scope, post, postService, commentService) {

    $scope.post = post;

    $scope.addComment = function() {
      $scope.newComment.postID = $scope.post.id;
      commentService.create($scope.newComment)
                        .then(function(response) {
                          $scope.post.comments.push(response);
                        });

      // extendModel function only works when show page first loads, after refresh 'not a function' error appears
      // $scope.post.createComment($scope.newComment)
      //   .then(function(response) {
      //     $scope.newComment = {};
      //     console.log(response)
      //   }, function(response) {
      //     console.error(response)
      //   })

    }


  }])