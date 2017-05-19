app.controller("PostsCtrl", ["$scope", "postsService", function($scope, postsService) {
  $scope.posts = postsService.all();
}]);
