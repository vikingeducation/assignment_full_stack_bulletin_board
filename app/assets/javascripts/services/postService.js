bulletinBoard.factory('postService', 
	['Restangular', '_', '$q', 'commentService', 
	function(Restangular, _, $q, commentService) {

	var service = {};

	var _posts = [];

	Restangular.extendModel('posts', function(model) {
		model.createComment = function(params) {
			params.postId = model.id;

			return commentService.createComment(params)
				.then(function(comment) {
					model.comments.push(comment);
					return comment;
				})
		}

		return model;
	})

	service.createPost = function(params) {
		return Restangular.all('posts').post({
			post: {
				title: params.title,
				author: params.author,
				body: params.body
			}
		})
		.then(function(post) {
			_posts.push(post);
			return _posts;

		}, function(response) {
			console.error(response);
		})
	}

	_fetchPosts = function() {
		return Restangular.all('posts').getList();
	}

	service.getPost = function(id) {
		return _fetchPosts()
			.then(function(posts) {

			id = parseInt(id);
			var post = _.findWhere(posts, {id: id});

			if (post) {
				return post;
			} else {
				return undefined;
			}
		})
	}

	service.getAllPosts = function() {
		return _fetchPosts();
	}

	return service;
}])