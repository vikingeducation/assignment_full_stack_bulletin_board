app.controller('CommentsCtrl', ['$scope', 'commentsService', function($scope, commentsService) {
    $scope.comments = commentsService.all();
  }
]);
