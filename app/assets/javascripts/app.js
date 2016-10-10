angular.module("fullStackBB", ['ui.router', 'restangular'])



fullStackBB.factory("_", ['$window', function($window){
  return $window._;
}]);