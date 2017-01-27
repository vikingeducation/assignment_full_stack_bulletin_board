myApp.factory("commentService", ['Restangular', function(Restangular){

  var commentService = {};

  commentService.getComments = function(){
    return Restangular.all('comments').getList();
  };

  commentService.getRecent = function(){
    return Restangular.all('comments').customGET('recent');
  };

  commentService.createComment = function(commentParams){
    var comment = { comment: commentParams };
    return Restangular.all('comments').post(comment);
  };

  // commentService.vote = function(comment, number){
  //   var data = { id: comment.id, number: number };
  //   return Restangular.all('comments').customPOST(data, 'vote');

  // };

  return commentService;
}]);