fullStackBB.controller("PostShowCtrl", ['$scope', 'postService', '$rootScope', '$stateParams', function($scope, postService, $rootScope, $stateParams){


  postService.getPost($stateParams.id).then(function(post){
    $scope.post = post;
    $scope.comments = $scope.post.getList('comments').$object;
  });


  
}]);