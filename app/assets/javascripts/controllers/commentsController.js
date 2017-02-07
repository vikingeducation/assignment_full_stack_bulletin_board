App.controller('CommentsCtrl', ['$scope', 'Restangular', function($scope, Restangular){

  $scope.comments = Restangular.all('comments').getList().$object;

}]);
