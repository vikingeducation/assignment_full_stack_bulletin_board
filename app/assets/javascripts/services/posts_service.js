app.factory('PostsService', ['Restangular', function(Restangular){

  var obj = {}

  obj.getPosts = function() {
    return Restangular.all('posts').getList();
  }

  // obj.getPost = function(){}

  return obj

}]);
