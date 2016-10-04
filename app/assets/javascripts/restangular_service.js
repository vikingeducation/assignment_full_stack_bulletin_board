BulletinBoard.factory('RestangularService',
['Restangular', '_',
function(Restangular,_) {

  var RestangularService = {};

  function _createPost (postParams) {
    return Restangular.all('posts').post({
      post: {
        title: postParams.title,
        author: postParams.author,
        body: postParams.body
      }
    });
  }

  RestangularService.getPosts = function () {
    return Restangular.all('posts').getList().$object;
  };

  RestangularService.getComments = function() {
    return Restangular.all('comments').getList().$object;
  };

  // Extend collection to give more functionality, like creating posts.
  Restangular.extendCollection('posts', function(collection) {
    collection.create = _createPost;
    return collection;
  });

  return RestangularService;

}]);
