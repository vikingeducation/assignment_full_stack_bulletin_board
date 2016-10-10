fullStackBB.controller("RecentCommentsCtrl", ['$scope', 'commentService', function($scope, commentService){

  $scope.comments = commentService.getRecentComments().$object;




}])