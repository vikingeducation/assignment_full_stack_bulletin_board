var myApp = angular.module("myApp", ["ui.router", "restangular"])


myApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/")

  $stateProvider
    .state("main", {
      url: "/",
      templateUrl: "/templates/index.html",
      controller: function($scope) {
        console.log("controller")
      }
    })
})

// myApp.config