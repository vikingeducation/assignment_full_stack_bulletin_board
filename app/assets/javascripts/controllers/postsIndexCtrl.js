bulletinBoard.controller('postsIndexCtrl', 
	['$scope','postService', function($scope, postService) {

		$scope.posts = postService.getAllPosts().$object;

	}])