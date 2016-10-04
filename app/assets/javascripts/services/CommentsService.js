App.factory('CommentsService', ['Restangular', 'PostService', function(Restangular, PostService) {
  var _comments = [];

  var _populateComments = function() {
    return Restangular.all('comments').getList()
      .then(function(commentsArr) {
        return angular.copy(commentsArr, _comments);
      });
  };

  var updateVote = function(comment, vote) {
    comment.patch({votes: comment.votes + vote}).then(function(response) {
      comment.votes = response.votes;
      for (var i = 0; i < _comments.length; i++) {
        if (_comments[i].id === comment.id) {
          _comments[i] = comment;
        }
      }
    })
  }


  var getComments = function() {
    if (_comments.length) {
      return _comments;
    } else {
      return _populateComments();
    }
  };

  var createComment = function(commentData) {
    commentData.votes = 0;
    Restangular.all('comments').post(commentData)
      .then(function(newComment) {
        _comments.push(newComment);
        var posts = PostService.getPosts();
        for (var i = 0; i < posts.length; i++) {
          if (newComment.post_id === posts[i].id) {
            posts[i].comments.push(newComment);
          }
        }
      });
  };

  return {
    getComments: getComments,
    updateVote: updateVote,
    createComment: createComment
  }

}]);
