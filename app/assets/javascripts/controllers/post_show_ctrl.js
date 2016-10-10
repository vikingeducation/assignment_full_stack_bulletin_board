fullStackBB.controller("PostShowCtrl", ['$scope', 'postService', '$rootScope', '$stateParams', function($scope, postService, $rootScope, $stateParams){


  $scope.post = postService.getPost($stateParams.id).$object;

}])