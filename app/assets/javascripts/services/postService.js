app.factory('postsService', ["Restangular", "_", function(Restangular, _){

  var _posts;

  var postsService = {};

  postsService.all = function() {
    _posts = Restangular.all('posts').getList().$object;
    return _posts;
  };

  return postsService;

}]);
