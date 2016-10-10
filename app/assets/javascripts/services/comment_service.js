fullStackBB.factory("commentService", ['Restangular', function(Restangular){

  var service = {};

  service.getComments = function(){
    return Restangular.all('comments').getList();
  };


  return service;
}]);