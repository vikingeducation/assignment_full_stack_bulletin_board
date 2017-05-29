MyApp.controller('CommentsIndexCtrl', ['$scope', 'CommentService', 'Restangular', '$rootScope', function($scope, CommentService, Restangular, $rootScope){

  $scope.comments = CommentService.comments;


  $scope.updateScore = function(commentId, increment){
    Restangular.one('comments', commentId).get()
      .then(function(comment){
        comment.updateScore(increment)
        $rootScope.$broadcast('recentComments.updated');
      })
  };


  $scope.$on('recentComments.updated', function(){
    CommentService.updatedComments()
      .then(function(response){
        angular.copy(response, $scope.comments)
      })
  })

}]);
