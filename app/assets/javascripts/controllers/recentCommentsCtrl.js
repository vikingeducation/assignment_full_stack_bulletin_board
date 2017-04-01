bulletin.controller('recentCommentsCtrl', 
  ["$scope", "commentService", "$rootScope",
  function($scope, commentService, $rootScope) {

    $scope.comments = commentService.comments();

    $scope.upvote = function(comment) {
      commentService.upvote(comment);
    }

    $scope.downvote = function(comment) {
      commentService.downvote(comment);
    }

    $scope.$on('comment.created', function() {
      commentService.refreshAll()
        .then(function(response) {
          angular.copy(response, $scope.comments);
        })
    });

    $scope.$on('comment.voted', function() {
      commentService.refreshAll()
        .then(function(response) {
          angular.copy(response, $scope.comments);
        })
    });


  }])