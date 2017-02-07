App.controller('CommentsCtrl', ['$scope', 'Restangular', '$stateParams', 'RatingService',
                                function($scope, Restangular, $stateParams, RatingService){
  $scope.commentForm = {};


  $scope.comments = Restangular.all('comments').getList().$object;

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



  $scope.upvote = function(comment){
    console.log(comment);
    RatingService.upvote(comment);
  }

  $scope.downvote = function(comment){
    console.log(comment);
    RatingService.downvote(comment);
  }

}]);
