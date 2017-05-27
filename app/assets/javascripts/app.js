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
    .state('posts', {
      url: '',
      views: {
        "": {
          templateUrl: '/templates/posts/index.html',
          controller: 'PostsIndexCtrl'
        }
      }
    })

  // $urlRouterProvider.otherwise('');


});


// debugging
MyApp.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});