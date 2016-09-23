bulletinBoard.controller('postShowCtrl', 
	['$scope', 'postService', '$stateParams',
	function($scope, postService, $stateParams) {

		postService.getPost($stateParams.id)
			.then(function(post) {
				$scope.post = post;
			})

	}])