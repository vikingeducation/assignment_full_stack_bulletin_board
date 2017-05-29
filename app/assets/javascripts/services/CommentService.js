MyApp.factory('CommentService', ['Restangular', function(Restangular){

  var service = {};
  service.comments = Restangular.all('comments').getList().$object;

  service.updatedComments = function(){
    return Restangular.all('comments').getList();
  }

  service.createComment = function(params) {
    return Restangular.all('comments').post({
      comment: {
        author: params.author,
        body: params.body,
        score: 0,
        post_id: params.id
      }
    })
  };

  Restangular.extendModel('comments', function(model){
    model.updateScore = function(increment){
      model.score += increment;
      model.put();
    }
    return model;
  });

  return service;
}]);
