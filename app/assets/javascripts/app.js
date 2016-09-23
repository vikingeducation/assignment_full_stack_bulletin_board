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
					views: {
						'': { templateUrl: 'templates/posts.html' },
						'recentComments@posts': {
							templateUrl: 'templates/posts/recentComments.html',
							controller: 'commentCtrl'
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
						'': { template: "<div ui-view='postShow'></div>"
						},
						'postShow@posts.show': {
							templateUrl: 'templates/posts/show.html',
							controller: 'postShowCtrl'
						},
						'commentForm@posts.show': {
							templateUrl: 'templates/posts/commentForm.html',
							controller: 'commentFormCtrl'
						},
						'comments@posts.show': {
							templateUrl: 'templates/posts/comments.html',
							controller: 'commentCtrl'
						}
					}
				})

		}])


	bulletinBoard.factory('_', 
		['$window', function($window) {
			return $window._;
		}])







