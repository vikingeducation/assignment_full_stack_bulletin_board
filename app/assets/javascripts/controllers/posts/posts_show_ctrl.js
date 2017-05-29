MyApp.controller('PostsShowCtrl', ['$scope',  'Restangular', '$stateParams', 'PostService', 'CommentService', '$rootScope', function($scope, Restangular, $stateParams, PostService, CommentService, $rootScope){

  $scope.post = Restangular.one('posts', $stateParams.id).get().$object;

  $scope.createComment = function(params){
    $scope.post.createComment(params)
      .then(function( commentResponse ){
        $scope.post.comments.push( commentResponse );
      $scope.commentParams = {};
    })
  };


  $scope.updateScore = function(commentId, increment){
    Restangular.one('comments', commentId).get()
      .then(function(comment){
        comment.updateScore(increment)
        $rootScope.$broadcast('comment.updated');
      })
  };

  $scope.$on('comment.updated', function(){
      Restangular.one('posts', $stateParams.id).get()
        .then(function(response){
          angular.copy(response, $scope.post)
        })
  })

  // $scope.createCommentTest = function(params) {
  //   console.log('params!', params)
  //   console.log($scope.post.id)
  //   Restangular.all('comments').post({
  //     comment: {
  //       author: params.author,
  //       body: params.body,
  //       score: 0,
  //       post_id: $scope.post.id
  //     }
  //   })
  //   .then(function(createdComment){
  //     $scope.post.comments.push(createdComment);
  //     $scope.commentParams = {};
  //   })
  // }

}]);
