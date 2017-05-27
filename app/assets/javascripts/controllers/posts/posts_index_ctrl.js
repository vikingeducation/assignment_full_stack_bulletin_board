MyApp.controller('PostsIndexCtrl', ['$scope', 'Restangular',  function($scope, Restangular){

  $scope.posts = Restangular.all('posts').getList().$object;


}]);
