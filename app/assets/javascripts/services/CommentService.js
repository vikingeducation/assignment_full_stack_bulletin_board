MyApp.factory('CommentService', ['Restangular', function(Restangular){

  var service = {};
  service.comments = Restangular.all('comments').getList().$object;

  service.createComment = function(params) {
    return Restangular.all('comments').post({
      comment: {
        author: params.author,
        body: params.body,
        score: 0,
        post_id: params.id
      }
    })
  }

  return service;
}]);
