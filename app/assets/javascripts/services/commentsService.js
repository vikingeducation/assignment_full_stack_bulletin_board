bulletin.factory("commentService",
  ["Restangular",
  function(Restangular) {
    var commentService = {};

    commentService.create = function(newComment) {
      return Restangular.all('comments').post({
        comment: {
          user: newComment.user,
          body: newComment.body,
          post_id: newComment.postID,
          votes: 0
        }
      });
    };

    return commentService;

  }])