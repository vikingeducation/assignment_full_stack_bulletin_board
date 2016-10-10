fullStackBB.controller("PostShowCtrl", ['$scope', 'postService', '$rootScope', '$stateParams', function($scope, postService, $rootScope, $stateParams){


  postService.getPost($stateParams.id).then(function(post){
    $scope.post = post;
    $scope.comments = $scope.post.getList('comments').$object;
  });

  $scope.$on('comment.created', function(){
    $scope.post.getList('comments').then(function(comments){
      angular.copy(comments, $scope.comments);
    })
  })

  $scope.form = {};

  $scope.createComment = function(params){
    $scope.post.createComment(params).then(function(){
      $rootScope.$broadcast('comment.created');
    })

    $scope.form = {};
  };



}]);