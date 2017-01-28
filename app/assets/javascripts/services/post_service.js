myApp.factory("postService", ['Restangular', 'commentService', function(Restangular, commentService){

  var postService = {};

  postService.getPosts = function(){
    return Restangular.all('posts').getList();
  };

  postService.getPost = function(id){
    return Restangular.one('posts', id).get()
                      .then(function(post) {
            _restangularizePostComments(post);
            return post;
          });
  };

  postService.getComments = function(id){
    return Restangular.one('posts', id).all('comments').getList();
  };

  postService.createPost = function(formData){
    var post = { post: formData };
    return Restangular.all('posts').post(post);
  };

  Restangular.extendModel('posts', function(model){
    model.createComment = function(params){
      params.post_id = model.id;

      return commentService.createComment(params).then(function(response){
        return response;
      });
    };

    return model;
  })

  var _restangularizePostComments = function(post) {
    post.comments = Restangular
        .restangularizeCollection(post, post.comments, 'comments');
  };


  var _restangularizePostsComments = function(posts) {
    _.each(posts, function(post) {
      _restangularizePostComments(post);
    });
  };

  return postService;
}]);