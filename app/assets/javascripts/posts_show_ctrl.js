BulletinBoard.controller('PostsShowCtrl',
['$scope', 'RestangularService', '$stateParams', '$rootScope',
function($scope, RestangularService, $stateParams, $rootScope) {

  $scope.post = RestangularService.one($stateParams.id);

  $scope.createComment = function() {
    $scope.post.createComment($scope.commentForm)
      .then(function(){
        $scope.commentForm = {};
        $rootScope.$broadcast('comment.create');
      }).catch(function(reason){
        console.log(reason);
      });
  };

  $scope.vote = function(comment, dir) {
    console.log(comment);
    $scope.post.voteForComment(comment, dir)
      .then(function(){
        $rootScope.$broadcast('comment.vote');
      })
  };

}]);
