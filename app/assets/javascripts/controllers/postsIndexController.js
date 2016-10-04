app.controller("postsIndexCtrl",["restangularService", "$scope", function(restangularService, $scope){

  $scope.posts = restangularService.getAllPosts().$object

}]);
