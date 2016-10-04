"use strict";
app.factory('PostsService', ['Restangular', function(Restangular){

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

  return obj;

}]);
