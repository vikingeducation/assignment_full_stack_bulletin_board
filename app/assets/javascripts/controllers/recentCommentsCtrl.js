App.controller("RecentCommentsCtrl", ["$scope", 'comments', function($scope, comments) {
  $scope.comments = comments;
}])
