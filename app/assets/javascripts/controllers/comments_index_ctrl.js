myApp.controller('CommentsIndexCtrl', ['$scope', 'comments', 'Restangular', 'commentService',
  function($scope, comments, Restangular, commentService){
    $scope.comments = comments;

    $scope.$on('comment.created', function() {
      commentService.getRecent()
        .then(function(comments) {
          angular.copy(comments, $scope.comments);
        });
    });

    $scope.$on('comment.updated', function(eventName, comment) {
      commentService.getRecent()
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