var App = angular.module('App', ['ui.router', 'restangular']);


App.controller('AppCtrl', ['$scope', function($scope){
  $scope.hello = "Hello, World";
  console.log("Hello");
}]);
