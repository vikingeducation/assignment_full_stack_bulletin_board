bulletinBoard.controller('postsIndexCtrl', 
	['$scope', 'Restangular', 'posts', function($scope, Restangular, posts) {

		$scope.posts = posts;

		// $scope.posts = Restangular.all('posts').getList().$object;
	}])