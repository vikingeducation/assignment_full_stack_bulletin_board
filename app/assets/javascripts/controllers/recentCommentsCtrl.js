'use strict';
app.controller('RecentCommentsCtrl', ['$scope', 'CommentsService', '_', function($scope, CommentsService, _){

	CommentsService.getAllComments().then(function(comments){
		$scope.comments = _.sortBy(comments, 'date').reverse();
		$scope.recentComments = _.take($scope.comments, 5);
	});

	$scope.$on('comment.created', function(){
		CommentsService.getAllComments().then(function(comments){
			$scope.comments = _.sortBy(comments, 'date').reverse();
			$scope.recentComments = _.take($scope.comments, 5);
		});
	})
}]);
