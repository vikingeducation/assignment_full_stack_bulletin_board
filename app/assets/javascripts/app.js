var MyApp = angular.module('MyApp', ['ui.router', 'restangular']);


MyApp.factory('_', ['$window', function($window) {
  return $window._;
}]);


MyApp.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('default', {
      url: '',
      views: {
        "": {
          template: 'Angular reporting in'
        }
      }
    })

});


// debugging
MyApp.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});