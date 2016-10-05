App.controller('PostsShowCtrl', ['$scope', 'PostService', '$stateParams', function($scope, PostService, $stateParams) {
  $scope.post = PostService.find($stateParams.id)
}]);
