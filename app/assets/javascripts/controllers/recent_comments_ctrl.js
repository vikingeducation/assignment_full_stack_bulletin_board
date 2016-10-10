fullStackBB.controller("RecentCommentsCtrl", ['$scope', 'commentService', function($scope, commentService){

  $scope.comments = commentService.getComments().$object;




}])