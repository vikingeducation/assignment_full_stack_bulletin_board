MyApp.controller('PostsShowCtrl', ['$scope',  'Restangular', '$stateParams', 'PostService', function($scope, Restangular, $stateParams, PostService){

  $scope.post = Restangular.one('posts', $stateParams.id).get().$object;

  $scope.post2 = Restangular.one('posts', $stateParams.id).get();


  $scope.createComment = function(params){
    $scope.post.createComment(params)
      .then(function( commentResponse ){
        $scope.post.comments.push( commentResponse );
      $scope.commentParams = {};
    })
  }


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
