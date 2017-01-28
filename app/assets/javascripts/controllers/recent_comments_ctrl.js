myApp.controller('RecentCommentsCtrl', ['$scope', 'comments', 'Restangular', 'commentService',
  function($scope, comments, Restangular, commentService){
    $scope.comments = comments;

    $scope.$on('comment.created', function() {
      commentService.getRecent()
        .then(function(comments) {
          angular.copy(comments, $scope.comments);
        });
    });

    $scope.$on('comment.updated', function(eventName, comment) {
      commentService.getRecent()
        .then(function(comments) {
          angular.copy(comments, $scope.comments);
        });
    });

    $scope.upvoteComment = function(id) {
      var comment = _.find($scope.comments, function(comment) {
        return comment.id === id;
      });

      comment.upvote()
        .then(function() {
          $rootScope.$broadcast('comment.updated');
        });
    };


    $scope.downvoteComment = function(id) {
      var comment = _.find($scope.comments, function(comment) {
        return comment.id === id;
      });

      comment.downvote()
        .then(function() {
          $rootScope.$broadcast('comment.updated');
        });
    };

  }])