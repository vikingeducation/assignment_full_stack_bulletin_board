myApp.factory("commentService", ['Restangular', '$rootScope', function(Restangular, $rootScope){

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

  commentService.vote = function(comment_id, value){
    var data = { value: value };
    return Restangular.one('comments', comment_id).customPOST(data, 'vote')
                      .then( function() {
                        $rootScope.$broadcast('comment.updated');
                      })
  };

  return commentService;
}]);