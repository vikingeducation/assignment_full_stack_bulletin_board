BulletBoard.controller('postCreateCtrl', ['$scope', 'postService', function ($scope, postService) {
	$scope.createPost = function (params) {
		postService.create(params);
		$scope.postParams = {};
	};
}]);
