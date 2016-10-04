App.controller('CommentsIndexCtrl', ['$scope', 'PostService', '$stateParams', function($scope, PostService, $stateParams) {

  $scope.post = PostService.find($stateParams.id)

}]);
