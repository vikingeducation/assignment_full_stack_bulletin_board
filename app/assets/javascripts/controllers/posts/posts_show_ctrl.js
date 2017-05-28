MyApp.controller('PostsShowCtrl', ['$scope',  'Restangular', '$stateParams',  function($scope, Restangular, $stateParams){

  $scope.post = Restangular.one('posts', $stateParams.id).get().$object;


  // $scope.createComment = function(){
  //   $scope.post.createComment($scope.commentParams)
  //   console.log('$scope.commentParams', $scope.commentParams)
  //   .then(function(response) {
  //     console.log(response);
  //     // $scope.commentParams = {};
  //   }, function(response) {
  //     console.error(response);
  //   });
  // };

  $scope.createCommentTest = function(params) {
    console.log('params!', params)
    console.log($scope.post.id)
    Restangular.all('comments').post({
      comment: {
        author: params.author,
        body: params.body,
        score: 0,
        post_id: $scope.post.id
      }
    })
    .then(function(createdComment){
      $scope.post.comments.push(createdComment);
      $scope.newComment = {};
    })
  }

}]);
