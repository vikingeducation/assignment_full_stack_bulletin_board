app = angular.module("bulletin", ["ui.router", 'restangular', 'Devise'])

MyApp.factory('_', ['$window', function(){
  return $window._;
}]);


MyApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/posts');

  $stateProvider
    .state('posts', {
      url: "/posts",
      views: {
        "": {
          templateUrl: '/templates',
          controller: 'postsIndexCtrl'
        }
      }
    })

})

MyApp.config(
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
MyApp.config(
  ['RestangularProvider',
  function(RestangularProvider) {

  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');

}]);
