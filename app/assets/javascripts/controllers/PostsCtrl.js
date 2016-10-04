myApp.controller("PostsCtrl", ["$scope", "postsService", function($scope, postsService) {
  $scope.posts = postsService.all();

  $scope.post = {}

  $scope.handlePostForm = function() {
    $scope.posts.create($scope.post)
  }

  $scope.comments = $scope.posts
}])