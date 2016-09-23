bulletinBoard.controller('postShowCtrl', 
	['$scope', 'postService', '$stateParams', '$rootScope',
	function($scope, postService, $stateParams, $rootScope) {

		postService.getPost($stateParams.id).then(function(post) {
			$scope.post = post;
		})

		$rootScope.$on('comment.create', function() {
			postService.getPost($stateParams.id).then(function(post) {
				$scope.post = post;
			})
		})

		$rootScope.$on('comment.update', function() {
			postService.getPost($stateParams.id).then(function(post) {
				$scope.post = post;
			})
		})

	}])