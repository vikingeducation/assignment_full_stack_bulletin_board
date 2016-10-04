BulletinBoard.factory('RestangularService',
['Restangular', '_',
function(Restangular,_) {

  var RestangularService = {};

  RestangularService.getPosts = function () {
    return Restangular.all('posts').getList().$object;
  };

  return RestangularService;

}]);
