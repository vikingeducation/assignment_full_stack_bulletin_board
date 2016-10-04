BulletinBoard.controller('PostsShowCtrl',
['$scope', 'RestangularService', '$stateParams', '$rootScope',
function($scope, RestangularService, $stateParams, $rootScope) {

  $scope.post = RestangularService.one($stateParams.id);

  $scope.createComment = function() {
    $scope.post.createComment($scope.commentForm)
      .then(function(){
        $scope.commentForm = {};
      }).catch(function(reason){
        console.log(reason);
      });
  };

  $rootScope.$broadcast('comment.create');

}]);
