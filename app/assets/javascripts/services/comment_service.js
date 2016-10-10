fullStackBB.factory("commentService", ['Restangular', function(Restangular){

  var service = {};

  service.getComments = function(){
    return Restangular.all('comments').getList();
  };

  service.getRecentComments = function(){
    return Restangular.all('comments').customGET('recent');
  };


  service.createComment = function(commentParams){
    var comment = { comment: commentParams };
    return Restangular.all('comments').post(comment);
  };


  return service;
}]);