BulletinBoard.factory('RestangularService',
['Restangular', '_',
function(Restangular,_) {

  var RestangularService = {};

  function _createPost (postParams) {
    return Restangular.all('posts').post({
      post: {
        title: postParams.title,
        author: postParams.author,
        body: postParams.body
      }
    });
  }

  function _createComment(commentParams) {
    return Restangular.all('comments').post({
      comment: {
        author: commentParams.author,
        body: commentParams.body,
        post_id: commentParams.post_id,
        score: commentParams.score
      }
    });
  }

  RestangularService.getPosts = function () {
    return Restangular.all('posts').getList().$object;
  };

  RestangularService.one = function(id) {
    return Restangular.one('posts', id).get().$object;
  };

  RestangularService.getComments = function() {
    return Restangular.all('comments').getList().$object;
  };

  // RestangularService.updateCommentInfo = function(commentInfo) {
  //   commentInfo.comments = RestangularService.getComments();
  // };

  // Extend collection to give more functionality, like creating posts.
  Restangular.extendCollection('posts', function(collection) {
    collection.create = _createPost;
    return collection;
  });

  Restangular.extendModel('posts', function(model){
    model.createComment = function(params) {
      params.post_id = model.id;
      params.score = 1;
      return _createComment(params)
        .then(function(response) {
          console.log(response);
          model.comments.push(response);
        });
    };
    model.voteForComment = function(comment, dir) {
      comment.score += dir;
      return Restangular.restangularizeElement(null, comment, 'comments').put();
      // patch(comment);
    }
    return model;
  });

  Restangular.extendModel('comments', function(model){
    model.vote = function(dir) {
      model.score += dir
      model.put().then(function(response){
        console.log(response);
      }).catch(function(reason){
        console.log(reason);
      });
    }
    return model;
  })

  return RestangularService;

}]);
