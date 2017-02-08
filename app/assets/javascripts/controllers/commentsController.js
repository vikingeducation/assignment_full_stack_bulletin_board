App.controller('CommentsCtrl', ['$scope', 'Restangular', '$stateParams', 'CommentService',
                                function($scope, Restangular, $stateParams, CommentService){
  $scope.commentForm = {};


  $scope.comments = CommentService.all();

  $scope.commentPost = function(){
    console.log();

    Restangular.all('comments').post({
      author: $scope.commentForm.author,
      body:   $scope.commentForm.body,
      post_id: $stateParams.id
    }).then(function(response){
      console.log(response);
      $scope.comments.push(response);
      $scope.commentForm = {};
    });
  }

  $scope.downvote = function(id){
    console.log("Clicked downvote");
  };

  $scope.upvote = function(id){
    console.log("Clicked upvote");
  };


}]);
