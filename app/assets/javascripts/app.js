myApp = angular.module('myApp', ['ui.router', 'restangular'])
.config(["$httpProvider", function($httpProvider) {
  var token = $('meta[name=csrf-token]')
  .attr('content');
  $httpProvider
      .defaults
      .headers
      .common['X-CSRF-Token'] = token;
  }])

.config(['RestangularProvider', function(RestangularProvider){
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
}])

.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/posts/index');
    $stateProvider
      .state('posts', {
        url: '/posts',
        views: {
          'recentComments@' : {
            templateUrl: 'templates/comments/index.html',
            controller: 'RecentCommentsCtrl',
            resolve: {
              comments: ['commentService', function(commentService){
                return commentService.getComments();
              }]
            }
          }
        }
      })
      .state('posts.index', {
        url: '/index',
        views: {
          'postIndex@': {
            templateUrl: '/templates/posts/index.html',
            controller: 'PostsIndexCtrl',
            resolve: {
              posts: ['postService', function(postService){
                return postService.getPosts();
              }]
            }
          },
        }
      })
      .state('posts.show', {
        url: '/show/:id',
        views: {
          'postIndex@': {
            templateUrl: '/templates/posts/show.html',
            controller: 'PostsShowCtrl',
            resolve: {
              post: ['postService', '$stateParams',
                function(postService, $stateParams){
                  return postService.getPost($stateParams.id);
              }]
            }
          },
        }
      })
  }])

.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
