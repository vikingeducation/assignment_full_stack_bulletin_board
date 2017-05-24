var app = angular.module('app', [
  'ui.router',
  'restangular',
]);

app.constant('_', window._);

app.run(function ($rootScope) {
    $rootScope._ = window._;
 });


app.config( ["$httpProvider", "$stateProvider", "$urlRouterProvider", 'RestangularProvider', '_', function($httpProvider, $stateProvider, $urlRouterProvider, RestangularProvider, _) {

  // CSRF stuff
  // var token = $('meta[name=csrf-token]').attr('content');
  // $httpProvider
  //   .defaults
  //   .headers
  //   .common['X-CSRF-Token'] = token;

  $urlRouterProvider.otherwise('/posts/index');

  $stateProvider
    .state('posts', {
      url: '/posts',
      views: {
        'header': {
          templateUrl: '/templates/posts/header.html',
        },
        'main': {
          templateUrl: '/templates/posts/main.html',
        },
        'recent-comments': {
          templateUrl: '/templates/posts/recent-comments.html',
          controller: 'CommentsCtrl'
        },
        'posts.index': {
          // url: '/index',
          templateUrl: "/templates/posts/index.html",
          controller: "PostsCtrl"
        }
      },
    })
    .state('posts.index', {
      url: '/index',
      templateUrl: "/templates/posts/index.html",
      controller: "PostsCtrl"
    })
    .state('posts.show', {
      url: '/show/:id',
      templateUrl: '/templates/posts/show.html',
      controller: "PostsCtrl"
    });


  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
  RestangularProvider.setDefaultHttpFields({
    "content-type": "application/json"
  });

}]);
