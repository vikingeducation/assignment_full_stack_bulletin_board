BulletBoard.factory('postService', ['Restangular', function (Restangular) {
	var postService = {};

	postService.all = function () {
		return Restangular.all('posts').getList().$object;
	}

	return postService;
}]);
