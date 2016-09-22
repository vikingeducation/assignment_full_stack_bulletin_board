bulletinBoard.controller('postsIndexCtrl', 
	['$scope','posts', function($scope, posts) {

		$scope.posts = posts;
	}])