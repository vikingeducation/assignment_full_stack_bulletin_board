var BulletinBoard = angular.module('BulletinBoard', ['ui.router', 'restangular']);

BulletinBoard.factory('_', ['$window', function($window) {
  return $window._;
}]);

BulletinBoard.config(['$stateProvider', '$urlRouterProvider', 'RestangularProvider',
function($stateProvider, $urlRouterProvider, RestangularProvider){

  // Restangular
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');

  $urlRouterProvider.otherwise('/posts');

  $stateProvider
    .state('Posts', {
      url: '/posts',
      controller: 'PostsCtrl',
      views: {
        '': {
          templateUrl: '/templates/posts/index.html',
        },
        'recentComments': {
          templateUrl: '/templates/comments/recent_comments.html'
        }
      }
    })
    .state('Posts.show',  {
      url: '/:id',
      views: {
        '@': {
          templateUrl: '/templates/posts/show.html',
          controller: 'PostsShowCtrl'
        }
      },
      onEnter: function() {
        console.log('this is firing (SHOW)');
      }
    });
}]);


BulletinBoard.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
