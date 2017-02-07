var App = angular.module('App', ['ui.router', 'restangular']);

App.config(['RestangularProvider', function(RestangularProvider){
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
}]);


App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/posts/index');

  $stateProvider
    .state('posts', {
      url: '/posts',
      templateUrl: 'templates/index.html'
    })

    .state('posts.index', {
      url: '/index',
      views: {
        'posts' : {
          templateUrl: 'templates/_posts.html',
          controller: 'PostsCtrl'
        },
        'comments' : {
          templateUrl: 'templates/_comments.html',
          controller: 'CommentsCtrl'
        },
        '' : {

        }
      }
    })

    .state('posts.show', {
      url: '/:id',
      views: {
        '@' : {
          templateUrl: 'templates/_post.html',
          controller: 'PostsCtrl'
        },
        'comments@posts.show' : {
          templateUrl: 'templates/_comments.html',
          controller: 'CommentsCtrl'
        },
        'createComment@posts.show' : {
          templateUrl: 'templates/createComment.html',
          controller: 'CommentsCtrl'
        }
      }
    })


}]);
