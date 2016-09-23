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
					resolve: { 
						comments: ['Restangular', function(Restangular) {
							return Restangular.all('comments').getList();
						}]
					},
					views: {
						'': { templateUrl: 'templates/posts.html' },
						'recentComments@posts': {
							templateUrl: 'templates/posts/recentComments.html',
							controller: 'recentCommentsCtrl'
						}
					}
				})

				.state('posts.index', {
					url: '/index',
					views: {
						'': { template: "<div ui-view='postForm'></div>" +
										"<div ui-view='postIndex'></div>"
						},
						'postForm@posts.index': {
							templateUrl: 'templates/posts/form.html',
							controller: 'postFormCtrl'
						},
						'postIndex@posts.index': {
							templateUrl: 'templates/posts/index.html',
							controller: 'postsIndexCtrl'
						}
					}
				})
				.state('posts.show', {
					url: '/show/:id',
					views: {
						'': { template: "<div ui-view='postShow'></div>" +
										"<div ui-view='commentForm'></div>" 
						},
						'commentForm@posts.show': {
							template: 'Comment Form here'
						},
						'postShow@posts.show': {
							templateUrl: 'templates/posts/show.html',
							controller: 'postShowCtrl'
						}
					}
				})

		}])


	bulletinBoard.factory('_', 
		['$window', function($window) {
			return $window._;
		}])







