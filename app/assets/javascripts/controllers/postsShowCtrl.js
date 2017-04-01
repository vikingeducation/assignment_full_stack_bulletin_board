bulletin.controller('postsShowCtrl', 
  ["$scope", "post", "postService", "commentService", "$rootScope",
  function($scope, post, postService, commentService, $rootScope) {

    $scope.post = post;

    $scope.upvote = function(comment) {
      commentService.upvote(comment);
    }

    $scope.downvote = function(comment) {
      commentService.downvote(comment);
    }

    $scope.$on('comment.voted', function() {
      console.log('updating votes across controllers')
      postService.getPostComments($scope.post.id)
        .then(function(response) {
          console.log(response)
          angular.copy(response, $scope.post)
        })

      // commentService.refreshAll()
      //   .then(function(response) {
      //     angular.copy(response, $scope.post.comments.push(response));
      //   })
    });

    $scope.addComment = function() {
      $scope.newComment.postID = $scope.post.id;
      commentService.create($scope.newComment)
                        .then(function(response) {
                          $scope.newComment = {};
                          $scope.post.comments.push(response);
                          $rootScope.$broadcast('comment.created', response)
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