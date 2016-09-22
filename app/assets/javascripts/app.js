var bulletinBoard = angular.module('bulletinBoard', ['ui.router', 'restangular'])
	
	.config(['RestangularProvider', function(RestangularProvider) {
		RestangularProvider.setBaseUrl('/api/v1');
		RestangularProvider.setRequestSuffix('.json');
	}])

	.config(
		['$urlRouterProvider', '$stateProvider', 
		function($urlRouterProvider, $stateProvider) {

			$urlRouterProvider.otherwise('/posts');

			$stateProvider
				.state('posts', {
					url: '/posts',
					templateUrl: 'templates/posts.html'
				})

				.state('posts.index', {
					url: '/index',
					resolve: {
						posts: ['Restangular', function(Restangular) {
							return Restangular.all('posts').getList();
						}],
						comments: ['Restangular', function(Restangular) {
							return Restangular.all('comments').getList();
						}]
					},
					views: {
						'postIndex': {
							templateUrl: 'templates/posts/index.html',
							controller: 'postsIndexCtrl'
						},
						'recentComments': {
							templateUrl: 'templates/posts/recentComments.html',
							controller: 'recentCommentsCtrl'
						}
					}
				})

		}])