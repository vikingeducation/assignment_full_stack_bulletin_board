app = angular.module("bulletin", ["ui.router", 'restangular'])

app.factory('_', ['$window', function(){
  return $window._;
}]);


app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/posts');

  $stateProvider
    .state('posts', {
      url: "/posts",
      views: {
        "@": {
          templateUrl: '/templates/posts/index.html',
          controller: 'postsIndexCtrl'
        }
      }
    })
    .state('posts.show', {
      url: '/:id',
      views: {
        "@": {
          templateUrl: '/templates/posts/show.html',
          controller: 'postsShowCtrl'
        }
      }
    });

});

app.config(
  ["$httpProvider",
  function($httpProvider) {
  var token = $('meta[name=csrf-token]')
  .attr('content');
  $httpProvider
  .defaults
  .headers
  .common['X-CSRF-Token'] = token;
}]);

// Restangular config
app.config(
  ['RestangularProvider',
  function(RestangularProvider) {

  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');

}]);
