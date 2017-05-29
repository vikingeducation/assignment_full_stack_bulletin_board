MyApp.controller('PostsShowCtrl', ['$scope',  'Restangular', '$stateParams', 'PostService', function($scope, Restangular, $stateParams, PostService){

  $scope.post = Restangular.one('posts', $stateParams.id).get().$object;

  $scope.createComment = function(params){
    $scope.post.createComment(params)
      .then(function( commentResponse ){
        $scope.post.comments.push( commentResponse );
      $scope.commentParams = {};
    })
  };

  Restangular.extendModel('comments', function(model){
    model.updateScore = function(){
      model.score++;
      model.put();
      console.log('model.updateScore!', '234234')
    }
    return model;
  });

  $scope.updateScore = function(commentId){
    Restangular.one('comments', commentId).get()
      .then(function(comment){
        comment.updateScore();
      })
  };

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
