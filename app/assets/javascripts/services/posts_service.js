"use strict";
app.factory('PostsService', ['Restangular', 'CommentsService', function(Restangular, CommentsService){

  var obj = {};

  obj.getPosts = function() {
    return Restangular.all('posts').getList();
  };

  obj.getPost = function(id){
    return Restangular.one('posts', id).get();
  }

  obj.createPost = function(newPost) {
    var postObj = {post: newPost};
    return Restangular.all('posts').post(postObj);
  };

  Restangular.extendModel('posts', function(model){
		model.createComment = function(params) {
      params.post_id = model.id;
      return CommentsService.createComment(params)
        .then(function(response){
          console.log("added comment")
          return response;
        });
    };
    return model;
	});


  return obj;

}]);
