myApp.controller('PostsShowCtrl', ['$scope', 'post', 'Restangular', '$rootScope', 'postService', 'commentService',
  function($scope, post, Restangular, $rootScope, postService, commentService){
    $scope.post = post;
    $scope.comments = $scope.post.comments;
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

    $scope.upvoteComment = function(id) {
      var comment = _.find($scope.comments, function(comment) {
        return comment.id === id;
      });

      comment.upvote()
        .then(function() {
          $rootScope.$broadcast('comment.updated');
        });
    };


    $scope.downvoteComment = function(id) {
      var comment = _.find($scope.comments, function(comment) {
        return comment.id === id;
      });

      comment.downvote()
        .then(function() {
          $rootScope.$broadcast('comment.updated');
        });
    };

  }])