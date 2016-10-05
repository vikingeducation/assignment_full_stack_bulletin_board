BulletinBoard.controller('PostsCtrl',
['$scope', 'RestangularService',
function ($scope, RestangularService) {

  $scope.hello = "HELLO WORLD";
  $scope.postForm = {};

  $scope.data = {
    posts: RestangularService.getPosts()
  };

  $scope.sendPost = function () {
    console.log('this is firing');
    $scope.data.posts.create($scope.postForm);
    $scope.refreshPosts();
  };

  $scope.refreshPosts = function() {
    $scope.data.posts = RestangularService.getPosts();
  };

  $scope.upvote = function(comment) {
    console.log(comment);
    comment.upvote();
  };


  $scope.commentInfo = {
    comments: RestangularService.getComments()
  };
  // $scope.comments = RestangularService.getComments();

  $scope.$on('comment.create', function() {
    console.log('from the listener');

    $scope.commentInfo.comments = RestangularService.getComments();
    // $scope.comments = RestangularService.getComments();

  });

}]);
