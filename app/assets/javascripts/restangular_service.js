BulletinBoard.factory('RestangularService',
['Restangular', '_',
function(Restangular,_) {

  var RestangularService = {};

  RestangularService.getPosts = function () {
    return Restangular.all('posts').getList().$object;
  };

  RestangularService.getComments = function() {
    return Restangular.all('comments').getList().$object;
  };

  return RestangularService;

}]);
