bulletinBoard.controller('commentCtrl', 
	['$scope', '$rootScope', 'commentService',
	function($scope, $rootScope, commentService) {

		$scope.comments = commentService.getComments().$object;

		
		$rootScope.$on('comment.create', function() {
			$scope.comments = commentService.getComments().$object;
		})

		$scope.upVote = function(comment) {
			comment.upVote();
			$rootScope.$broadcast('comment.update', comment);
		}

		$scope.downVote = function(comment) {
			comment.downVote();
			$rootScope.$broadcast('comment.update', comment);
		}

	}])