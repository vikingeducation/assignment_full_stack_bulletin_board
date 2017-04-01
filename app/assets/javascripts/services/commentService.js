bulletin.factory("commentService",
  ["Restangular", "$rootScope", 
  function(Restangular, $rootScope) {

    // Restangular.extendModel('comments', function(model) {
    //   model.upvote = function() {
    //     this.votes += 1;
    //     this.put();
    //   };

    //   model.downvote = function() {
    //     this.votes -= 1;
    //     this.put();
    //   }
    //   return model;
    // });

    var commentService = {};
    var _comments = Restangular.all('comments').getList().$object;

    commentService.upvote = function(comment) {
      comment.votes++;
      commentService.updateVotes(comment);
    }

    commentService.downvote = function(comment) {
      comment.votes--;
      commentService.updateVotes(comment);
    }

    commentService.updateVotes = function(comment) {
      return Restangular.one('comments', comment.id)
                        .customPATCH( comment )
                        .then( function(response) {
                          console.log(response)
                          $rootScope.$broadcast('comment.voted', response);
                        });      
    }


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