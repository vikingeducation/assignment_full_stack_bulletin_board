MyApp.factory('PostService', ['Restangular', function(Restangular){

  var service = {};
  service.posts = Restangular.all('posts').getList().$object;

  return service;
}]);
