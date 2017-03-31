bulletin.controller("postsIndexCtrl", 
  ["$scope", "postService",
  function($scope, postService) {

    $scope.value = "here is a scoped value"

    $scope.posts = postService.posts();

  }])