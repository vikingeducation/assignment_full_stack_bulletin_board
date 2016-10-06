BulletBoard.controller('recentCommentsCtrl', ['$scope', 'commentService', function ($scope, commentService) {
	$scope.comments = commentService.all();
}]);
