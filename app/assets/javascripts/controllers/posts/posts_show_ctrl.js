MyApp.controller('PostsShowCtrl', ['$scope',  'Restangular', '$stateParams',  function($scope, Restangular, $stateParams){

  $scope.post = Restangular.one('posts', $stateParams.id).get().$object;

}]);
