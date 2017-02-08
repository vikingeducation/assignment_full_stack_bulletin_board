App.factory('CommentService', ['Restangular', function(Restangular){
  var CommentService = {};

  CommentService.all = function(){
    return Restangular.all('comments').getList().$object;
  };

  return CommentService;
}]);
