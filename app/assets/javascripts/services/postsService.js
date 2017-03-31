bulletin.factory("postService", 
  ["Restangular", 
  function(Restangular) {

    var postService = {};
    var _posts = Restangular.all('posts').getList().$object

    postService.posts = function() {
      return _posts
    }


    return postService;

}])