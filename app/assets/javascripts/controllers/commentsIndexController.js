app.controller("commentsIndexCtrl", ["restangularService", "$scope", function(restangularService, $scope){

  $scope.posts = restangularService.getRecentComments().$object

}]);
