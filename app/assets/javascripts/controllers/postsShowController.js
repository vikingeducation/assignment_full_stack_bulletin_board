app.controller("postsShowCtrl",["restangularService", "$scope", '$stateParams', function(restangularService, $scope, $stateParams){

  $scope.post = restangularService.getPost($stateParams.id).$object;

}]);
