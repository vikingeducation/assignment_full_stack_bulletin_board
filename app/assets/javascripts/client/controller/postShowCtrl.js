BulletBoard.controller('postShowCtrl', ['$scope', '$stateParams', 'postService', 'commentService',
	function ($scope, $stateParams, postService, commentService) {
		$scope.post = postService.findPost($stateParams.id);

		console.log($scope.post);

		$scope.createComment = function (params) {
			commentService.create({
				body: params.body,
				author: params.author,
				post_id: $scope.post.id
			}).then(
				function () {
					$scope.commentParams = {};
				}
			)
		};

		$scope.$on('comment.created', function (event, comment) {
			$scope.post.comments.unshift(comment);
		});

		// $scope.upvote = function (id) {
		// 	var comment = commentService.find(id);
		// };
		//
		// $scope.downvote = function (id) {
		//
		// };

	}
]);
