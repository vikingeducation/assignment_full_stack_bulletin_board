bulletinBoard.controller('commentFormCtrl', 
	['$scope', 'postService', '$stateParams', '$rootScope', 
	function($scope, postService, $stateParams, $rootScope) {

		postService.getPost($stateParams.id).then(function(post) {
			$scope.post = post;
		})

		$scope.formSubmit = function(formValid) {
			if (formValid) {
				$scope.post.createComment($scope.commentForm)
					.then(function(response) {
						$scope.commentForm = {};
						$rootScope.$broadcast('comment.create');
					})
			}
		}

	}])