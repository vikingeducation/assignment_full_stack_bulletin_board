MyApp.controller('PostsIndexCtrl', ['$scope', 'PostService',  function($scope, PostService){

  $scope.posts = PostService.posts;

}]);
