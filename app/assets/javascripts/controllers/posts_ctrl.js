app.controller('PostsCtrl', ['$scope', 'PostsService', function($scope, PostsService){

  $scope.posts = PostsService.getPosts().$object

}]);
