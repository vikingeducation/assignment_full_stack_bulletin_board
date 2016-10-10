fullStackBB.controller("RecentCommentsCtrl", ['$scope', 'commentService', function($scope, commentService){

  $scope.comments = commentService.getRecentComments().$object;

  $scope.$on('comment.created', function(){
    $scope.comments = commentService.getRecentComments().$object;
  })


}])