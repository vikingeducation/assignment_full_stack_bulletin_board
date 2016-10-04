'use strict';
app.controller('RecentCommentsCtrl', ['$scope', 'CommentsService', '_', function($scope, CommentsService, _){

	CommentsService.getComments().then(function(comments){
			$scope.comments = _.sortBy(comments, 'date').reverse();
			$scope.recentComments = _.take($scope.comments, 5);
	});
}]);
