bulletin.controller('recentCommentsCtrl', 
  ["$scope", "commentService",
  function($scope, commentService) {

    $scope.comments = commentService.comments();

    $scope.$on('comment.created', function() {
      commentService.refreshAll()
        .then(function(response) {
          angular.copy(response, $scope.comments);
        })
    }

    )


  }])