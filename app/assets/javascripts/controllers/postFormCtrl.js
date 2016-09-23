bulletinBoard.controller('postFormCtrl', 
	['$scope', 'postService', 
	function($scope, postService) {

		$scope.createPost = function(valid) {
			if (valid) {
				postService.createPost($scope.postForm);
				$scope.postForm = {};
			}
		}
	}])