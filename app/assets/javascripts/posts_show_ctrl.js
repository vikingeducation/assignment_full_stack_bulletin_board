BulletinBoard.controller('PostsShowCtrl',
['$scope', 'RestangularService', '$stateParams',
function($scope, RestangularService, $stateParams) {

  $scope.post = RestangularService.one($stateParams.id);

  $scope.createComment = function() {
    $scope.post.createComment($scope.commentForm)
      .then(function(){
        $scope.commentForm = {};
      }).catch(function(reason){
        console.log(reason);
      })
  }

}]);
