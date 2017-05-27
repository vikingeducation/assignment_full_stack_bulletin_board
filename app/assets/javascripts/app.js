var MyApp = angular.module('MyApp', ['ui.router', 'restangular']);


MyApp.factory('_', ['$window', function($window) {
  return $window._;
}]);

MyApp.config(
  ['RestangularProvider',
  function(RestangularProvider) {

    RestangularProvider.setBaseUrl('/api/v1');
    RestangularProvider.setRequestSuffix('.json');

  }]);


MyApp.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('homepage', {
      url: '',
      views: {
        "postsIndexPanel": {
          templateUrl: '/templates/posts/index.html',
          controller: 'PostsIndexCtrl'
          // resolve: {
          //   posts: ['Restangular', function(Restangular){
          //     return Restangular.all('posts').getList();
          //   }]
          // }
        },
        "recentComments": {
          templateUrl: '/templates/comments/index.html',
          controller: 'CommentsIndexCtrl'
        }
      }
    })

  // $urlRouterProvider.otherwise('');


});


// debugging
MyApp.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});