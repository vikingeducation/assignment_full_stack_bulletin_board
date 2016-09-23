bulletinBoard.controller('postsIndexCtrl', 
	['$scope','postService', function($scope, postService) {

		postService.getAllPosts()
			.then(function(posts) {
				$scope.posts = posts;
			})
	}])