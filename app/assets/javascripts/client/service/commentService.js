BulletBoard.factory('commentService', ['Restangular', function (Restangular) {
	var commentService = {};

	commentService.all = function () {
		return Restangular.all('comments').getList().$object;
	};

	return commentService;
}]);
