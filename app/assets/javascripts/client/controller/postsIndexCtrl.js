BulletBoard.controller('postsIndexCtrl', ['$scope', 'postService', function ($scope, postService) {
	$scope.posts = postService.all();

	$scope.$on('post.created', function (event, post) {
		$scope.posts.unshift(post);
	})
}]);
