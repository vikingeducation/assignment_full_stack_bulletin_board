App.controller('CommentsCtrl', ['$scope', 'Restangular', '$stateParams', function($scope, Restangular, $stateParams){
  $scope.commentForm = {};


  $scope.comments = Restangular.all('comments').getList().$object;
  //$scope.postComments = Restangular.one('posts', $stateParams.id).all('comments').getList().$object;

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

}]);
