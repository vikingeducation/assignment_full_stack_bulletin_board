MyApp.factory('PostService', ['Restangular', function(Restangular){

  var service = {};
  service.posts = Restangular.all('posts').getList().$object;

  service.createPost = function(params) {
    return Restangular.all('posts').post({
      post: {
        title: params.title,
        body: params.body,
        author: params.author
      }
    })
  };

  return service;
}]);
