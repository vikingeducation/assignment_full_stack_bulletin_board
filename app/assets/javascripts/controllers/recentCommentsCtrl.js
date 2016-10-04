'use strict';
app.controller('RecentCommentsCtrl', ['$scope', 'CommentsService', '_', function($scope, CommentsService, _){

	CommentsService.getRecentComments().then(function(comments){
			$scope.comments = _.sortBy(comments, 'created_at');
			$scope.recentComments = _.first($scope.comments, 10);
	});
}]);