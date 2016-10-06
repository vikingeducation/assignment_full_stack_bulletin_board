BulletBoard.factory('commentService', ['Restangular', 'Flash', '$rootScope', function (Restangular, Flash, $rootScope) {
	var commentService = {};

	commentService.all = function () {
		return Restangular.all('comments').getList().$object;
	};

	Restangular.extendModel('comments', function (model) {
		model.upvote = function () {
			this.score += 1;
			this.put();
		};
		model.downvote = function () {
			this.score -= 1;
			this.put();
		};
		return model;
	});

	commentService.create = function (params) {
		return Restangular.all('comments').post({
			comment: params
		}).then(
			function success(comment) {
				Flash.create('success', 'Comment created successfully!');
				$rootScope.$broadcast('comment.created', comment);
				return comment
			},
			function error(resp) {
				console.log(resp);
				Flash.create('danger', 'Comment is not created!')
			}
		)
	};

	return commentService;
}]);
