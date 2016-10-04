myApp.factory('PostsService', ['Restangular', '_', function(Restangular, _){

  var _posts;

  var postsService = {};

  var _createPost = function(params) {
    return Restangular.all('posts').post({
      post: {
        title: params.title,
        author: params.author,
        body: params.body
      }
    })
      .then(function(response){
        console.log(response)
        _posts.unshift(response);
        return _posts;
      });
  };

  Restangular.extendCollection('posts', function(collection){
    collection.create = _createPost;

    return collection;
  });



  PostsService.create = function(params) {
    return _createPost(params);
  };

  PostsService.all = function() {
    _posts = Restangular.all('posts').getList().$object;
    return _posts;
  };


  return postsService;

}]);