App.controller('PostsCtrl', ['$scope', 'Restangular', '$stateParams', function($scope, Restangular, $stateParams){

  $scope.postForm = {};

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


  $scope.post = Restangular.one('posts', $stateParams.id).get().$object;
  console.log($scope.post);


}]);
