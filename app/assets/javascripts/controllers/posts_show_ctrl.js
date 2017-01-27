myApp.controller('PostsShowCtrl', ['$scope', 'post', 'comments', 'Restangular', '$rootScope',
  function($scope, post, comments, Restangular, $rootScope){
    $scope.post = post;
    $scope.comments = comments;
    $scope.params = {
      author  : "",
      text    : ""
    }
    $scope.createComment = function(params) {
      console.log(params);
      $scope.post.createComment(params)
      .then( function(response) {
        $scope.comments.push(response);
        $rootScope.$broadcast('comment.created');
        $scope.params = {
          author  : "",
          text    : ""
        }
      }, function() {
        console.log("new comment failed");
      })
    }
  }])