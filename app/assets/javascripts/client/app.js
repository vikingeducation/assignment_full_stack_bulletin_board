var BulletBoard = angular.module('BulletBoard', ['ui.router', 'restangular', 'ui.bootstrap', 'ngFlash']);

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
				'@': {
					templateUrl: 'templates/posts/posts.html'
				},
				'createPost@posts': {
					templateUrl: 'templates/posts/create.html',
					controller: 'postCreateCtrl'
				},
				'postsIndex@posts': {
					templateUrl: 'templates/posts/index.html',
					controller: 'postsIndexCtrl'
				},
				'recentComments@': {
					templateUrl: 'templates/comments/recent.html',
					controller: 'recentCommentsCtrl'
				}
			}
		})
		.state('posts.show', {
			url: '/:id',
			views: {
				'@': {
					templateUrl: 'templates/posts/show.html',
					controller: 'postShowCtrl'
				},
				'post@posts.show': {
					templateUrl: 'templates/posts/post.html'
				},
				'commentCreate@posts.show': {
					templateUrl: 'templates/comments/create.html'
				},
				'postComments@posts.show': {
					templateUrl: 'templates/posts/postComments.html'
				}
			}
		})
});
