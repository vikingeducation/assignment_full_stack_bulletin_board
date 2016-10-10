fullStackBB.controller("PostsCtrl", ['$scope', 'postService', '$rootScope', function($scope, postService, $rootScope){

  $scope.posts = postService.getPosts().$object;


  $scope.form = {};

  $scope.createPost = function(){
    postService.createPost($scope.form).then(function(){
      $rootScope.$broadcast("posts.created");
    });

    $scope.form = {};
  };


  $scope.$on('posts.created', function(){
    postService.getPosts().then(function(posts){
      angular.copy(posts, $scope.posts);
    });
  });

}])