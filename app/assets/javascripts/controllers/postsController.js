App.controller('PostsCtrl', ['$scope', 'Restangular', '$stateParams', 'RatingService',
                              function($scope, Restangular, $stateParams, RatingService){

  $scope.postForm = {};
  $scope.post = Restangular.one('posts', $stateParams.id).get().$object;
  $scope.posts = Restangular.all('posts').getList().$object;



  $scope.createPost = function(){
    Restangular.all('posts').post({

      title: $scope.postForm.title,
      author: $scope.postForm.author,
      body: $scope.postForm.body

    }).then(function(response){
      console.log(response);
      $scope.postForm = {};
      $scope.posts.push(response);
    })
  };

  $scope.upvote = function(comment){
    RatingService.upvote(comment);
  };

  $scope.downvote = function(comment){
    RatingService.downvote(comment);
  }



}]);
