bulletinBoard.controller('recentCommentsCtrl', 
	['$scope', 'comments', function($scope, comments) {
		$scope.comments = comments;
	}])