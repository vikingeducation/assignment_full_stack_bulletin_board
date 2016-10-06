BulletBoard.controller('postsIndexCtrl', ['$scope', 'postService', function ($scope, postService) {
	$scope.posts = postService.all();
}]);
