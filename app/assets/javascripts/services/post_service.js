myApp.factory("postService", ['Restangular', 'commentService', function(Restangular, commentService){

  var postService = {};

  postService.getPosts = function(){
    return Restangular.all('posts').getList();
  };

  postService.getPost = function(id){
    return Restangular.one('posts', id).get();
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

  return postService;
}]);