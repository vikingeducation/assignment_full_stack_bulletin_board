app.controller('PostsCtrl', ['$scope', 'PostsService', function($scope, PostsService){

  $scope.posts = PostsService.getPosts().$object

  $scope.createPost = function(newPost) {
    newPost.date = new Date();
    PostsService.createPost(newPost)
    $scope.form = {}
  }



}]);
