BulletBoard.factory('postService', ['Restangular', '$rootScope', 'Flash', function (Restangular, $rootScope, Flash) {
	// private
	var _createPost = function (params) {
		return Restangular.all('posts').post({
			post: {
				title: params.title,
				body: params.body,
				author: params.author
			}
		}).then(
			function success(resp) {
				$rootScope.$broadcast('post.created', resp);
				Flash.create('success', 'Post created successfully!');
				return resp;
			},
			function error(resp) {
				console.log(resp);
				Flash.create('danger', 'Post created unsuccessful!');
			}
		)
	};


	// public
	var postService = {};

	postService.all = function () {
		return Restangular.all('posts').getList().$object;
	};

	postService.create = function (params) {
		return _createPost(params);
	};

	return postService;
}]);
