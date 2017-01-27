myApp.controller('CommentsIndexCtrl', ['$scope', 'comments', 'Restangular', 'commentService',
  function($scope, comments, Restangular, commentService){
    $scope.comments = comments;

    $scope.$on('comment.created', function() {
      commentService.getRecent()
        .then(function(comments) {
          angular.copy(comments, $scope.comments);
        });
    });

    $scope.upvote = function(comment_id) {
      Restangular.one("comments", comment_id).post();
    }
  }])