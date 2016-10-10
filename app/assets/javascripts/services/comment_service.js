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

  service.vote = function(comment, number){
    var data = { id: comment.id, number: number };
    return Restangular.all('comments').customPOST(data, 'vote');

  };


  


  return service;
}]);