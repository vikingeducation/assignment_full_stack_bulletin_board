app.factory("restangularService", ["Restangular", function(Restangular) {

  var getAllPosts = function() {
    return Restangular.all("posts").getList();
  }

  return {
    getAllPosts: getAllPosts
  }
}])