var BulletBoard = angular.module('BulletBoard', ['ui.router', 'restangular', 'ui.bootstrap']);

BulletBoard.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/posts');

	$stateProvider
		.state('postsIndex', {
			url: '/posts',
			views: {
				'createPost@': {
					templateUrl: 'templates/posts/create.html',
					controller: 'postCreateCtrl'
				}
			}
		})
});
