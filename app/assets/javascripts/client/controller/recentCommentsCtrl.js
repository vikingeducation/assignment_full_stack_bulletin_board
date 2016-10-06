BulletBoard.controller('recentCommentsCtrl', ['$scope', 'commentService', function ($scope, commentService) {
	$scope.comments = commentService.all();

	$scope.$on('comment.created', function (event, comment) {
		$scope.comments.unshift(comment);
	});
}]);
