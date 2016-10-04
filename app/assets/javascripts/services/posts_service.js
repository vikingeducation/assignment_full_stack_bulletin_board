app.factory('PostsService', ['Restangular', function(Restangular){

  var obj = {}

  obj.getPosts = function() {
    return Restangular.all('posts').getList();
  }

  // obj.getPost = function(){}

  obj.createPost = function(newPost) {
    var postObj = {post: newPost}
    Restangular.all('posts').post(postObj)
  }

  return obj;

}]);
