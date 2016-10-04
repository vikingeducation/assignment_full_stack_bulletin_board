"use strict";
app.controller('PostsCtrl', ['$scope', 'PostsService', '$rootScope', function($scope, PostsService, $rootScope){

  $scope.posts = PostsService.getPosts().$object;

  $scope.createPost = function(newPost) {
    newPost.date = new Date();
    PostsService.createPost(newPost).then(function(){
    	$rootScope.$broadcast('posts.created');
    });
    $scope.form = {};
  };

  $scope.$on('posts.created', function(){
  	PostsService.getPosts().then(function(posts){
  		angular.copy(posts, $scope.posts);
  	});
  });



}]);
