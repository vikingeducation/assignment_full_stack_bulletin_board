bulletin.controller('recentCommentsCtrl', 
  ["$scope", "commentService",
  function($scope, commentService) {

    $scope.comments = commentService.comments();


  }])