App.factory('PostService', ['Restangular', function(Restangular) {
  var _posts = [];

  var _populatePosts = function() {
    return Restangular.all('posts').getList()
      .then(function(postsArr) {
        return angular.copy(postsArr, _posts);
      });
  };

  var getPosts = function() {
    if (_posts.length) {
      return _posts;
    } else {
      return _populatePosts();
    }
  };

  return {
    getPosts: getPosts
  }

}]);
