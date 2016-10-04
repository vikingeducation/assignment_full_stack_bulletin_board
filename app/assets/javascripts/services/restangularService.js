app.factory("restangularService", ["Restangular", function(Restangular) {

  var getAllPosts = function() {
    return Restangular.all("posts").getList();
  };

  var getPost = function(id) {
    return Restangular.one('posts', id).get();
  };

  return {
    getAllPosts: getAllPosts,
    getPost: getPost
  };
}]);
