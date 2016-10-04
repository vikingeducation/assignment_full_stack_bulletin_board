App.factory('PostService', ['Restangular', function(Restangular) {
  var _posts = [];

  var _populatePosts = function() {
    return Restangular.all('posts').getList()
      .then(function(postsArr) {
        return angular.copy(postsArr, _posts);
      });
  };

  var createPost = function(postData) {
    Restangular.all("posts").post(postData).then(function(newPost){
      _posts.push(newPost);
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
    getPosts: getPosts,
    createPost: createPost
  }

}]);
