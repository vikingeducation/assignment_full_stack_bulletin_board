myApp.controller('PostsShowCtrl', ['$scope', 'post', 'comments', 'Restangular', '$rootScope', 'postService', 'commentService',
  function($scope, post, comments, Restangular, $rootScope, postService, commentService){
    $scope.post = post;
    $scope.comments = comments;
    $scope.params = {
      author  : "",
      text    : ""
    }
    $scope.createComment = function(params) {
      console.log(params);
      $scope.post.createComment(params)
      .then( function(response) {
        $scope.comments.push(response);
        $rootScope.$broadcast('comment.created');
        $scope.params = {
          author  : "",
          text    : ""
        }
      }, function() {
        console.log("new comment failed");
      })
    }

    $scope.$on('comment.updated', function(eventName, comment) {
      postService.getComments(post.id)
        .then(function(comments) {
          angular.copy(comments, $scope.comments);
        });
    });

    $scope.upVote = function(comment) {
      commentService.vote(comment.id, 1);
    }
    $scope.downVote = function(comment) {
      commentService.vote(comment.id, -1);
    }
  }])