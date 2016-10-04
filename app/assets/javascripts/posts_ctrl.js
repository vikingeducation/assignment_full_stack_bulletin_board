BulletinBoard.controller('PostsCtrl',
['$scope', 'RestangularService',
function ($scope, RestangularService) {

  $scope.hello = "HELLO WORLD";
  $scope.postForm = {};

  $scope.posts = RestangularService.getPosts();
  $scope.comments = RestangularService.getComments();

}]);
