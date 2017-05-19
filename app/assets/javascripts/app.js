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

  $urlRouterProvider.otherwise('');

  $stateProvider
    .state('posts', {
      url: 'posts',
      templateUrl: '/templates/posts/index.html',
      controller: 'PostsCtrl'
    });


  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
  RestangularProvider.setDefaultHttpFields({
    "content-type": "application/json"
  });

}]);
