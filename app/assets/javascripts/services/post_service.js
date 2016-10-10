fullStackBB.factory("postService", ['Restangular', 'commentService', function(Restangular, commentService){

  var service = {};

  service.getPosts = function(){
    return Restangular.all('posts').getList();
  };

  service.getPost = function(id){
    return Restangular.one('posts', id).get();
  };


  service.createPost = function(formData){
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


  return service;
}]);