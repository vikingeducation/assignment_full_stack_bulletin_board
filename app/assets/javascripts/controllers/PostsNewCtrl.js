App.controller('PostsNewCtrl', ['$scope', "PostService", function($scope, PostService) {

  $scope.formData = {};

  $scope.submitPost = function() {
    PostService.createPost($scope.formData);
    $scope.formData = {};
  }

}]);
