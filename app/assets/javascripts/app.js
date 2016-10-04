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
        templateUrl: '/templates/posts/index.html',
        controller: 'PostsIndexCtrl',
        resolve: {
          posts: ['PostService', function(PostService) {
            return PostService.getPosts();
          }]
        }
      });




}]);
