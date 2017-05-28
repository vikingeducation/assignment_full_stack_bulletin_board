MyApp.factory('PostService', ['Restangular', 'CommentService', function(Restangular, CommentService){

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

  // Restangular.extendModel('posts', function(model){
  //   model.createComment = function(params) {
  //     params.postId = model.id;
  //     console.log(params, 'PostService.js')

  //     return CommentService.createComment(params)
  //       .then(function(response){
  //         console.log('pushing this response')
  //         model.comments.push( response );
  //         return response
  //       })
  //   }
  //     return model;
  // })



  return service;
}]);
