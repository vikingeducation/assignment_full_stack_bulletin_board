var myApp = angular.module("myApp", ["ui.router", "restangular"])

myApp.factory("_", ["$window", function($window) {
  return $window._
}])


myApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("main", {
      url: "/",
      templateUrl: "/templates/index.html",
      controller: "PostsCtrl"
    });
});

myApp.config(['RestangularProvider', function(RestangularProvider){
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
  RestangularProvider.setDefaultHttpFields({
    "content-type": "application/json"
  });
}]);

// myApp.config