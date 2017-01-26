myApp.controller('CommentsIndexCtrl', ['$scope', 'comments', 'Restangular',
  function($scope, comments, Restangular){
    $scope.comments = comments;

    $scope.upvote = function(comment_id) {
      Restangular.one("comments", comment_id).post();
    }
  }])