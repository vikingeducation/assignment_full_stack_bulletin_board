fullStackBB.factory("postService", ['Restangular', function(Restangular){

  var service = {};

  service.getPosts = function(){
    return Restangular.all('posts').getList();
  };


  service.createPost = function(formData){
    var post = { post: formData };
    return Restangular.all('posts').post(post);
  };


  return service;
}]);