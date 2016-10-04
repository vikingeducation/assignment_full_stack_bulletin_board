BulletinBoard.controller('PostsCtrl',
['$scope', 'RestangularService',
function ($scope, RestangularService) {

  $scope.hello = "HELLO WORLD";

  $scope.posts = RestangularService.getPosts();

}]);
