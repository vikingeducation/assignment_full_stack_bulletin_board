bulletin.factory("commentService",
  ["Restangular",
  function(Restangular) {
    var commentService = {};
    var _comments = Restangular.all('comments').getList().$object;

    commentService.refreshAll = function() {
      return Restangular.all('comments').getList();
    }

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

    commentService.comments = function() {
      // console.log(Restangular.all('comments').getList().$object);
      return _comments;
    }

    return commentService;

  }])