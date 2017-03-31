bulletin.controller('postsShowCtrl', 
  ["$scope", "post",
  function($scope, post) {

    $scope.post = post
    $scope.showTest = "scoped show test var"
  }])