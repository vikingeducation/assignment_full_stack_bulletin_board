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
    $urlRouterProvider.otherwise('/posts');
    $stateProvider
      .state('posts', {
        url: '/posts',
        templateUrl: '/templates/postsLayout.html',
      })
      .state('posts.index', {
        url: '/index',
        views: {
          'postIndex@posts': {
            templateUrl: '/templates/posts/index.html',
            controller: 'PostsIndexCtrl',
            resolve: {
              posts: ['Restangular', function(Restangular){
                return Restangular.all('posts').getList();
              }]
            }
          },
          'recentComments@posts': {
            templateUrl: 'templates/comments/index.html',
            controller: 'CommentsIndexCtrl',
            resolve: {
              comments: ['Restangular', function(Restangular){
                return Restangular.all('comments').getList();
              }]
            }
          },
        }
      })
      // .state('posts.show', {
      //   url: '/show/:id',
      //   views: {
      //     'recentComments@': {
      //       templateUrl: '/templates/posts/show.html',
      //       controller: 'PostsShowCtrl',
      //       resolve: {
      //         post: ['Restangular', '$stateParams',
      //             function(Restangular, $stateParams){
      //               return Restangular.one('posts', $stateParams.id).get();
      //         }]
      //       }
      //     },
      //     'postIndex@': {
      //       templateUrl: '/templates/posts/index.html',
      //       controller: 'PostsIndexCtrl',
      //       resolve: {
      //         posts: ['Restangular', function(Restangular){
      //           return Restangular.all('posts').getList();
      //         }]
      //       }
      //     }
      //   }
      // })
  }])

.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
