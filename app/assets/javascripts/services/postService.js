bulletin.factory("postService", 
  ["Restangular", "commentService",
  function(Restangular, commentService) {

    Restangular.extendModel('posts', function(model) {
      model.createComment = function(params) {
        params.postID = model.id;
        console.log(params);

        return commentService.create(params)
          .then(function(response) {
            console.log(response);
            model.comments.push(response);
            return response;
          });
      };

      return model;
    });

    var postService = {};
    var _posts = Restangular.all('posts').getList().$object;

    postService.getPostComments = function(id) {
      return Restangular.one('posts', id).get();
      //return Restangular.one('posts', id).all('comments').getList();
    }

    postService.posts = function() {
      return _posts;
    }

    postService.addPost = function(newPost) {
      console.log('post service adding post')
      Restangular.all('posts').post({ post: { title: newPost.title,
                                              user: newPost.user,
                                              body: newPost.body }})
                              .then(function(createdPost) {
                                _posts.push(createdPost);
                              })
    }


    return postService;

}])