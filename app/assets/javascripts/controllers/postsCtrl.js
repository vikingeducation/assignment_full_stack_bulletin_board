app.controller("PostsCtrl", ["$scope", "postsService", "Restangular", "_", function($scope, postsService, Restangular, _) {
  $scope.posts = postsService.all();
  console.log($scope.newPost);
// check versions, if not, use $http
  $scope.submitPost = function(valid, post, form, $scope) {
    Restangular.all("posts").post({"post": post})
      .then( function(post) {
        $scope.posts.push(post);
        // $scope.newPost.body = "";
        // $scope.newPost.author = "";
        // angular.copy({}, $scope.newPost);
        // $scope.newPost = {};
        // $scope.post = {};
        // console.log("newPost = " + $scope.newPost.toString());
        // $scope.$apply();
      });
    // console.log($scope);
    // $scope.newPost.body = "";
    // $scope.newPost.author = "";
  };


}]);
