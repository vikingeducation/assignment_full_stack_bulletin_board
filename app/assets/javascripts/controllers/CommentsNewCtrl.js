App.controller('CommentsNewCtrl', ['$scope', 'CommentsService', '$stateParams', function($scope, CommentsService, $stateParams) {
  $scope.formData = {};

  $scope.submitComment = function() {
    $scope.formData.post_id = $stateParams.id;
    CommentsService.createComment($scope.formData);
    $scope.formData = {};
  };

}]);
