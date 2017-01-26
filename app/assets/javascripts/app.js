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
    $urlRouterProvider.otherwise('');

    $stateProvider
      .state('root', {
        url: '',
        template: 'hello angular'
      })
  }])

.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
