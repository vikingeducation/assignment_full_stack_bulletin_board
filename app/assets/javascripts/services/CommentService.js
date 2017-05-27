MyApp.factory('CommentService', ['Restangular', function(Restangular){

  var service = {};
  service.comments = Restangular.all('comments').getList().$object;

  return service;
}]);
