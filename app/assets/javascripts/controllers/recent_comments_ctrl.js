fullStackBB.controller("RecentCommentsCtrl", ['$scope', 'commentService', '$rootScope', function($scope, commentService, $rootScope){

  $scope.comments = commentService.getRecentComments().$object;

  $scope.$on('comment.created', function(){
    $scope.comments = commentService.getRecentComments().$object;
  })

  $scope.$on('comment.updated', function(){
    $scope.comments = commentService.getRecentComments().$object;
  })


  $scope.vote = function(comment, number){
    commentService.vote(comment, number).then(function(){
      $rootScope.$broadcast('comment.updated');
    })
  };


}])