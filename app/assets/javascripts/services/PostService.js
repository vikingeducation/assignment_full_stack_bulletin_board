App.factory("PostService", ['Restangular', function(Restangular){
    var _posts = [];
    var PostService = {};

    var _createPost = function(params){
        return Restangular.all('posts').post({
          post: {
            title: params.title,
            author: params.author,
            body: params.body
          }
        })
        .then(function(response){
          console.log(response);
          _posts.unshift(response);
          return _posts;
        })
    };

    Restangular.extendCollection('posts', function(collection){
      collection.create = _createPost;
      return collection;
    });

    PostService.create = function(params){
      return _createPost(params);
    };

    PostService.all = function(){
      return Restangular.all('posts').getList().$object;
    };

    return PostService;



}]);
