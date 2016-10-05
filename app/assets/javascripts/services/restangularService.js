app.factory("restangularService", ["Restangular", function(Restangular) {

  var getAllPosts = function() {
    return Restangular.all("posts").getList();
  };

  var getPost = function(id) {
    return Restangular.one('posts', id).get();
  };

  var getRecentComments = function(){
    return Restangular.all("comments").getList();
  }

  return {
    getAllPosts: getAllPosts,
    getPost: getPost,
    getRecentComments: getRecentComments
  };
}]);
