var App = angular.module('App', ['ui.router', 'restangular'])

App.factory('_' ['$window', function($window) {
  return $window._;
}]);

App.config(
  ['$stateProvider', '$urlRouterProvider', 'RestangularProvider',
  function($stateProvider, $urlRouterProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('/api/v1');
    RestangularProvider.setRequestSuffix('.json');

    $urlRouterProvider.otherwise('/posts');

    $stateProvider
      .state('posts', {
        url: '/posts',
        abstract: true,
        views: {
          "mainContent": {
            templateUrl: "/templates/mainContent.html",
          },
          "recentComments": {
            templateUrl: "/templates/comments/recentComments.html",
            controller: "RecentCommentsCtrl"
          }
        },
        resolve: {
          posts: ['PostService', function(PostService) {
            return PostService.getPosts();
          }],
          comments: ['CommentsService', function(CommentsService) {
            return CommentsService.getComments();
          }]
        }
      })
      .state('posts.index', {
        url: '',
        views: {
          'display': {
            templateUrl: "/templates/posts/index.html",
            controller: 'PostsIndexCtrl'
          },
          'newPost': {
            templateUrl: "/templates/posts/new.html",
            controller: 'PostsNewCtrl'
          }
        }
      })
      .state('posts.show', {
        url: '/:id',
        views: {
          'display': {
            templateUrl: '/templates/posts/show.html',
            controller: 'PostsShowCtrl'
          },
          'newComment': {
            templateUrl: '/templates/comments/new.html',
            controller: 'CommentsNewCtrl'
          },
          'indexComment': {
            templateUrl: '/templates/comments/index.html',
            controller: 'CommentsIndexCtrl'
          }
        }
      });

}]);
