MyApp.controller('CommentsIndexCtrl', ['$scope', 'CommentService',  function($scope, CommentService){

  $scope.comments = CommentService.comments;

}]);
