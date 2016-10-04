app.controller('ShowPostCtrl', ['$stateParams', '$scope', 'PostsService', 'CommentsService', 'Restangular', function($stateParams, $scope, PostsService, CommentsService, Restangular){

  var id = $stateParams.id

  PostsService.getPost(id)
    .then(function(post){
      $scope.post = post
      $scope.comments = $scope.post.getList('comments').$object;
    });


  // $scope.comments = CommentsService.getPostComments(id).$object;

}]);
