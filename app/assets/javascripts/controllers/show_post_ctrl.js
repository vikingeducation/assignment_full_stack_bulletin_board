"use strict";
app.controller('ShowPostCtrl', ['$stateParams', '$scope', 'PostsService', 'CommentsService', 'Restangular', '$rootScope', function($stateParams, $scope, PostsService, CommentsService, Restangular, $rootScope){

  var id = $stateParams.id

  PostsService.getPost(id)
    .then(function(post){
      $scope.post = post;
      $scope.comments = $scope.post.getList('comments').$object;
    });

  $scope.upvote = function(comment){
  	CommentsService.upvote(comment).then(function(){
  		$rootScope.$broadcast('comment.updated');
  	});
  };

  $scope.downvote = function(comment){
  	CommentsService.downvote(comment).then(function(){
  		$rootScope.$broadcast('comment.updated');
  	});
  };

  $scope.$on('comment.updated', function(){
  	$scope.post.getList('comments').then(function(comments){
  		angular.copy(comments, $scope.comments);
  	});
  });

  $scope.$on('comment.created', function(){
  	$scope.post.getList('comments').then(function(comments){
  		angular.copy(comments, $scope.comments);
  	});
  });

  $scope.createComment = function(form) {
    $scope.post.createComment(form).then(function() {
      $rootScope.$broadcast('comment.created')
    })
  }
  // $scope.comments = CommentsService.getPostComments(id).$object;

}]);
