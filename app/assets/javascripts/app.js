var App = angular.module('App', ['ui.router', 'restangular'])

App.factory('_' ['$window', function($window) {
  return $window._;
}]);
