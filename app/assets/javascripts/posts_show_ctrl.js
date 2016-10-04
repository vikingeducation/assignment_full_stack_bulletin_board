BulletinBoard.controller('PostsShowCtrl',
['$scope', 'RestangularService', '$stateParams',
function($scope, RestangularService, $stateParams) {

  $scope.post = RestangularService.one($stateParams.id);

}]);
