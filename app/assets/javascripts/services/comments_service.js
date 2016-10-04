myApp.factory("commentsService", ["Restangular", function(Restangular) {

  var _comments;

  var commentsService = {};

  var _createComment = function(params) {
    return Restangular.all('comments').post({
      comment: {
        title: params.title,
        author: params.author,
        body: params.body
      }
    })
      .then(function(response){
        console.log(response)
        _comments.unshift(response);
        return _comments;
      });
  };

  Restangular.extendCollection('comments', function(collection){
    collection.create = _createComment;

    return collection;
  });



  commentsService.create = function(params) {
    return _createComment(params);
  };

  commentsService.all = function() {
    _comments = Restangular.all('comments').getList().$object;
    return _comments;
  };


  return commentsService;

}])