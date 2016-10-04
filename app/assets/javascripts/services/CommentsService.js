App.factory('CommentsService', ['Restangular', function(Restangular) {
  var _comments = [];

  var _populateComments = function() {
    return Restangular.all('comments').getList()
      .then(function(commentsArr) {
        return angular.copy(commentsArr, _comments);
      });
  };

  var getComments = function() {
    if (_comments.length) {
      return _comments;
    } else {
      return _populateComments();
    }
  };

  return {
    getComments: getComments
  }

}]);
