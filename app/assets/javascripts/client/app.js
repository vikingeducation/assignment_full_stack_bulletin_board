var BulletBoard = angular.module('BulletBoard', ['ui.router', 'restangular', 'ui.bootstrap']);

BulletBoard.config(function ($stateProvider, $urlRouterProvider, RestangularProvider) {
	// api router configuration
	RestangularProvider.setBaseUrl('/api/v1');
	RestangularProvider.setRequestSuffix('.json');

	// ui router configuration
	$urlRouterProvider.otherwise('/posts');

	$stateProvider
		.state('posts', {
			url: '/posts',
			views: {
				'createPost@': {
					templateUrl: 'templates/posts/create.html',
					controller: 'postCreateCtrl'
				},
				'postsIndex@': {
					templateUrl: 'templates/posts/index.html',
					controller: 'postsIndexCtrl'
				},
				'recentComments@': {
					templateUrl: 'templates/comments/recent.html',
					controller: 'recentCommentsCtrl'
				}
			}
		})
});
