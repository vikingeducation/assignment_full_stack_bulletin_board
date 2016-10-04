App.factory('PostService', ['Restangular', function(Restangular) {
  var _posts = [];

  var _populatePosts = function() {
    return Restangular.all('posts').getList()
      .then(function(postsArr) {
        for (var i =0; i < postsArr.length; i++) {
          postsArr[i].comments = Restangular.restangularizeCollection(null, postsArr[i].comments, 'comments');
        }
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

  var find = function(id) {
    id = Number(id);
    for (var i = 0; i < _posts.length; i++) {
      if (_posts[i].id === id) {
        return _posts[i];
      }
    }
  }

  return {
    getPosts: getPosts,
    createPost: createPost,
    find: find
  }

}]);
